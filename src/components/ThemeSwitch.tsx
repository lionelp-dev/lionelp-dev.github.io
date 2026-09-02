import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeName = "winter" | "business";

const lightTheme: ThemeName = "winter";
const darkTheme: ThemeName = "business";

export function ThemeSwitch() {
  const [theme, setThemeState] = useState<ThemeName>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDarkTheme = theme === darkTheme;
  const nextTheme = isDarkTheme ? lightTheme : darkTheme;

  return (
    <label className="fixed right-4 top-3.5 z-10 inline-grid h-10 w-[104px] cursor-pointer grid-cols-2 items-center rounded-full border border-base-content/25 bg-base-200 p-[3px] text-base-content shadow-sm transition-colors md:right-[clamp(20px,4.5vw,64px)] md:top-5 md:h-11 md:w-[118px]">
      <input
        className="peer sr-only"
        type="checkbox"
        aria-label={`Basculer vers le thème ${nextTheme}`}
        checked={isDarkTheme}
        onChange={() => setThemeState(nextTheme)}
      />
      <span className="absolute inset-[3px] z-0 w-[calc(50%_-_3px)] rounded-full bg-base-content transition-transform duration-200 ease-out peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-base-content peer-checked:translate-x-full" />
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
