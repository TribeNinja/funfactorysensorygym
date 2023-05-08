import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import { urlFor } from "sanity";

const SectionOne = ({ pageInfo }) => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentlyShowing, setCurrentlyShowing] = useState(4);

  useEffect(() => {
    setGalleryImages(pageInfo.gallery.slice(0, currentlyShowing));
  }, [currentlyShowing]);

  const ytOpts = {
    width: "100%",
    height: isMobile ? "195" : "657",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      rel: 0,
      // hide video info and controls
      showinfo: 0,
      modestbranding: 1,
    },
  };
  return (
    <div>
      <div className="text-center px-6 md:px-16 mt-10 mx-auto">
        <h1 className="text-3xl font-bold uppercase">{pageInfo.title}</h1>

        <div className="mt-3 text-gray-500">
          <p>{pageInfo.description}</p>
        </div>
      </div>

      <div className="mt-8 px-6 lg:px-14">
        <div className="relative rounded-lg lg:rounded-3xl overflow-hidden">
          <YouTube
            videoId={pageInfo.videoId}
            opts={ytOpts}
            className="top-0 left-0 w-full h-full"
          />
        </div>
        <div className="mt-4 lg:mt-6">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
            {galleryImages?.map((image, index) => (
              <div
                key={index}
                className="h-56 w-full lg:h-80 lg:w-full rounded-lg bg-ffsgLightPink relative"
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
                  src={urlFor(image).width(1080).url()}
                  alt={image.alt ? image.alt : "Sensory gym"}
                />
              </div>
            ))}
          </div>
          {pageInfo.gallery.length > galleryImages.length && (
            <div className="text-white font-semibold flex mt-8 md:mt-12">
              <p
                onClick={() => setCurrentlyShowing(currentlyShowing + 4)}
                className="py-3 px-6 lg:px-8 bg-ffsgPink cursor-pointer rounded-xl mx-auto hover:bg-ffsgLightPink hover:text-ffsgPink transition-all duration-200 hover:ring-2 hover:ring-ffsgPink"
              >
                Show More
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
