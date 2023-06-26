import Image from "next/image";
import React from "react";

const Therapist = () => {
  const therapists = [
    {
      name: "Petros Chalkitis",
      picture: "petros.jpg",
      bio: "Master of Science and Licensed Occupational Therapist",
    },
    {
      name: "Andrea Doumar",
      picture: "AndreaDoumar.png",
      bio: "Pediatric Occupational Therapist",
    },
    {
      name: "Dr. Darcy Fass",
      picture: "DarcyFass.png",
      bio: "Doctor of Pediatric Physical Therapy, Physical Therapist",
    },

    {
      name: "Sarah Stevens",
      picture: "SarahStevens.png",
      bio: "Master of Science in Occupational Therapy. Registered Occupational Therapist",
    },
    {
      name: "Emily Noldin",
      picture: "EmilyNoldin.png",
      bio: "Registered Occupational Therapist",
    },
  ];
  return (
    <div className="-mt-8 md:my-12 mx-auto">
      <div className="h-[90px] w-24 lg:h-40 lg:w-52 relative mx-auto -mb-2 md:mb-5">
        <Image
          src="/TTLogo.png"
          layout="fill"
          objectFit="contain"
          alt="Therapy Talk Logo"
        />
      </div>
      <div className="text-sm md:text-base text-center text-gray-500 mt-4 md:mt-6 mb-5">
        <p>
          Therapy Talk is a non-profit initiative created by Fun Factory Sensory
          Gym. It is an online resource for all advice, guidelines, and
          information relating to therapy tools, sensory gyms, tips and
          techniques to help children, families, and therapists.
        </p>
      </div>
      {/* <div className="text-center my-5 mx-auto">
        <h1 className="text-3xl font-semibold uppercase text-[#295431]">
          Therapists
        </h1>
      </div> */}
      <div className="space-y-6 md:-space-y-4">
        {therapists.map((therapist, i) => (
          <div key={i}>
            {i % 2 == 0 && (
              <div className="flex space-x-3 md:space-x-8">
                <div className="h-16 w-16 lg:h-40 lg:w-40 relative rounded-full shadow-lg flex-none">
                  <Image
                    src={"/therapists/" + therapist.picture}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    alt={therapist.name}
                  />
                </div>
                <div className="my-auto space-y-1 md:space-y-4">
                  <p className="px-6 py-1 md:px-8 md:py-2 bg-[#88A07F] inline-block rounded-full text-white font-semibold text-sm md:text-lg">
                    {therapist.name}
                  </p>
                  <p className="md:max-w-sm text-sm md:text-base text-gray-500">
                    {therapist.bio}
                  </p>
                </div>
              </div>
            )}

            {i % 2 != 0 && (
              <div className="flex space-x-3 md:space-x-8 ">
                <div className="my-auto space-y-1 md:space-y-4 ml-auto text-right">
                  <p className="px-6 py-1 md:px-8 md:py-2 bg-[#88A07F] inline-block rounded-full text-white font-semibold text-sm md:text-lg">
                    {therapist.name}
                  </p>
                  <p className="md:max-w-sm text-sm md:text-base text-gray-500">
                    {therapist.bio}
                  </p>
                </div>
                <div className="h-16 w-16 lg:h-40 lg:w-40 relative rounded-full shadow-lg flex-none">
                  <Image
                    src={"/therapists/" + therapist.picture}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    alt={therapist.name}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Therapist;
