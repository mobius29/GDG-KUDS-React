import { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';
import { fn } from '@storybook/test';

const meta = {
  title: 'TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: { onChange: fn(), placeholder: 'Write the text' },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'large',
    label: '',
    disabled: false,
  },
};
