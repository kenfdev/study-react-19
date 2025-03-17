import { useActionState } from 'react';
import { SubmitButton } from './submit-button';
import { FormFeedback } from './form-feedback';
import { registerUser } from './api/register-user';

export function UserRegistrationForm() {
  const [registrationResult, submitAction] = useActionState<
    { name: string; email: string; success: boolean } | null,
    FormData
  >(async (_previousState, formData) => {
    const result = await registerUser(
      formData.get('name') as string,
      formData.get('email') as string
    );
    console.log('register user result', result);
    return result;
  }, null);
  console.log('registrationResult', registrationResult);

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
