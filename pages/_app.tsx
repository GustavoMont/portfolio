import Aos from "aos";
import { AppProps } from "next/app";

import { useEffect } from "react";
import "src/styles/_app.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({});
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
