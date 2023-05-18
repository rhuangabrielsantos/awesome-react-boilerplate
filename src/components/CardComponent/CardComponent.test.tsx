import { render, screen } from '@testing-library/react';

import { expectA11YTest } from '@/testUtils';

import { CardComponent } from './CardComponent';

describe('<CardComponent />', () => {
  it('should render card title', () => {
    render(<CardComponent />);
    const cardTitle = screen.getByText('Hello World');
    expect(cardTitle).toBeInTheDocument();
  });

  it('should follow accesibility rules', async () => {
    await expectA11YTest(<CardComponent />);
  });
});
