import { useActionState } from 'react';
import { updateName } from './api/update-name';

type UpdateNameFormState = string | null;

type UpdateNameFormPayload = FormData;

export function UpdateNameForm() {
  const [error, submitAction, isPending] = useActionState<
    UpdateNameFormState,
    UpdateNameFormPayload
  >(async (_previousState, formData) => {
    const error = await updateName(formData.get('name') as string);
    if (error) {
      return error;
    }
    // redirect('/path');
    return null;
  }, null);

  return (
    <form action={submitAction}>
      <h2>Update Name Form (useActionState)</h2>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
