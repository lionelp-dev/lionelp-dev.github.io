import {
  getNavigationKey,
  navigationItems,
  type NavigationItem,
} from "./navigation.config";
import { NavigationLink } from "./NavigationLink";

type DesktopNavigationProps = {
  isActive: (item: NavigationItem) => boolean;
  onNavigate: () => void;
};

export function DesktopNavigation({
  isActive,
  onNavigate,
}: DesktopNavigationProps) {
  return (
    <div className="hidden h-full min-w-0 items-center justify-center gap-8 lg:absolute lg:left-1/2 lg:top-1/2 lg:flex lg:-translate-x-1/2 lg:-translate-y-1/2">
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
