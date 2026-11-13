import { Menu, X } from "lucide-react";
import { ThemeSwitch } from "../ThemeSwitch";

type TopBarActionsProps = {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
};

export function TopBarActions({
  isMenuOpen,
  onToggleMenu,
}: TopBarActionsProps) {
  return (
    <div className="flex shrink-0 items-center justify-end gap-2.75">
      <ThemeSwitch className="ml-6 h-9 w-18 sm:h-10 sm:w-[94px]" />
      <button
        className="btn btn-ghost btn-square h-9 min-h-9 w-9 rounded-full border border-base-content/20 text-base-content transition-colors hover:border-base-content/35 hover:bg-base-200 lg:hidden"
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={isMenuOpen}
        aria-label={
          isMenuOpen
            ? "Fermer le menu de navigation"
            : "Ouvrir le menu de navigation"
        }
        title={isMenuOpen ? "Fermer" : "Menu"}
        onClick={onToggleMenu}
      >
        {isMenuOpen ? (
          <X className="size-5 stroke-[2]" aria-hidden="true" />
        ) : (
          <Menu className="size-5 stroke-[2]" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
