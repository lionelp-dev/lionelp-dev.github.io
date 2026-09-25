import { cn } from "../../lib/utils";
import type { ComponentPropsWithoutRef } from "react";
import { GitHubIcon } from "../GitHubIcon";
import { MailIcon } from "../MailIcon";
import { Typography } from "../Typography";
import { siteConfig } from "../../config/site";
import {
  getNavigationKey,
  navigationItems,
  type NavigationItem,
} from "./navigation.config";
import { NavigationLink } from "./NavigationLink";

type MobileNavigationProps = {
  isOpen: boolean;
  isActive: (item: NavigationItem) => boolean;
  onClose: () => void;
};

export function MobileNavigation({
  isOpen,
  isActive,
  onClose,
}: MobileNavigationProps) {
  return (
    <div
      className={cn(
        "absolute top-full left-0 right-0 overflow-hidden bg-base-100/95 backdrop-blur transition-[max-height,opacity] duration-200 ease-out lg:hidden",
        isOpen
          ? "max-h-[calc(100svh-4rem)] overflow-y-auto border-b border-base-content/10 opacity-100"
          : "pointer-events-none max-h-0 opacity-0",
      )}
      id="mobile-navigation"
    >
      <div className="flex h-full flex-col gap-1 border-t border-base-content/10 py-3">
        {navigationItems.map((item) => (
          <NavigationLink
            key={getNavigationKey(item)}
            item={item}
            active={isActive(item)}
            variant="mobile"
            onNavigate={onClose}
          />
        ))}
        <MobileActionLink
          href={`mailto:${siteConfig.contactEmail}`}
          onClick={onClose}
        >
          <MailIcon className="size-5 flex-none" />
          <Typography as="span" variant="label">Email</Typography>
        </MobileActionLink>
        <MobileActionLink
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className="size-5 flex-none" />
          <Typography as="span" variant="label">GitHub</Typography>
        </MobileActionLink>
      </div>
    </div>
  );
}

type MobileActionLinkProps = ComponentPropsWithoutRef<"a">;

function MobileActionLink({
  className,
  ...props
}: MobileActionLinkProps) {
  return (
    <a
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-bold leading-tight text-base-content/75 no-underline transition-colors hover:bg-base-200 hover:text-base-content",
        className,
      )}
      {...props}
    />
  );
}
