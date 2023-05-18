import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from '@/App';
import { globalStyles } from '@/styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {globalStyles()}

    <App />
  </React.StrictMode>
);
