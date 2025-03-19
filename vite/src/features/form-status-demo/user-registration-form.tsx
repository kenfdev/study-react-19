import { useActionState, Suspense, useMemo } from 'react';
import { SubmitButton } from './submit-button';
import { FormFeedback } from './form-feedback';
import { registerUser } from './api/register-user';
import { UserTypeSelect } from './user-type-select';
import { getUserTypes } from './api/get-user-types';

export function UserRegistrationForm() {
  const [registrationResult, submitAction] = useActionState<
    { name: string; email: string; success: boolean } | null,
    FormData
  >(async (_previousState, formData) => {
    const result = await registerUser(
      formData.get('name') as string,
      formData.get('email') as string,
      formData.get('userType') as string
    );
    return result;
  }, null);

  // Memoize the promise so it's only created once
  const userTypesPromise = useMemo(() => getUserTypes(), []);

  return (
    <div className="registration-container">
      <h2>Create Account</h2>

      <form action={submitAction}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="userType">User Type</label>
          <Suspense fallback={<div>Loading...</div>}>
            <UserTypeSelect getUserTypes={userTypesPromise} />
          </Suspense>
        </div>

        {/* Child component that uses useFormStatus for the submit button */}
        <SubmitButton />

        {/* Child component that uses useFormStatus to show submitted data */}
        <FormFeedback />
      </form>

      {registrationResult && (
        <div className="success-message">
          Registration successful for {registrationResult.name}!
        </div>
      )}
    </div>
  );
}
