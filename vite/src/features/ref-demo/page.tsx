import { useState, useRef } from 'react';
import { CustomInput } from './custom-input';

const handleKeyPress = () => {
  console.log('handleKeyPress');
};

export function RefDemoPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string>('');
  const [isExampleMounted, setIsExampleMounted] = useState<boolean>(false);

  // Example of ref with cleanup function
  const keyListenerRef = useRef<HTMLInputElement | null>(null);

  // Function to apply the ref callback
  const setKeyListener = (element: HTMLInputElement | null) => {
    if (!element) return;

    // Add event listener
    element.addEventListener('keyup', handleKeyPress);
    keyListenerRef.current = element;

    // Return cleanup function that will be called automatically
    return () => {
      console.log('cleanup');
      element.removeEventListener('keyup', handleKeyPress);
    };
  };

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

  const toggleExample = () => {
    setIsExampleMounted((prev) => !prev);
  };

  return (
    <div>
      <h1>React v19 Ref Demo</h1>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <p>
          This example demonstrates how React v19 allows passing refs directly
          to child components without needing to use forwardRef.
        </p>

        <div
          style={{
            marginBottom: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <button
            onClick={toggleExample}
            style={{
              padding: '0.5rem 1rem',
              background: isExampleMounted ? '#f44336' : '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            {isExampleMounted ? 'Unmount Example' : 'Mount Example'}
          </button>
        </div>

        {isExampleMounted && (
          <div
            style={{
              marginBottom: '1.5rem',
              padding: '1.5rem',
              background: '#333',
              color: 'white',
              borderRadius: '8px',
              border: '2px solid #0078d7',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
          >
            <h3 style={{ color: '#0095ff', marginTop: 0 }}>
              Ref Cleanup Example
            </h3>
            <p style={{ fontSize: '1.1rem' }}>
              This input uses a ref with a cleanup function for the keyup event
              listener.
            </p>

            <CustomInput
              label="Try typing here"
              placeholder="Type to count keystrokes..."
              ref={setKeyListener}
            />
            <p
              style={{
                fontSize: '0.95rem',
                fontStyle: 'italic',
                marginTop: '1rem',
                color: '#aaf',
                padding: '0.5rem',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '4px',
              }}
            >
              The event listener is automatically cleaned up when the component
              unmounts or if the ref changes.
            </p>
          </div>
        )}

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
