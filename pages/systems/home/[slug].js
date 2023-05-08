import Footer from "components/Footer";
import Header from "components/Header";
import SystemGallery from "components/gallery/SystemGallery";
import SystemsPage from "components/SystemsPage";
import Head from "next/head";
import { sanityClient } from "../../../sanity";

const Home = ({ home, homesGallery }) => {
  return (
    <div>
      <Head>
        <title>{home.title} | Home Sensory Gym</title>
        <meta name="description" content={home.excerpt} />
      </Head>
      <Header StartFromTop={true} />
      <SystemsPage system={home} />
      <SystemGallery systems={homesGallery} />
      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps = async ({ params }) => {
  const queryHomeGallery = `*[_type == 'home' && !(slug.current == $slug)] | order(_updatedAt desc) [0..2] {
    _type,
    _id,
    title,
    gallery,
    slug,
    categories[]->
  }
  `;

  const queryHome = `*[_type == 'home' && slug.current == $slug][0] {
    _type,
    _id,
    _createdAt,
    title,
    excerpt,
    body,
    gallery,
    gymInformation,
    slug,
    categories[]->
  }
  `;
  const home = await sanityClient.fetch(queryHome, {
    slug: params?.slug,
  });

  if (!home) {
    return {
      notFound: true,
    };
  }

  const homesGallery = await sanityClient.fetch(queryHomeGallery, {
    slug: params?.slug,
  });

  return {
    props: {
      home,
      homesGallery,
    },
  };
};
