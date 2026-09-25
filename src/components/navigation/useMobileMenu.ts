import { useEffect, useState } from "react";

export function useMobileMenu(pathname: string, hash: string) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return {
    isOpen,
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((current) => !current),
  };
}
