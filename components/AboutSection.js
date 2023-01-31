import Link from "next/link";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import { FaChild } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";

const AboutSection = () => {
  const [readMore1, setReadMore1] = useState(false);

  return (
    <div
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-14 mt-16 md:mt-32"
    >
      <div className="relative">
        <div className="md:h-[26rem] md:w-[22rem] lg:h-[32rem] lg:w-[28rem] bg-ffsgLightPink rounded-lg" />
        <img
          className="md:h-[26rem] md:w-[22rem] lg:h-[32rem] lg:w-[28rem] rounded-lg md:absolute top-8 left-8 object-cover"
          src="/aboutusimage.png"
        />
      </div>
      <div className="my-auto">
        <div className="space-y-5">
          <p className="uppercase text-gray-500 font-medium text-lg">
            About Us
          </p>
          <h2 className="font-semibold text-3xl md:text-5xl max-w-lg md:leading-normal leading-snug">
            Our Story
          </h2>
          <div>
            <p
              className={
                readMore1
                  ? "line-clamp-none font-light text-gray-500"
                  : "line-clamp-3 font-light text-gray-500"
              }
            >
              FUN FACTORY SENSORY GYM, LLC is the leading manufacturer of custom
              sensory gyms and equipment. Our dynamic and experienced team of
              professionals design, develop and install our products throughout
              North America.
              <br />
              <br />
              We at Fun Factory Sensory Gym create a state-of-the-art
              multi-sensory environment, providing every child with positive
              play in a therapeutic environment.
              <br />
              <br />
              Throughout the building process, our clients can be assured to
              experience the maximum level of professionalism, skills, and
              service from our team. Fun Factory Sensory Gym systems fit nicely
              into all kinds of spaces with no shortage of options to keep
              children engaged. Our products are carefully designed based on
              client specifications, size, and budget.
              <br />
              <br />
              We create our products to educate, challenge, and stimulate, but
              most importantly, to bring the outdoor playing experience into a
              more private setting.
              <br />
              <br />
              At Fun Factory Sensory Gym, your time and business are of utmost
              value to us. Our customer service and design teams are available
              for inquiries and consultations year-round. Our installations are
              rendered assuring no shutdown time. Contact us for a unique
              experience, tailored to your needs!
            </p>
            <span
              className="text-ffsgPink underline hover:text-ffsgPurple cursor-pointer"
              onClick={() => setReadMore1(!readMore1)}
            >
              {!readMore1 ? "Read more..." : "Read less..."}
            </span>
          </div>

          <Link href="/contact">
            <a className="text-white px-8 py-3 bg-ffsgPink rounded-xl inline-block cursor-pointer hover:bg-ffsgLightPink hover:text-ffsgPink transition-all duration-200 hover:ring-2 hover:ring-ffsgPink font-semibold text-sm md:text-base">
              <p>Contact Us</p>
            </a>
          </Link>
        </div>

        <div className="hidden w-full lg:inline-block py-6 px-8 rounded-lg bg-ffsgLightPink mt-14">
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-white p-3 bg-ffsgPink inline-block rounded-full">
                <FaChild size="2em" />
              </div>
              <div>
                <div className="font-bold text-2xl">
                  <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                      <p>
                        {isVisible ? (
                          <CountUp start={1} end={550000} duration={3} />
                        ) : null}
                        +
                      </p>
                    )}
                  </VisibilitySensor>
                </div>
                <p>Children Helped</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-white p-3 bg-ffsgPink inline-block rounded-full">
                <TiTickOutline size="2em" />
              </div>
              <div>
                <div className="font-bold text-2xl">
                  <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                      <p>
                        {isVisible ? (
                          <CountUp start={1} end={4400} duration={3} />
                        ) : null}
                        +
                      </p>
                    )}
                  </VisibilitySensor>
                </div>
                <p>Installations Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
