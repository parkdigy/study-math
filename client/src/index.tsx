import React, { lazy } from 'react';
import { createRoot } from 'react-dom/client';

const App = lazy(() => import('./App'));

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
  );
}
