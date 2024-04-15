import Aos from "aos";
import SectionProvider from "data/provider/SectionProvider";
import { ThemeProvider } from "data/provider/ThemeProvider";
import { AppProps } from "next/app";

import { useEffect } from "react";
import Menu from "src/components/common/Menu";
import GlobalStyle from "src/styles/GlobalStyle";
import "src/styles/_app.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <ThemeProvider>
      <SectionProvider>
        <GlobalStyle />
        <Menu />
        <Component {...pageProps} />
      </SectionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
