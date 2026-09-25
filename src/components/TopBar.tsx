import { Link } from "@tanstack/react-router";
import { LogoMark } from "./LogoMark";
import { DesktopNavigation } from "./navigation/DesktopNavigation";
import { MobileNavigation } from "./navigation/MobileNavigation";
import { TopBarActions } from "./navigation/TopBarActions";
import { useMobileMenu } from "./navigation/useMobileMenu";
import { useNavigationState } from "./navigation/useNavigationState";

export function TopBar() {
  const navigation = useNavigationState();
  const menu = useMobileMenu(navigation.pathname, navigation.hash);

  return (
    <header className="sticky top-0 z-20 border-b border-base-content/10 bg-base-100/95 backdrop-blur">
      <nav
        className="relative mx-auto grid w-[90vw] max-w-[1600px] grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 gap-y-3 py-3 sm:px-5 md:min-h-18 md:py-0"
        aria-label="Navigation principale"
      >
        <Link
          className="inline-flex min-w-0 items-center gap-3 text-base-content no-underline"
          to="/portfolio"
          aria-label="Retour au portfolio"
          onClick={menu.close}
        >
          <LogoMark />
        </Link>
        <DesktopNavigation
          isActive={navigation.isActive}
          onNavigate={menu.close}
        />
        <TopBarActions
          isMenuOpen={menu.isOpen}
          onToggleMenu={menu.toggle}
        />
        <MobileNavigation
          isOpen={menu.isOpen}
          isActive={navigation.isActive}
          onClose={menu.close}
        />
      </nav>
    </header>
  );
}
