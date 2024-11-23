import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { fn } from '@storybook/test';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn(), children: 'Button' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { className: 'asdf' },
};

export const Secondary: Story = {
  args: { className: 'zxcv' },
};

export const Test: Story = {
  args: { className: 'zxcv' },
};
