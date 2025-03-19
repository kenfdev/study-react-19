import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import { ActionsDemoPage } from './features/actions-demo';
import { FormStatusDemoPage } from './features/form-status-demo';
import { OptimisticDemoPage } from './features/use-optimistic-demo';
import { ContextDemoPage } from './features/context-demo';
import { RefDemoPage } from './features/ref-demo';
import { DocumentMetaDemoPage } from './features/document-meta-demo';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/actions-demo" element={<ActionsDemoPage />} />
        <Route path="/form-status-demo" element={<FormStatusDemoPage />} />
        <Route path="/optimistic-demo" element={<OptimisticDemoPage />} />
        <Route path="/context-demo" element={<ContextDemoPage />} />
        <Route path="/ref-demo" element={<RefDemoPage />} />
        <Route path="/document-meta-demo" element={<DocumentMetaDemoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
