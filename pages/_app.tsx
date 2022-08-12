import Aos from "aos";
import { useEffect } from "react";
import "src/styles/_app.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({});
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
