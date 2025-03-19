import { ThemeSwitcher } from './theme-switcher';
import { ThemeContext } from './theme-context';
import { useState } from 'react';

export function ContextDemoPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  return (
    <div>
      <h1>Theme Context Demo</h1>
      <ThemeContext value={{ theme, setTheme }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <p>
            This example demonstrates using React v19's 'use' hook with context.
          </p>
          <ThemeSwitcher />
        </div>
      </ThemeContext>
    </div>
  );
}
