import "../styles/globals.css";
import "node_modules/slick-carousel/slick/slick.css";
import "node_modules/slick-carousel/slick/slick-theme.css";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress color="#FE346E" />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
