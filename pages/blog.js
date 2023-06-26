import Footer from "components/Footer";
import Header from "components/Header";
import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";
import { sanityClient, urlFor } from "sanity";
import Slider from "react-slick";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Therapist from "components/blog/therapist";

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

  function removeImagesFromArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]._type === "image") {
        arr.splice(i, 1);
        i--; // decrement i to account for the removed element
      }
    }
    return arr;
  }

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
          <Therapist />
          <div className="py-5 md:py-6 border-b border-gray-200" />
          {/* <div className="text-center mt-14 mb-8 mx-auto">
            <h1 className="text-3xl font-bold uppercase text-[#295431]">
              Blog
            </h1>
          </div> */}
          <div className="mt-10 md:mt-4">
            {blogs.map((blog, i) => (
              <div key={blog._id}>
                <div className="flex items-center md:space-x-14">
                  {i % 2 != 0 && (
                    <div className="flex-1 hidden md:block mx-auto">
                      <Link href={`/blog/${blog.slug.current}`}>
                        <a>
                          <Slider {...settings}>
                            {blog.gallery.map((image) => (
                              <div
                                className="w-full h-80 relative my-6"
                                key={i}
                              >
                                <div className="h-full w-full flex justify-center items-center">
                                  <svg
                                    aria-hidden="true"
                                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-200 fill-ffsgPink"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                      fill="currentFill"
                                    />
                                  </svg>
                                </div>
                                <Image
                                  layout="fill"
                                  objectFit="contain"
                                  key={blog._id}
                                  className="hover:scale-125 transition-all duration-200"
                                  src={urlFor(image).width(720).url()}
                                  alt={image.alt ? image.alt : "Sensory gym"}
                                />
                              </div>
                            ))}
                          </Slider>
                        </a>
                      </Link>
                    </div>
                  )}
                  <div className="w-full md:w-3/5">
                    <h1 className="text-2xl md:text-3xl font-semibold md:leading-normal">
                      {blog.title}
                    </h1>
                    <div className="line-clamp-4 text-gray-500 mt-4 md:mt-6">
                      <BlockContent
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        blocks={removeImagesFromArray(blog.body)}
                        className="md:text-lg leading-relaxed"
                      />
                    </div>
                    <div className="md:hidden ">
                      <Link href={`/blog/${blog.slug.current}`}>
                        <a>
                          <Slider {...settings}>
                            {blog.gallery.map((image, i) => (
                              <div
                                className="w-full h-80 relative my-6"
                                key={i}
                              >
                                <div className="h-full w-full flex justify-center items-center">
                                  <svg
                                    aria-hidden="true"
                                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-200 fill-ffsgPink"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                      fill="currentFill"
                                    />
                                  </svg>
                                </div>
                                <Image
                                  layout="fill"
                                  objectFit="contain"
                                  key={blog._id}
                                  className="hover:scale-125 transition-all duration-200"
                                  src={urlFor(image).width(600).url()}
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
                  {i % 2 == 0 && (
                    <div className="flex-1 hidden md:block mx-auto">
                      <Link href={`/blog/${blog.slug.current}`}>
                        <a>
                          <Slider {...settings}>
                            {blog.gallery.map((image) => (
                              <div
                                className="w-full h-80 relative my-6"
                                key={i}
                              >
                                <div className="h-full w-full flex justify-center items-center">
                                  <svg
                                    aria-hidden="true"
                                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-200 fill-ffsgPink"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                      fill="currentFill"
                                    />
                                  </svg>
                                </div>
                                <Image
                                  layout="fill"
                                  objectFit="contain"
                                  key={blog._id}
                                  className="hover:scale-125 transition-all duration-200"
                                  src={urlFor(image).width(720).url()}
                                  alt={image.alt ? image.alt : "Sensory gym"}
                                />
                              </div>
                            ))}
                          </Slider>
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
                <hr className="my-10 md:my-12" />
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
