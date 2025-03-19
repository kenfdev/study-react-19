import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ActionsDemoPage } from './features/actions-demo';
import { FormStatusDemoPage } from './features/form-status-demo';
import { OptimisticDemoPage } from './features/use-optimistic-demo';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/actions-demo" element={<ActionsDemoPage />} />
        <Route path="/form-status-demo" element={<FormStatusDemoPage />} />
        <Route path="/optimistic-demo" element={<OptimisticDemoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
