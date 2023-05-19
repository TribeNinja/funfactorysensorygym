import Header from "components/Header";
import Footer from "components/Footer";
import Head from "next/head";
import { sanityClient } from "../sanity";
import SectionOne from "components/gallery/SectionOne";
import SectionTwo from "components/gallery/SectionTwo";
import SectionThree from "components/gallery/SectionThree";
import ClinicLocations from "components/gallery/ClinicLocations";

const Gallery = ({
  pageInfo,
  equipment,
  therapies,
  categories,
  commercials,
  homes,
}) => {
  return (
    <div>
      <Head>
        <title>
          Custom Sensory Gym | Commercial Sensory Gyms | Home Sensory Gym
        </title>

        <meta
          name="description"
          content="Fun Factory Sensory Gym provides custom designed commercial sensory gyms that we design and install. Our gyms are built to challenge and stimulate a child in a safe indoor environment. The versatile large space designs allow for many therapists and children to use at the same time."
        ></meta>
      </Head>

      <Header StartFromTop={true} />

      <div className="mt-44 lg:mt-48 max-w-7xl mx-auto">
        <SectionOne pageInfo={pageInfo.sectionOne} />
        <SectionTwo
          pageInfo={pageInfo.sectionTwo}
          tags={therapies}
          categories={categories}
          commercials={commercials}
          homes={homes}
        />
        <SectionThree equipment={equipment} />
        <ClinicLocations commercials={commercials} tags={therapies} />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;

export const getServerSideProps = async () => {
  const queryPageInfo = `*[_type == 'galleryPage'][0] {
    _id,
    sectionOne,
    sectionTwo,
    sectionThree
  }`;

  const queryEquipment = `*[_type == 'sensoryEquipment'] | order(_updatedAt desc) {
    _id,
    title,
    description,
    gallery
  }
  `;

  const queryTags = `*[_type == 'tag'] {
    _id,
    title,
  }
  `;
  const queryCategories = `*[_type == 'categories'] {
    _id,
    title,
  }
  `;
  const queryCommercial = `*[_type == 'commercial'] | order(_updatedAt desc) {
    _type,
    _id,
    title,
    gallery,
    slug,
    gymInformation,
    tags[]->
  }
  `;
  const queryHome = `*[_type == 'home'] | order(_updatedAt desc)  {
    _type,
    _id,
    title,
    gallery,
    slug,
    gymInformation,
    categories[]->
  }
  `;

  const pageInfo = await sanityClient.fetch(queryPageInfo);
  const therapies = await sanityClient.fetch(queryTags);
  const equipment = await sanityClient.fetch(queryEquipment);
  const categories = await sanityClient.fetch(queryCategories);
  const commercials = await sanityClient.fetch(queryCommercial);
  const homes = await sanityClient.fetch(queryHome);

  return {
    props: {
      pageInfo,
      equipment,
      therapies,
      categories,
      commercials,
      homes,
    },
  };
};
