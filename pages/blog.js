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
      <div className="mt-48 max-w-7xl mx-auto">
        <div className="mx-6 md:mx-14">
          <div className="text-center my-16 mx-auto">
            <h1 className="text-3xl font-bold uppercase">Blog</h1>
          </div>
          <div className="space-y-16">
            {blogs.map((blog, i) => (
              <div
                className="grid grid-cols-1 md:grid-cols-7 gap-20 items-center"
                key={blog._id}
              >
                <div
                  className={`${
                    i % 2 == 0 ? "block" : "hidden"
                  } col-span-3 space-y-7`}
                >
                  <h1 className="text-xl md:text-3xl font-semibold ">
                    {blog.title}
                  </h1>
                  <div className="line-clamp-4 text-gray-500">
                    <BlockContent
                      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                      blocks={blog.body}
                    />
                  </div>
                  <div className="md:hidden">
                    <Link href={`/blog/${blog.slug.current}`}>
                      <a>
                        <Slider {...settings}>
                          {blog.gallery.map((image) => (
                            <Image
                              height="270"
                              width="400"
                              objectFit="cover"
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
                  <Link href={`/blog/${blog.slug.current}`}>
                    <div className="flex items-center space-x-2 hover:underline cursor-pointer font-semibold text-ffsgPink">
                      <p>Learn more</p> <BsArrowRight />
                    </div>
                  </Link>
                </div>
                <div className="col-span-4 hidden md:block">
                  <Link href={`/blog/${blog.slug.current}`}>
                    <a>
                      <Slider {...settings}>
                        {blog.gallery.map((image) => (
                          <img
                            key={blog._id}
                            className="h-80 w-full object-cover hover:scale-125 transition-all duration-200"
                            src={urlFor(image).url()}
                            alt={image.alt ? image.alt : "Sensory gym"}
                          />
                        ))}
                      </Slider>
                    </a>
                  </Link>
                </div>
                <div
                  className={`${
                    i % 2 == 0 ? "hidden" : "block"
                  } col-span-3 space-y-7`}
                >
                  <h1 className="text-xl md:text-3xl font-semibold ">
                    {blog.title}
                  </h1>
                  <div className="line-clamp-4 text-gray-500">
                    <BlockContent
                      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                      blocks={blog.body}
                    />
                  </div>
                  <div className="md:hidden">
                    <Link href={`/blog/${blog.slug.current}`}>
                      <a>
                        <Slider {...settings}>
                          {blog.gallery.map((image) => (
                            <img
                              key={blog._id}
                              className="h-60 w-full object-cover hover:scale-125 transition-all duration-200"
                              src={urlFor(image).url()}
                              alt={image.alt ? image.alt : "Sensory gym"}
                            />
                          ))}
                        </Slider>
                      </a>
                    </Link>
                  </div>
                  <Link href={`/blog/${blog.slug.current}`}>
                    <div className="flex items-center space-x-2 hover:underline cursor-pointer font-semibold text-ffsgPink">
                      <p>Learn more</p> <BsArrowRight />
                    </div>
                  </Link>
                </div>
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
  const queryBlogs = `*[_type == 'blog'] | order(publishedAt desc) {
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
