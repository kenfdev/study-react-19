import { useFormStatus } from 'react-dom';

export function FormFeedback() {
  // Access form submission data with useFormStatus
  const { pending, data } = useFormStatus();

  // Only show when form is being submitted
  if (!pending) return null;

  // Extract values from FormData
  const name = data ? (data.get('name') as string) : '';
  const email = data ? (data.get('email') as string) : '';
  const userType = data ? (data.get('userType') as string) : '';
  return (
    <div className="submission-info">
      <h3>Submitting Registration:</h3>
      <p>
        Name: <strong>{name}</strong>
      </p>
      <p>
        Email: <strong>{email}</strong>
      </p>
      <p>
        User Type: <strong>{userType}</strong>
      </p>
      <p className="status-message">
        Please wait while we process your registration...
      </p>
    </div>
  );
}
