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

      <MessengerCustomerChat
        pageId={process.env.MESSENGER_PAGE_ID}
        appId={process.env.MESSENGER_APP_ID}
      />
    </>
  );
}

export default MyApp;
