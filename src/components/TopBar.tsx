import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { LogoMark } from "./LogoMark";
import { DesktopNavigation } from "./navigation/DesktopNavigation";
import { MobileNavigation } from "./navigation/MobileNavigation";
import { TopBarActions } from "./navigation/TopBarActions";
import { useMobileMenu } from "./navigation/useMobileMenu";
import { useNavigationState } from "./navigation/useNavigationState";

export function TopBar() {
  const navigation = useNavigationState();
  const menu = useMobileMenu(navigation.pathname, navigation.hash);

  const topBarHeaderContainerRef = useRef<HTMLElement | null>(null);
  const navBarHeaderContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const resetTopBar = () => {
      const topBar = topBarHeaderContainerRef.current;

      if (!topBar) return;

      topBar.style.removeProperty("width");
      topBar.style.removeProperty("border-radius");
      topBar.style.removeProperty("top");
    };

    const handleScroll = () => {
      const borderRadius = Math.max(0, 0 + window.scrollY * 0.05);
      const windowWidth = window.innerWidth;
      const topBar = topBarHeaderContainerRef.current;

      topBar?.classList.toggle("is-scrolled", window.scrollY > 12);

      if (windowWidth <= 1280) {
        resetTopBar();
        return;
      }

      if (topBarHeaderContainerRef.current) {
        if (window.scrollY < 100) {
          topBarHeaderContainerRef.current.style.width = `${100}%`;
          topBarHeaderContainerRef.current.style.borderRadius = `0`;
          topBarHeaderContainerRef.current.style.top = `0px`;
        }
        if (window.scrollY > 100) {
          topBarHeaderContainerRef.current.style.top = `15px`;
          topBarHeaderContainerRef.current.style.borderRadius = `${borderRadius}rem`;
          topBarHeaderContainerRef.current.style.width = `${70}%`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header
      ref={topBarHeaderContainerRef}
      className="top-bar-glass sticky top-0 z-20 mx-auto duration-300 ease-in-out lg:h-[62px]"
    >
      <nav
        ref={navBarHeaderContainerRef}
        className="layout-container relative col-start-2 flex h-full w-full max-w-[1680px] items-center justify-between gap-x-3 gap-y-3 px-5 py-3 md:min-h-16 md:py-0 lg:min-h-[62px]"
        aria-label="Navigation principale"
      >
        <Link
          className="inline-flex shrink-0 items-center gap-3 text-base-content no-underline"
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
        <TopBarActions isMenuOpen={menu.isOpen} onToggleMenu={menu.toggle} />
        <MobileNavigation
          isOpen={menu.isOpen}
          isActive={navigation.isActive}
          onClose={menu.close}
        />
      </nav>
    </header>
  );
}
