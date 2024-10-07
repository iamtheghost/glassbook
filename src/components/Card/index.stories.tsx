import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    variant: "lightSolid",
    colorscheme: "secondary",
    textArg: "dark",
  },
};

export const Dark: Story = {
  args: {
    variant: "darkSolid",
    colorscheme: "primary",
    textArg: "light",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    colorscheme: "primary",
    textArg: "light",
  },
};
