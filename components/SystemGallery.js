import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { urlFor } from "sanity";
import { isMobile } from "react-device-detect";
import Pagination from "./Pagination";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const SystemGallery = ({ systems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = systems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [systems]);

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
    <div className="py-2 md:py-6 max-w-7xl mx-auto px-6 md:px-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
        {currentItems.map((system) => (
          <div key={system._id} className="flex flex-col overflow-hidden group">
            <div className="flex-1 pb-4 lg:pb-6 bg-white space-y-2">
              <p className="text-ffsgPink font-medium uppercase">
                {system._type} System
              </p>
              <Link href={`/systems/${system._type}/${system.slug.current}`}>
                <a className="text-lg md:text-xl font-semibold md:leading-relaxed cursor-pointer">
                  {system.title}
                </a>
              </Link>
            </div>
            <Link href={`/systems/${system._type}/${system.slug.current}`}>
              <a>
                <Slider {...settings}>
                  {system.gallery.map((image) => (
                    <div
                      key={system._id}
                      className="rounded-lg overflow-hidden h-56 w-full lg:h-60 lg:w-96 bg-ffsgLightPink relative"
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
                        objectFit="cover"
                        layout="fill"
                        className="rounded-lg"
                        src={urlFor(image).url()}
                        alt={image.alt ? image.alt : "Sensory gym"}
                      />
                      <div className="absolute inset-0 bg-ffsgPink bg-opacity-50 rounded-lg flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-lg font-bold text-center opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                          <FiArrowUpRight className="text-4xl mx-auto" /> View
                          more
                        </p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </a>
            </Link>
            <div className="flex items-center my-3 lg:my-5 space-x-2 text-xs text-ffsgPink">
              {system._type == "commercial"
                ? system.tags.map((tag, i) => {
                    if (i < (isMobile ? 1 : 2)) {
                      return (
                        <p
                          key={tag._id}
                          className="py-1 px-2 bg-ffsgLightPink border border-ffsgPink rounded-full"
                        >
                          {tag.title}
                        </p>
                      );
                    }
                  })
                : system.categories.map((tag, i) => {
                    if (i < (isMobile ? 1 : 2)) {
                      return (
                        <p
                          key={tag._id}
                          className="py-1 px-2 bg-ffsgLightPink border border-ffsgPink rounded-full"
                        >
                          {tag.title}
                        </p>
                      );
                    }
                  })}

              {system._type == "commercial"
                ? system.tags.length > (isMobile ? 1 : 2) && (
                    <Link
                      href={`/systems/${system._type}/${system.slug.current}`}
                    >
                      <a className="py-1 px-2 hover:bg-purple-100 hover:border-ffsgPurple hover:text-ffsgPurple cursor-pointer transition-colors duration-150 bg-ffsgLightPink border border-ffsgPink rounded-full">
                        +{system.tags.length - (isMobile ? 1 : 2)}
                      </a>
                    </Link>
                  )
                : system.categories.length > (isMobile ? 1 : 2) && (
                    <Link
                      href={`/systems/${system._type}/${system.slug.current}`}
                    >
                      <a className="py-1 px-2 hover:bg-purple-100 hover:border-ffsgPurple hover:text-ffsgPurple cursor-pointer transition-colors duration-150 bg-ffsgLightPink border border-ffsgPink rounded-full">
                        +
                        {system._type == "commercial"
                          ? system.tags.length - (isMobile ? 1 : 2)
                          : system.categories.length - (isMobile ? 1 : 2)}
                      </a>
                    </Link>
                  )}
            </div>

            <div className="border-b mt-3 md:mt-4" />
          </div>
        ))}
      </div>
      <div className="mt-6 lg:mt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(systems.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>

      {systems.length === 0 && <p>No gyms are available</p>}
    </div>
  );
};

export default SystemGallery;
