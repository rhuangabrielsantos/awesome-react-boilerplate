import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from '@/routes';
import { globalStyles } from '@/styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {globalStyles()}

    <Router />
  </React.StrictMode>
);
