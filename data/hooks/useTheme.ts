import { ThemeContext } from "data/context/ThemeContext";
import { useContext } from "react";

export const useTheme = () => useContext(ThemeContext);
