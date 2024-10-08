import type { Meta, StoryObj } from "@storybook/react";

import Table from ".";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    variant: "dark",
    children: "Table",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
    children: "Table",
  },
};
