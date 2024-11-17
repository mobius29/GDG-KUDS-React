import { Meta, StoryObj } from "@storybook/react";
import { Typography } from ".";

const { Header } = Typography;

const meta = {
  title: "Typography",
  component: Header,
  tags: ["autodocs"],
  args: { level: 1, children: "asdfasdf" },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header1: Story = {};
