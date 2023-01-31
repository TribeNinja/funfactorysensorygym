import Footer from "components/Footer";
import GiftcardDetails from "components/GiftcardDetails";
import Header from "components/Header";
import Head from "next/head";
import React from "react";
import { sanityClient } from "sanity";

const giftcards = ({ giftcards }) => {
  return (
    <div>
      <Head>
        <title>Gift Cards | Fun Factory Sensory Gym</title>
      </Head>

      <Header StartFromTop={true} />

      <GiftcardDetails giftcards={giftcards} />

      <Footer />
    </div>
  );
};

export default giftcards;

export const getServerSideProps = async () => {
  const queryGiftcards = `*[_type == 'giftcard'] | order(_updatedAt desc) {
    _type,
    _id,
    slug,
    title,
    price,
    image
  }
  `;

  const giftcards = await sanityClient.fetch(queryGiftcards);

  return {
    props: {
      giftcards,
    },
  };
};
