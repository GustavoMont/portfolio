import { createContext } from "react";
import { ThemesTokens } from "src/models/theme.tokens";

export type ThemeContext = {
  activeTheme: ThemesTokens;
  setActiveTheme(theme: ThemesTokens): void;
};

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);
