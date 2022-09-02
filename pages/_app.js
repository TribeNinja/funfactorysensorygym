import "../styles/globals.css";
import "node_modules/slick-carousel/slick/slick.css";
import "node_modules/slick-carousel/slick/slick-theme.css";
import NextNprogress from "nextjs-progressbar";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function MyApp({ Component, pageProps }) {
  const reactAlertOptions = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: "30px",
    // you can also just use 'scale'
    transition: transitions.SCALE,
  };
  return (
    <>
      <AlertProvider template={AlertTemplate} {...reactAlertOptions}>
        <NextNprogress color="#FE346E" />

        <Component {...pageProps} />
      </AlertProvider>
    </>
  );
}

export default MyApp;
