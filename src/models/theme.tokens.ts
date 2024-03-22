import { DefaultTheme } from "styled-components";

export type ThemesTokens = "main" | "light";

export type Themes = {
  [key in ThemesTokens]: DefaultTheme;
};
