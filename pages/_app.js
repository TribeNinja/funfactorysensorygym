import "../styles/globals.css";
import "node_modules/slick-carousel/slick/slick.css";
import "node_modules/slick-carousel/slick/slick-theme.css";
import NextNprogress from "nextjs-progressbar";
import MessengerCustomerChat from "react-messenger-customer-chat";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress color="#FE346E" />

      <Component {...pageProps} />

      <MessengerCustomerChat pageId="111131050739842" appId="735141727539744" />
    </>
  );
}

export default MyApp;
