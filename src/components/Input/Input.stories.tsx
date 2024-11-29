import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import { fn } from '@storybook/test';

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  args: { onChange: fn(), placeholder: 'Input' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    colorType: 'primary',
    inputType: 'text',
    size: 'small',
    label: '',
    helpText: '',
    status: 'default',
    disabled: false,
  },
};
