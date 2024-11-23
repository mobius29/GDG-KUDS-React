import { Meta, StoryObj } from '@storybook/react';
import { Typography } from '.';

const meta = {
  title: 'Typography',
  component: Typography,
  tags: ['autodocs'],
  args: { level: 1, size: 'medium', children: 'Hello, this is a body.' },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body1: Story = {};
