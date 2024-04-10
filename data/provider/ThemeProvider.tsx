import { ThemeContext } from "data/context/ThemeContext";
import { useThemeDetector } from "data/hooks/useThemeDetector";
import { PropsWithChildren, useEffect, useState } from "react";
import { Themes, ThemesTokens } from "src/models/theme.tokens";
import { lightTheme } from "src/styles/theme/light.theme";
import { mainTheme } from "src/styles/theme/main.theme";
import { ThemeProvider as StyledProvider } from "styled-components";

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const isDarkTheme = useThemeDetector();
  const [activeTheme, setActiveTheme] = useState<ThemesTokens>("main");
  const themes: Themes = {
    light: lightTheme,
    main: mainTheme,
  };

  const handleChangeTheme = (theme: ThemesTokens) => {
    setActiveTheme(theme);
  };

  useEffect(() => {
    setActiveTheme(isDarkTheme ? "main" : "light");

    return () => {
      setActiveTheme("main");
    };
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        setActiveTheme: handleChangeTheme,
      }}
    >
      <StyledProvider theme={themes[activeTheme]}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};
