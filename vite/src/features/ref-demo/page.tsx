import { useState, useRef } from 'react';
import { CustomInput } from './custom-input';

export function RefDemoPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string>('');

  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleGetValue = () => {
    if (inputRef.current) {
      setMessage(`Current value: "${inputRef.current.value}"`);
    }
  };

  return (
    <div>
      <h1>React v19 Ref Demo</h1>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <p>
          This example demonstrates how React v19 allows passing refs directly
          to child components without needing to use forwardRef.
        </p>

        <CustomInput
          label="Enter some text"
          placeholder="Type something..."
          ref={inputRef}
        />

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button onClick={handleFocusInput} style={{ padding: '0.5rem 1rem' }}>
            Focus Input
          </button>
          <button onClick={handleGetValue} style={{ padding: '0.5rem 1rem' }}>
            Get Current Value
          </button>
        </div>

        {message && (
          <div
            style={{
              marginTop: '1rem',
              padding: '1rem',
              background: '#333',
              color: 'white',
              borderRadius: '4px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
