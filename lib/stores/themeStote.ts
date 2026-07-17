import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  theme: "light" | "dark";
  themeToggle: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "light",
      themeToggle: () => {
        set((state) => {
          const newTheme = state.theme === "dark" ? "light" : "dark";
          return {
            theme: newTheme,
          };
        });
      },
    }),
    { name: "theme" },
  ),
);
