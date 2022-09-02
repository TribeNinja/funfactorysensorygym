import React from "react";
import { useRouter } from "next/router";
import { urlFor } from "../sanity";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import BlockContent from "@sanity/block-content-to-react";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { IoLocationSharp } from "react-icons/io5";
import {
  AiOutlineInstagram,
  AiFillPhone,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import Slider from "react-slick";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import Image from "next/image";

const SystemsPage = ({ system }) => {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const router = useRouter();
  const URL = `${origin}${router.asPath}`;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const center = {
    lat: system?.gymInformation?.geolocation?.lat,
    lng: system?.gymInformation?.geolocation?.lng,
  };
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const serializers = {
    types: {
      youtube: ({ node }) => {
        const { url } = node;
        const opts = { width: "100%" };
        const id = getYouTubeId(url);
        return <YouTube videoId={id} opts={opts} />;
      },
    },
  };

  return (
    <div>
      <div className="mt-28 md:mt-36 max-w-7xl mx-auto px-6 md:px-14">
        <div className="pb-4 md:pb-8 bg-white space-y-5">
          <div className="md:flex md:items-center space-y-1 md:space-y-0 md:space-x-3 text-xs text-ffsgPink">
            {system.categories?.map((tag) => (
              <div key={tag._id} className="inline-block relative group">
                <p className="inline-block mr-1 md:mr-0 py-1 px-3 hover:bg-purple-100 hover:border-ffsgPurple hover:text-ffsgPurple cursor-pointer transition-colors duration-150 bg-ffsgLightPink border border-ffsgPink rounded-full">
                  {tag.title}
                </p>
                <div className="absolute md:w-72 top-0 items-center hidden mt-8 group-hover:flex">
                  <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-ffsgPurple shadow-lg">
                    {tag.description ? tag.description : "No description"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {system._type !== "blog" && (
            <p className="text-xl md:text-3xl font-bold">{system.title}</p>
          )}
        </div>
        <div>
          <Slider {...settings}>
            {system.gallery.map((image) => (
              <Image
                key={system.title}
                height="720"
                width="1080"
                layout="responsive"
                className=""
                objectFit="cover"
                src={urlFor(image).url()}
                alt={image.alt ? image.alt : "Sensory gym"}
              />
            ))}
          </Slider>
        </div>
        {system._type === "blog" && (
          <p className="text-xl md:text-3xl mt-10 md:mt-14 font-bold">
            {system.title}
          </p>
        )}
        {system.gymInformation && (
          <h1 className="text-lg md:text-2xl font-bold text-ffsgPurple mt-10 md:mt-14">
            Gym information
          </h1>
        )}

        <div
          className={`${
            system._type === "blog" ? "mt-0" : "mt-8"
          } grid grid-cols-1 md:grid-cols-2 gap-8`}
        >
          {system.gymInformation?.geolocation && (
            <div>
              {!isLoaded ? (
                <p>Loading...</p>
              ) : (
                <div className="w-full h-48 md:h-full">
                  <GoogleMap
                    zoom={13}
                    center={center}
                    mapContainerClassName="h-full w-full"
                  >
                    <Marker position={center} />
                  </GoogleMap>
                </div>
              )}
            </div>
          )}

          {system.gymInformation && (
            <div className="w-full text-gray-700 bg-ffsgLightPink rounded-md p-6">
              <h3 className="text-xl font-semibold">
                {system.gymInformation.name}
              </h3>
              <div className="space-y-2 mt-8 mb-10">
                <div className="flex space-x-2">
                  {system.gymInformation.location && (
                    <IoLocationSharp className="text-xl" />
                  )}

                  <p>{system.gymInformation.location}</p>
                </div>
                {system.gymInformation.website && (
                  <div className="flex  space-x-2 hover:text-ffsgPink">
                    <CgWebsite className="text-xl" />

                    <a
                      href={system.gymInformation.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer hover:underline "
                    >
                      Visit Website
                    </a>
                  </div>
                )}
                {system.gymInformation.email && (
                  <div className="flex space-x-2 hover:text-ffsgPink">
                    <MdEmail className="text-xl" />

                    <a
                      href={"mailto:" + system.gymInformation.email}
                      className="cursor-pointer hover:underline break-all"
                    >
                      {system.gymInformation.email}
                    </a>
                  </div>
                )}
                {system.gymInformation.secondaryEmail && (
                  <div className="flex space-x-2 hover:text-ffsgPink">
                    <MdEmail className="text-xl" />

                    <a
                      href={"mailto:" + system.gymInformation.secondaryEmail}
                      className="cursor-pointer hover:underline break-all"
                    >
                      {system.gymInformation.secondaryEmail}
                    </a>
                  </div>
                )}

                {system.gymInformation.phone && (
                  <div className="flex  space-x-2 hover:text-ffsgPink">
                    <AiFillPhone className="text-xl" />

                    <a
                      href={"tel:" + system.gymInformation.phone}
                      className="cursor-pointer hover:underline "
                    >
                      {system.gymInformation.phone}
                    </a>
                  </div>
                )}
                {system.gymInformation.secondaryPhone && (
                  <div className="flex  space-x-2 hover:text-ffsgPink">
                    <AiFillPhone className="text-xl" />

                    <a
                      href={"tel:" + system.gymInformation.secondaryPhone}
                      className="cursor-pointer hover:underline "
                    >
                      {system.gymInformation.secondaryPhone}
                    </a>
                  </div>
                )}
              </div>
              <div className="flex text-3xl text-ffsgPink space-x-4">
                {system.gymInformation.socials?.instagram && (
                  <a
                    href={system.gymInformation.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-ffsgPurple"
                  >
                    <AiOutlineInstagram />
                  </a>
                )}
                {system.gymInformation.socials?.twitter && (
                  <a
                    href={system.gymInformation.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-ffsgPurple"
                  >
                    <TiSocialTwitter />
                  </a>
                )}
                {system.gymInformation.socials?.facebook && (
                  <a
                    href={system.gymInformation.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-ffsgPurple"
                  >
                    <TiSocialFacebook />
                  </a>
                )}
                {system.gymInformation.socials?.linkedin && (
                  <a
                    href={system.gymInformation.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-ffsgPurple"
                  >
                    <AiFillLinkedin />
                  </a>
                )}
                {system.gymInformation.socials?.youtube && (
                  <a
                    href={system.gymInformation.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:text-ffsgPurple"
                  >
                    <AiFillYoutube />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
        <article className="mt-14 prose lg:prose-lg max-w-3xl mx-auto md:prose-img:w-9/12 prose-img:mx-auto prose-h1:text-ffsgPurple prose-h2:text-ffsgPurple prose-a:text-ffsgPink">
          <BlockContent
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            blocks={system.body}
            serializers={serializers}
          />
        </article>
        <div className="space-y-3 text-ffsgPink mt-10">
          <p className="text-md md:text-lg">Share this</p>
          <div className="flex space-x-4 md:space-x-6 text-3xl md:text-4xl">
            <FacebookShareButton url={URL}>
              <TiSocialFacebook className="hover:text-ffsgPurple" />
            </FacebookShareButton>
            <TwitterShareButton url={URL}>
              <TiSocialTwitter className="hover:text-ffsgPurple" />
            </TwitterShareButton>
          </div>
        </div>
        {system._type !== "blog" && (
          <div>
            <hr className="mt-14 md:mt-20" />
            <div className="mt-10">
              <div className="pb-10 bg-white space-y-3">
                <p className="text-ffsgPink">Projects</p>
                <p className="text-2xl font-bold">Other related work</p>
                <p className="text-gray-500">
                  {system._type === "commercial" &&
                    "Our large open play/multi-functional facilities are designed from the center out. This allows us to capture the center of the room and design out to all four corners making the entire rooms flow and functionality useful to everyone using it. Our large sensory gyms are versatile and can accommodate many therapists and children at the same time."}
                  {system._type === "home" &&
                    "Homes, Basements, Attics, Garages, and bedrooms! We understand that space can be limited, that’s why our designers take into consideration every square inch of space in your home. Our in-home systems are designed to provide your family with plenty of floor space not only to play but to also move about with ease when the system isn’t being used."}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SystemsPage;
