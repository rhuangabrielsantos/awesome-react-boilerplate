import { Meta, StoryObj } from '@storybook/react';
import { CardComponent } from './CardComponent';

type Story = StoryObj<typeof CardComponent>;

const meta: Meta<typeof CardComponent> = {
  title: 'Components/CardComponent',
  component: CardComponent
};

export const Basic: Story = {
  args: {
    title: 'Hello World'
  },
  argTypes: {
    color: {
      options: ['dark', 'light'],
      control: { type: 'select' },
      defaultValue: 'dark'
    }
  }
};

export default meta;
