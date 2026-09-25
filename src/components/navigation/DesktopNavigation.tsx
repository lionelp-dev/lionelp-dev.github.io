import { NavigationLink } from "./NavigationLink";
import {
  getNavigationKey,
  type NavigationItem,
  navigationItems,
} from "./navigation.config";

type DesktopNavigationProps = {
  isActive: (item: NavigationItem) => boolean;
  onNavigate: () => void;
};

export function DesktopNavigation({
  isActive,
  onNavigate,
}: DesktopNavigationProps) {
  return (
    <div className="hidden h-full min-w-0 flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:flex">
      {navigationItems.map((item) => (
        <NavigationLink
          key={getNavigationKey(item)}
          item={item}
          active={isActive(item)}
          variant="desktop"
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}
