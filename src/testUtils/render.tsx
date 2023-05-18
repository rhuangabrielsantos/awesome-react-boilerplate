import { render } from '@testing-library/react';
import {
  RouterProvider,
  RouteObject,
  createMemoryRouter
} from 'react-router-dom';

interface RenderWithRouterProps {
  routes: RouteObject[];
  initialEntries: string[];
}

export const renderWithRouter = ({
  routes,
  initialEntries
}: RenderWithRouterProps) => {
  const router = createMemoryRouter(routes, {
    initialEntries
  });

  return render(<RouterProvider router={router} />);
};
