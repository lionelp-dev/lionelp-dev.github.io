import { Link } from "@tanstack/react-router";
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
      ? "relative inline-flex h-full shrink-0 items-center text-base-content/70 text-sm leading-none tracking-[-0.002em] no-underline transition-colors hover:text-base-content"
      : item.kind === "anchor" && item.sectionId === "contact"
        ? "flex items-center gap-3 rounded-lg px-3 py-3 font-bold text-base-content/75 text-sm leading-tight no-underline transition-colors hover:bg-base-200 hover:text-base-content"
        : "h-full rounded-lg px-3 py-3 font-bold text-base-content/75 text-sm leading-tight no-underline transition-colors hover:bg-base-200 hover:text-base-content",
    variant === "desktop" &&
      active &&
      "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-base-content",
  );

  const content = (
    <Typography as="span" variant="label">
      {item.label}
    </Typography>
  );

  if (item.kind === "route") {
    return (
      <Link
        className={className}
        to={item.to}
        aria-current={active ? "page" : undefined}
        onClick={onNavigate}
      >
        {content}
      </Link>
    );
  }

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
