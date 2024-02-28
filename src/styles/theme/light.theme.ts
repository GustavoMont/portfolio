import { DefaultTheme } from "styled-components";
import { lightThemeColors } from "../colors/light-theme.colors";
import { DEFAULT_FONTS } from "../fonts/default.fonts";

export const lightTheme: DefaultTheme = {
  backgroundScreen: lightThemeColors["dark-black"],
  colors: lightThemeColors,
  fonts: DEFAULT_FONTS,
};
