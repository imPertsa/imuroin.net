import { useTheme } from "../hooks/useTheme";

const ICONS = { dark: "\u2600", light: "\u263E" } as const;

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {ICONS[theme]}
    </button>
  );
}
