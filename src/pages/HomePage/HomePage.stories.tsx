import { Meta, StoryObj } from '@storybook/react';
import { HomePage } from './HomePage';

type Story = StoryObj<typeof HomePage>;

const meta: Meta<typeof HomePage> = {
  title: 'Pages/HomePage',
  component: HomePage
};

export const Basic: Story = {};

export default meta;
