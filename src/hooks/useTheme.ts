import { useState, useEffect } from "react";

export type Theme = "dark" | "light";

const THEME_KEY = "theme";
const DEFAULT_THEME: Theme = "light";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  const stored = localStorage.getItem(THEME_KEY);
  return stored === "light" || stored === "dark" ? stored : DEFAULT_THEME;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "light" : "dark"));

  return { theme, toggleTheme };
}
