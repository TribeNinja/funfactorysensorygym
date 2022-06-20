import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { urlFor } from "sanity";
import { isMobile } from "react-device-detect";
import Image from "next/image";

const SystemGallery = ({ systems }) => {
  const [currentSystems, setCurrentSystems] = useState([]);
  const [currentlyShowing, setCurrentlyShowing] = useState(6);

  useEffect(() => {
    setCurrentSystems(systems.slice(0, currentlyShowing));
  }, [systems, currentlyShowing]);

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
        {currentSystems.map((system) => (
          <div
            key={system._id}
            className="flex flex-col group overflow-hidden group"
          >
            <div className="flex-1 pb-6 bg-white space-y-2">
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
                    <Image
                      key={system._id}
                      height="270"
                      width="400"
                      objectFit="cover"
                      className="hover:scale-125 transition-all duration-200"
                      src={urlFor(image).url()}
                      alt={image.alt ? image.alt : "Sensory gym"}
                    />
                  ))}
                </Slider>
              </a>
            </Link>
            <div className="flex items-center my-5 space-x-2 text-xs text-ffsgPink">
              {system.tags.map((tag, i) => {
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
              {system.tags.length > (isMobile ? 1 : 2) && (
                <Link href={`/systems/${system._type}/${system.slug.current}`}>
                  <a className="py-1 px-2 hover:bg-purple-100 hover:border-ffsgPurple hover:text-ffsgPurple cursor-pointer transition-colors duration-150 bg-ffsgLightPink border border-ffsgPink rounded-full">
                    +{system.tags.length - (isMobile ? 1 : 2)}
                  </a>
                </Link>
              )}
            </div>

            <hr className="my-5 md:my-7" />
          </div>
        ))}
      </div>
      {systems.length > currentSystems.length && (
        <div className="text-white flex mt-14 md:mt-20">
          <p
            onClick={() => setCurrentlyShowing(currentlyShowing + 6)}
            className="px-8 py-4 bg-ffsgPink cursor-pointer rounded-lg mx-auto"
          >
            Show More
          </p>
        </div>
      )}

      {systems.length === 0 && <p>No gyms are available</p>}
    </div>
  );
};

export default SystemGallery;
