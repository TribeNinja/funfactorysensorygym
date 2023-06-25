import { FiArrowUpRight } from "react-icons/fi";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import Slider from "react-slick";
import Link from "next/link";
import { urlFor } from "sanity";
import {
  isDesktop,
  isMobile,
  isMobileOnly,
  isTablet,
} from "react-device-detect";
import Image from "next/image";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <HiOutlineArrowNarrowLeft
      onClick={onClick}
      className="ml-auto absolute bottom-0 right-10 cursor-pointer text-ffsgPink hover:text-white transition-colors duration-200"
      size="2em"
    />
  );
}
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <HiOutlineArrowNarrowRight
      onClick={onClick}
      className="ml-auto cursor-pointer text-ffsgPink hover:text-white transition-colors duration-200"
      size="2em"
    />
  );
}
const Gallery = ({ systems, type, short, title, description }) => {
  const gallerySettings = {
    dots: false,
    arrows: false,
    pauseOnHover: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: (isMobileOnly && 1) || (isTablet && 2) || (isDesktop && 2.5),
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="mt-24 md:mt-36">
      <div className="flex flex-col md:flex-row md:items-center px-6 md:px-14  max-w-7xl mx-auto">
        <div className="space-y-2 md:space-y-3">
          <p className="uppercase text-gray-500 font-medium text-lg">
            Projects
          </p>
          <p className="font-semibold text-3xl md:text-4xl">{short}</p>
        </div>
        <div className="hidden md:block ml-auto">
          <Link href={`/gallery?sys=${type}#recent`}>
            <a className="text-white px-6 py-3 bg-ffsgPink rounded-xl flex space-x-1 cursor-pointer hover:bg-ffsgLightPink hover:text-ffsgPink transition-all duration-200 hover:ring-2 hover:ring-ffsgPink font-semibold">
              <p>Show All Projects</p>
              <FiArrowUpRight size="1.3em" />
            </a>
          </Link>
        </div>
      </div>

      <div className="-mt-28 md:-mt-16 px-6 md:px-14 translate-y-[149px] md:translate-y-36 max-w-7xl mx-auto">
        <Slider {...settings}>
          {systems.map((system) => (
            <Link
              key={system.title}
              href={`/systems/${type}/${system.slug.current}`}
            >
              <a>
                <div className="group md:pr-6 pb-6 cursor-pointer">
                  <div className="h-52 lg:h-64 bg-ffsgLightPink rounded-lg">
                    <div>
                      <Slider {...gallerySettings}>
                        {system.gallery.map((image) => (
                          <Image
                            key={system.title}
                            height={isMobileOnly ? "245" : "290"}
                            width={isMobileOnly ? "400" : "500"}
                            objectFit="cover"
                            src={urlFor(image).url()}
                            alt={image.alt ? image.alt : "Sensory gym"}
                            className=" rounded-t-lg"
                          />
                        ))}
                      </Slider>
                    </div>
                  </div>
                  <div className="p-3 lg:p-4 flex justify-between items-center bg-white  rounded-b-lg">
                    <div className="lg:space-y-1">
                      <div className="flex items-center space-x-2 text-xs md:text-sm text-ffsgPink ">
                        {type == "commercial"
                          ? system.tags.map((tag, i) => {
                              if (i < (isMobile ? 1 : 2)) {
                                return (
                                  <p
                                    key={tag._id}
                                    className="hover:text-ffsgPurple cursor-pointer transition-colors duration-150"
                                  >
                                    {tag.title}
                                    {system.tags.length > 1 && ","}
                                  </p>
                                );
                              }
                            })
                          : system.categories.map((tag, i) => {
                              if (i < (isMobile ? 1 : 2)) {
                                return (
                                  <p
                                    key={tag._id}
                                    className="hover:text-ffsgPurple cursor-pointer transition-colors duration-150"
                                  >
                                    {tag.title}
                                    {system.categories.length > 1 && ","}
                                  </p>
                                );
                              }
                            })}
                        {type == "commercial"
                          ? system.tags.length > (isMobile ? 1 : 2) && (
                              <p className="hover:text-ffsgPurple cursor-pointer transition-colors duration-150">
                                +{system.tags.length - (isMobile ? 1 : 2)}
                              </p>
                            )
                          : system.categories.length > (isMobile ? 1 : 2) && (
                              <p className="hover:text-ffsgPurple cursor-pointer transition-colors duration-150">
                                +{system.categories.length - (isMobile ? 1 : 2)}
                              </p>
                            )}
                      </div>
                      <p className="text-base md:text-lg font-semibold line-clamp-1 ">
                        {system.title}
                      </p>
                    </div>
                    <div className="hidden md:block p-2 bg-ffsgPink text-white group-hover:bg-ffsgPurple transition-colors duration-150 rounded-md">
                      <FiArrowUpRight size="1.5em" />
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
          <Link href={`/gallery?sys=${type}#recent`}>
            <a>
              <div className="bg-ffsgPink text-white w-[21.37rem] h-[17rem] md:w-[29.25rem] md:h-[21.5rem] hover:bg-ffsgLightPink hover:text-ffsgPink cursor-pointer transition-colors duration-150  rounded-lg">
                <p className="flex items-center justify-center h-full w-full font-semibold text-3xl">
                  + Show More
                </p>
              </div>
            </a>
          </Link>
        </Slider>
      </div>

      <div className="bg-ffsgPurple mt-8 lg:mt-1">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-32 lg:pt-40 pb-12 md:pb-16 items-center max-w-7xl mx-auto px-6 md:px-14 text-white">
          <div className="space-y-2 md:space-y-3">
            <p className="uppercasefont-medium text-lg">{short}</p>
            <h3 className="font-semibold text-2xl md:text-4xl md:leading-normal leading-snug">
              {title}
            </h3>
            {/* <div className="flex md:hidden items-center space-x-1 text-ffsgPink pt-2 md:pt-4">
              <p>Read details</p>
              <p>
                <FiArrowUpRight size="1.5em" />
              </p>
            </div> */}
          </div>
          <div className="mt-4">
            <p className="text-xs lg:leading-relaxed leading-normal md:text-sm lg:text-base">
              {description}
            </p>
          </div>
          <div className="md:hidden mx-auto mt-8">
            <Link href={`/gallery?sys=${type}#recent`}>
              <a className="text-white px-6 py-3 bg-ffsgPink rounded-xl flex space-x-1 cursor-pointer hover:bg-ffsgLightPink hover:text-ffsgPink transition-all duration-200 hover:ring-2 hover:ring-ffsgPink font-semibold text-sm">
                <p>Show All projects</p>
                <FiArrowUpRight size="1.3em" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
