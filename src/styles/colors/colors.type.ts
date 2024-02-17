type PrimaryColors = "light-primary" | "primary" | "dark-primary";
type SecondaryColors = "light-secondary" | "secondary" | "dark-secondary";
type BlackColors = "light-black" | "black" | "dark-black";
type WhiteColors = "light-white" | "white" | "dark-white";

export type ColorKey =
  | PrimaryColors
  | SecondaryColors
  | BlackColors
  | WhiteColors;

export type Colors = {
  [key in ColorKey]: string;
};
