import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ReactElement } from 'react';

expect.extend(toHaveNoViolations);

export const expectA11YTest = async (ui: ReactElement) => {
  const { container } = render(ui);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
};
