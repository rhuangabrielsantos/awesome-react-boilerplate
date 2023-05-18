import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@/pages';

export const routes = [
  {
    path: '/',
    element: <HomePage />
  }
];

export const router = createBrowserRouter(routes);
