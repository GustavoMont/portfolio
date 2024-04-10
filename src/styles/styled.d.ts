import "styled-components";
import { Colors } from "./colors/colors.type";
import { Fonts } from "./fonts/fonts.type";

type fontWeight = {
  600: string;
  500: string;
  400: string;
  300: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    backgroundScreen: string;
    bodyTextColor: string;
    fonts: Fonts;
  }
}
