import type { Meta, StoryObj } from "@storybook/tanstack-react";

import { Typography } from "./Typography";

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const variantGroups = [
  {
    name: "Headings — Sans",
    variants: ["h1", "h2", "h3", "h4", "h5"],
    font: "sans",
  },
  {
    name: "Headings — Serif",
    variants: ["h1", "h2", "h3", "h4", "h5"],
    font: "serif",
  },
  {
    name: "Paragraphs",
    variants: ["p1", "p2", "p3", "p4", "p5", "p6", "eyebrow"],
    font: "sans",
  },
] as const;

const variants = Array.from(
  new Set(
    variantGroups.flatMap(({ variants: groupVariants }) =>
      Array.from(groupVariants),
    ),
  ),
);

const meta = {
  title: "Design System/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: "select",
      options: variants,
    },
    font: {
      control: "select",
      options: ["sans", "serif"],
    },
    as: {
      control: "select",
      options: ["p", "span", "h1", "h2", "h3", "h4", "h5", "div"],
    },
  },
  args: {
    children: loremIpsum,
    variant: "p4",
    font: "sans",
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <main className="flex max-w-6xl flex-col gap-16 text-base-content">
      {variantGroups.map((group) => (
        <section key={group.name} className="flex flex-col gap-8">
          <Typography as="h2" variant="h4">
            {group.name}
          </Typography>
          <div className="grid gap-10">
            {group.variants.map((variant) => (
              <div
                key={variant}
                className="grid gap-3 border-base-300 border-b pb-8"
              >
                <Typography as="span" variant="p6">
                  {variant}
                </Typography>
                <Typography
                  variant={variant}
                  font={group.font}
                  className="max-w-3xl"
                >
                  {loremIpsum}
                </Typography>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  ),
};
