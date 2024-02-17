import "styled-components";
import { Colors } from "./colors/colors.type";

type fontWeight = {
  600: string;
  500: string;
  400: string;
  300: string;
};

type fonts = {
  title: fontWeight;
  text: fontWeight;
};
declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    backgroundScreen: string;
  }
}
