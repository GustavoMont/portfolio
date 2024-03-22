import { DefaultTheme } from "styled-components";
import { mainThemeColors } from "../colors/main-theme.colors";
import { DEFAULT_FONTS } from "../fonts/default.fonts";

export const mainTheme: DefaultTheme = {
  backgroundScreen: mainThemeColors["dark-black"],
  bodyTextColor: mainThemeColors.white,
  colors: mainThemeColors,
  fonts: DEFAULT_FONTS,
};
