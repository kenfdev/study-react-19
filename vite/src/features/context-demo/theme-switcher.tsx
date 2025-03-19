import { use } from 'react';
import { ThemeContext } from './theme-context';

export function ThemeSwitcher() {
  const { theme, setTheme } = use(ThemeContext);
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <div style={{ 
      padding: '1rem', 
      backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
      color: theme === 'light' ? '#333333' : '#ffffff',
      borderRadius: '0.5rem',
      transition: 'all 0.3s ease'
    }}>
      <p>Current theme: {theme}</p>
      <button 
        onClick={toggleTheme}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: theme === 'light' ? '#333333' : '#ffffff',
          color: theme === 'light' ? '#ffffff' : '#333333',
          border: 'none',
          borderRadius: '0.25rem',
          cursor: 'pointer'
        }}
      >
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </div>
  );
} 