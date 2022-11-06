import Gallery from "components/Gallery";
import Hero from "components/Hero";
import TestimonialSection from "components/TestimonialSection";
import ProcessSection from "components/ProcessSection";
import Head from "next/head";
import AboutSection from "components/AboutSection";
import Cta from "components/Cta";
import Footer from "components/Footer";
import Header from "components/Header";
import { sanityClient } from "sanity";
import TestimonialNbc from "components/TestimonialNbc";

const Index = ({ commercials, homes }) => {
  return (
    <div className="leading-relaxed">
      <Head>
        <title>
          Custom Sensory Gym | Commercial Sensory Gyms | Home Sensory Gym
        </title>
        <meta
          name="description"
          content="Fun Factory offers custom commercial sensory gyms to help children develop their motor skills. Our team custom designs and installs sensory gyms in the US."
        ></meta>
      </Head>
      <Header />
      <div className="max-w-7xl mx-auto">
        <Hero />
        <TestimonialNbc />
        <TestimonialSection />
      </div>
      <Gallery
        systems={commercials}
        type="commercial"
        short="Commercial Systems"
        title="We Accommodate Large Spaces"
        description="Our large open play/multi-functional facilities are designed from the center out. This allows us to capture the center of the room and design out to all four corners making the entire room flow together making it functionally useful to everyone! Our large sensory gyms are versatile and can accommodate all types of therapists, practitioners, and children alike."
      />
      <Gallery
        systems={homes}
        type="home"
        short="Home Systems"
        title="We Accommodate Small Spaces"
        description="Homes, basements, attics, garages, and bedrooms - Yes, we do them all! We understand that space can be limited, that’s why our designers take into consideration every square inch of space in your home. Our in-home systems are designed to provide your family with plenty of floor space not only to play but to also move about with ease when the system isn’t being used."
      />
      <div className="max-w-7xl mx-auto">
        <ProcessSection />
        <AboutSection />
        <Cta />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const queryCommercial = `*[_type == 'commercial'] | order(_createdAt desc)[0..3] {
    _id,
    title,
    gallery,
    slug,
    tags[]->
  }
  `;
  const queryHome = `*[_type == 'home'] | order(_createdAt desc)[0..3] {
    _id,
    title,
    gallery,
    slug,
    categories[]->
  }
  `;

  const commercials = await sanityClient.fetch(queryCommercial);
  const homes = await sanityClient.fetch(queryHome);

  return {
    props: {
      commercials,
      homes,
    },
  };
};
