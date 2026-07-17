"use client";

import { useThemeStore } from "@/lib/stores/themeStote";
import Icon from "../Icon/Icon";

export default function HeaderThemeSwitcher() {
  const { theme, themeToggle } = useThemeStore();

  return (
    <button
      type="button"
      className="hidden md:block"
      aria-label="Toggle theme"
      onClick={themeToggle}
    >
      {theme === "light" ? (
        <Icon name="theme-switcher-header" width={62} height={28} />
      ) : (
        <Icon name="theme-switcher-header-dark" width={62} height={28} />
      )}
    </button>
  );
}
