import { useEffect, useState } from "react";

export const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const mqListener = (e: MediaQueryListEvent) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const getCurrentTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkTheme(getCurrentTheme());
    return () => {
      setIsDarkTheme(true);
    };
  }, []);

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);

  return isDarkTheme;
};
