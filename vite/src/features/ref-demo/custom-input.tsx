import { InputHTMLAttributes, RefAttributes } from 'react';

// Extending the props type to include ref
type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
} & RefAttributes<HTMLInputElement>;

export function CustomInput(props: CustomInputProps) {
  const { label, ...inputProps } = props;

  return (
    <div className="input-container" style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem' }}>
        {label}
      </label>
      <input 
        {...inputProps} 
        style={{ 
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '100%',
          ...props.style
        }} 
      />
    </div>
  );
} 