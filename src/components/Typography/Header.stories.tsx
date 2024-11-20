import { Meta, StoryObj } from "@storybook/react";
import { Typography } from ".";

const { Header } = Typography;

const meta = {
  title: "Header",
  component: Header,
  tags: ["autodocs"],
  args: { level: 1, children: "Hello, this is a header." },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header1: Story = {};
