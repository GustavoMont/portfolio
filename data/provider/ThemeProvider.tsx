import { ThemeContext } from "data/context/ThemeContext";
import { PropsWithChildren, useState } from "react";
import { Themes, ThemesTokens } from "src/models/theme.tokens";
import { lightTheme } from "src/styles/theme/light.theme";
import { mainTheme } from "src/styles/theme/main.theme";
import { ThemeProvider as StyledProvider } from "styled-components";
import useSound from "use-sound";
import darkThemeSound from "public/sounds/dark-theme-sound-theme.mp3";

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<ThemesTokens>("main");
  const themes: Themes = {
    light: lightTheme,
    main: mainTheme,
  };
  const [play] = useSound(darkThemeSound);

  const selectMainTheme = () => {
    play({});
  };

  const handleChangeTheme = (theme: ThemesTokens) => {
    const themeAction: Record<ThemesTokens, (() => void) | undefined> = {
      main: selectMainTheme,
      light: undefined,
    };
    const onSelectTheme = themeAction[theme];
    onSelectTheme?.();
    setActiveTheme(theme);
  };

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
