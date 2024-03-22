import { DefaultTheme } from "styled-components";
import { mainThemeColors } from "../colors/main-theme.colors";
import { DEFAULT_FONTS } from "../fonts/default.fonts";

export const lightTheme: DefaultTheme = {
  backgroundScreen: mainThemeColors["light-white"],
  bodyTextColor: mainThemeColors["light-black"],
  colors: mainThemeColors,
  fonts: DEFAULT_FONTS,
};
