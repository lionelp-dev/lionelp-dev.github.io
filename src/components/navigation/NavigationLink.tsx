import { cn } from "../../lib/utils";
import { MailIcon } from "../MailIcon";
import { Typography } from "../Typography";
import type { NavigationItem } from "./navigation.config";

type NavigationLinkProps = {
  item: NavigationItem;
  active: boolean;
  variant: "desktop" | "mobile";
  onNavigate: () => void;
};

export function NavigationLink({
  item,
  active,
  variant,
  onNavigate,
}: NavigationLinkProps) {
  const className = cn(
    variant === "desktop"
      ? "group relative inline-flex h-full shrink-0 items-center no-underline transition-colors"
      : item.kind === "anchor" && item.sectionId === "contact"
        ? "group flex items-center gap-3 rounded-lg px-3 py-3 no-underline transition-colors hover:bg-base-200"
        : "group h-full rounded-lg px-3 py-3 no-underline transition-colors hover:bg-base-200",
    variant === "desktop" &&
      active &&
      "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-base-content",
  );

  const content = (
    <Typography
      as="span"
      variant={
        variant === "desktop" ? "navigation-label" : "mobile-navigation-label"
      }
    >
      {item.label}
    </Typography>
  );

  return (
    <a
      className={className}
      href={`#/portfolio#${item.sectionId}`}
      aria-current={active ? "location" : undefined}
      onClick={onNavigate}
    >
      {variant === "mobile" && item.sectionId === "contact" ? (
        <>
          <MailIcon className="size-5 flex-none" />
          {content}
        </>
      ) : (
        content
      )}
    </a>
  );
}
