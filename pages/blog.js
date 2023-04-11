import Footer from "components/Footer";
import Header from "components/Header";
import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";
import { sanityClient, urlFor } from "sanity";
import Slider from "react-slick";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

function blog({ blogs }) {
  const settings = {
    dots: false,
    pauseOnHover: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Head>
        <title>
          Custom Sensory Gym | Sensory Gym Blog | Professional Insight
        </title>
        <meta
          name="description"
          content="Our sensory gym blog offers insightful information from industry professionals in all of our sensory blog articles. Visit today for the best information on sensory gyms and sensory play!"
        ></meta>
      </Head>
      <Header StartFromTop={true} />
      <div className="mt-48 max-w-5xl mx-auto">
        <div className="mx-6 md:mx-14">
          <div className="text-center my-16 mx-auto">
            <h1 className="text-3xl font-bold uppercase">Blog</h1>
          </div>
          <div>
            {blogs.map((blog, i) => (
              <div>
                <div className="flex items-center md:space-x-14" key={blog._id}>
                  <div className="w-full md:w-3/5">
                    <h1 className="text-xl md:text-3xl font-semibold md:leading-normal">
                      {blog.title}
                    </h1>
                    <div className="line-clamp-4 text-gray-500 mt-4 md:mt-6">
                      <BlockContent
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        blocks={blog.body}
                        className="md:text-lg leading-relaxed"
                      />
                    </div>
                    <div className="md:hidden ">
                      <Link href={`/blog/${blog.slug.current}`}>
                        <a>
                          <Slider {...settings}>
                            {blog.gallery.map((image) => (
                              <div className="w-full h-80 relative my-6">
                                <Image
                                  layout="fill"
                                  objectFit="contain"
                                  key={blog._id}
                                  className="hover:scale-125 transition-all duration-200"
                                  src={urlFor(image).url()}
                                  alt={image.alt ? image.alt : "Sensory gym"}
                                />
                              </div>
                            ))}
                          </Slider>
                        </a>
                      </Link>
                    </div>
                    <Link href={`/blog/${blog.slug.current}`}>
                      <div className="flex items-center space-x-2 md:mt-8 hover:underline cursor-pointer font-semibold text-ffsgPink">
                        <p>Learn more</p> <BsArrowRight />
                      </div>
                    </Link>
                  </div>
                  <div className="col-span-4 hidden md:block mx-auto">
                    <Link href={`/blog/${blog.slug.current}`}>
                      <a>
                        <Slider {...settings}>
                          {blog.gallery.map((image) => (
                            <Image
                              height="400"
                              width="400"
                              objectFit="contain"
                              key={blog._id}
                              className="hover:scale-125 transition-all duration-200"
                              src={urlFor(image).url()}
                              alt={image.alt ? image.alt : "Sensory gym"}
                            />
                          ))}
                        </Slider>
                      </a>
                    </Link>
                  </div>
                </div>
                <hr className="my-10 md:my-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default blog;

export const getServerSideProps = async () => {
  const queryBlogs = `*[_type == 'blog'] | order(_updatedAt desc) {
    _id,
    title,
    gallery,
    slug,
    body,
  }
  `;

  const blogs = await sanityClient.fetch(queryBlogs);

  return {
    props: {
      blogs,
    },
  };
};
