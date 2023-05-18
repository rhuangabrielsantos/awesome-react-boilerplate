import { render, screen } from '@testing-library/react';

import { expectA11YTest } from '@/testUtils';

import { HomePage } from './HomePage';

describe('<HomePage />', () => {
  it('should render card title', () => {
    render(<HomePage />);
    const cardTitle = screen.getByText('Awesome React Boilerplate');
    expect(cardTitle).toBeInTheDocument();
  });

  it('should follow accesibility rules', async () => {
    await expectA11YTest(<HomePage />);
  });
});
