import Footer from "components/Footer";
import Header from "components/Header";
import SystemGallery from "components/SystemGallery";
import SystemsPage from "components/SystemsPage";
import Head from "next/head";
import { sanityClient } from "../../../sanity";

const Commercial = ({ commercial, commercialsGallery }) => {
  return (
    <div>
      <Head>
        <title>{commercial.title} | Commercial Sensory Gym</title>
        <meta name="description" content={commercial.excerpt} />
      </Head>
      <Header StartFromTop={true} />
      <SystemsPage system={commercial} />
      <SystemGallery systems={commercialsGallery} />
      <Footer />
    </div>
  );
};

export default Commercial;

export const getServerSideProps = async ({ params }) => {
  const queryCommercialGallery = `*[_type == 'commercial' && !(slug.current == $slug)] | order(_updatedAt desc) [0..2] {
    _type,
    _id,
    title,
    gallery,
    slug,
    tags[]->
  }
  `;

  const queryCommercial = `*[_type == 'commercial' && slug.current == $slug][0] {
    _type,
    _id,
    _createdAt,
    title,
    excerpt,
    body,
    gallery,
    gymInformation,
    slug,
    tags[]->
  }
  `;
  const commercial = await sanityClient.fetch(queryCommercial, {
    slug: params?.slug,
  });

  if (!commercial) {
    return {
      notFound: true,
    };
  }

  const commercialsGallery = await sanityClient.fetch(queryCommercialGallery, {
    slug: params?.slug,
  });

  return {
    props: {
      commercial,
      commercialsGallery,
    },
  };
};
