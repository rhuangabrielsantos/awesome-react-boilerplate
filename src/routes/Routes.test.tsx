import { render, screen } from '@testing-library/react';

import { renderWithRouter } from '@/testUtils/render';

import { routes } from './Routes';
import { Router } from './index';

describe('<Routes />', () => {
  it('should render HomePage when path is "/"', () => {
    const initialEntries = ['/'];
    renderWithRouter({ routes, initialEntries });

    const homeTitle = screen.getByText('Awesome React Boilerplate');
    expect(homeTitle).toBeInTheDocument();
  });

  it('should render Pages when render Router component', () => {
    render(<Router />);
    const homeTitle = screen.getByText('Awesome React Boilerplate');
    expect(homeTitle).toBeInTheDocument();
  });
});
