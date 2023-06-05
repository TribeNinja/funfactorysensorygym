import React from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const Thankyou = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Thank you | Fun Factory Sensory Gym</title>
      </Head>

      <Header StartFromTop={true} />
      <div className="mt-44 md:mt-56 max-w-7xl mx-auto">
        <div className="relative h-72 w-full">
          <Image
            objectFit="contain"
            layout="fill"
            src="/thankyou.svg"
            alt="Thank you image"
          />
        </div>
        <div className="text-center mt-10 mx-6 max-w-3xl md:mx-auto">
          <h1 className="text-3xl font-bold leading-snug uppercase max-w-2xl mx-auto">
            Thank you for contacting us!
          </h1>

          <div className="mt-4 text-gray-500">
            <p className="leading-relaxed">
              Your message has been received and we will be in touch as soon as
              possible.
            </p>
          </div>
        </div>
        <div className="text-white font-semibold flex mt-8 md:mt-12">
          <p
            onClick={() => router.push("/")}
            className="py-3 px-6 lg:px-8 bg-ffsgPink cursor-pointer rounded-xl mx-auto hover:bg-ffsgLightPink hover:text-ffsgPink transition-all duration-200 hover:ring-2 hover:ring-ffsgPink"
          >
            Back to Home
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Thankyou;
