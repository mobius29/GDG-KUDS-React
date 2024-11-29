import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { fn } from '@storybook/test';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const withoutIcon: Story = {
  args: {
    children: 'Button',
  },
  argTypes: {
    icon: {
      control: false,
    },
  },
};

export const withIcon: Story = {
  args: {
    icon: 'a',
    size: 'md',
    colorType: 'yellow',
    loading: true,
  },
};
