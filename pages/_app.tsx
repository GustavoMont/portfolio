import Aos from "aos";
import SectionProvider from "data/provider/SectionProvider";
import { AppProps } from "next/app";

import { useEffect } from "react";
import "src/styles/_app.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <SectionProvider>
      <Component {...pageProps} />
    </SectionProvider>
  );
}

export default MyApp;
