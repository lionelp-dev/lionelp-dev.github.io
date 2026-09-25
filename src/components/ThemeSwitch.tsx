import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeName = "winter" | "business";

type ThemeSwitchProps = {
  className?: string;
};

const lightTheme: ThemeName = "winter";
const darkTheme: ThemeName = "business";

export function ThemeSwitch({ className = "" }: ThemeSwitchProps) {
  const [theme, setThemeState] = useState<ThemeName>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDarkTheme = theme === darkTheme;
  const nextTheme = isDarkTheme ? lightTheme : darkTheme;

  return (
    <label
      className={`relative inline-grid cursor-pointer grid-cols-2 items-center rounded-full border border-base-content/25 bg-base-200 p-[3px] text-base-content shadow-sm transition-colors ${className}`}
    >
      <input
        className="peer sr-only"
        type="checkbox"
        aria-label={`Basculer vers le thème ${nextTheme}`}
        checked={isDarkTheme}
        onChange={() => setThemeState(nextTheme)}
      />
      <span className="absolute inset-[3px] z-0 w-[calc(50%_-_3px)] rounded-full bg-base-content transition-transform duration-200 ease-out peer-checked:translate-x-full peer-focus-visible:outline-2 peer-focus-visible:outline-base-content peer-focus-visible:outline-offset-4" />
      <Sun
        className="pointer-events-none relative z-10 mx-auto size-5.5 stroke-[2] text-base-100 transition-colors peer-checked:text-base-content/60"
        aria-hidden="true"
      />
      <Moon
        className="pointer-events-none relative z-10 mx-auto size-5.5 stroke-[2] text-base-content/60 transition-colors peer-checked:text-base-100"
        aria-hidden="true"
      />
    </label>
  );
}

function getInitialTheme(): ThemeName {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === lightTheme || storedTheme === darkTheme) {
    return storedTheme;
  }

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme === "dark" ? darkTheme : lightTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? darkTheme
    : lightTheme;
}
