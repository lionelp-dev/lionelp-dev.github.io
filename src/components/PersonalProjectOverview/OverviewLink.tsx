import type { ReactNode } from "react";
import { Typography } from "../Typography";

type OverviewLinkProps = {
  href: string;
  label: string;
  primary?: boolean;
  children: ReactNode;
};

export function OverviewLink({
  href,
  label,
  primary = false,
  children,
}: OverviewLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`btn btn-xl rounded-full ${primary ? "btn-secondary" : "btn-soft"}`}
    >
      {children}
      <Typography as="span" variant="p4">
        {label}
      </Typography>
    </a>
  );
}
