import Aos from "aos";
import SectionProvider from "data/provider/SectionProvider";
import { AppProps } from "next/app";

import { useEffect } from "react";
import "src/styles/_app.css";
import { lightTheme } from "src/styles/theme/light.theme";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <ThemeProvider theme={lightTheme}>
      <SectionProvider>
        <Component {...pageProps} />
      </SectionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
