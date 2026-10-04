import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { Heart } from "lucide-react";

const sizes = [
  { buttonClass: "btn-xl", badgeClass: "badge-xl", label: "XL" },
  { buttonClass: "btn-lg", badgeClass: "badge-lg", label: "LG" },
  { buttonClass: "", badgeClass: "", label: "MD" },
  { buttonClass: "btn-sm", badgeClass: "badge-sm", label: "SM" },
  { buttonClass: "btn-xs", badgeClass: "badge-xs", label: "XS" },
] as const;

const buttonVariants = [
  "btn-soft",
  "btn-primary",
  "btn-secondary",
  "btn-accent",
  "btn-info",
  "btn-success",
  "btn-warning",
  "btn-error",
  "btn-ghost",
] as const;

const badgeVariants = [
  "badge-outline",
  "badge-primary",
  "badge-secondary",
  "badge-accent",
  "badge-info",
  "badge-success",
  "badge-warning",
  "badge-error",
  "badge-ghost",
] as const;

function ControlSizes() {
  return (
    <main className="flex max-w-4xl flex-col gap-16 p-5 text-base-content">
      <ControlGroup title="Button">
        {buttonVariants.map((variant) => (
          <div key={variant} className="flex items-center gap-3">
            {sizes.map((size) => (
              <button
                key={size.label}
                type="button"
                className={`btn ${variant} ${size.buttonClass} rounded-full`}
              >
                <Heart className="size-[1em] fill-current" aria-hidden="true" />
                Button {size.label}
              </button>
            ))}
          </div>
        ))}
      </ControlGroup>

      <ControlGroup title="Badge">
        {badgeVariants.map((variant) => (
          <div key={variant} className="flex items-center gap-3">
            {sizes.map((size) => (
              <span
                key={size.label}
                className={`badge ${variant} ${size.badgeClass} rounded-full`}
              >
                <Heart className="size-[1em] fill-current" aria-hidden="true" />
                Badge {size.label}
              </span>
            ))}
          </div>
        ))}
      </ControlGroup>
    </main>
  );
}

function ControlGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="flex flex-col gap-6">{children}</div>
    </section>
  );
}

const meta = {
  title: "Design System/Controls",
  component: ControlSizes,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ControlSizes>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllSizes: Story = {};
