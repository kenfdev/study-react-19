import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  // Access form submission status with useFormStatus
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`submit-button ${pending ? 'loading' : ''}`}
    >
      {pending ? 'Creating Account...' : 'Create Account'}
      {pending && <span className="spinner"></span>}
    </button>
  );
}
