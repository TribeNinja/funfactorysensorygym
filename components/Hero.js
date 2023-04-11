import { HiArrowNarrowRight } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { AiTwotonePhone } from "react-icons/ai";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Slider from "react-slick";
import Link from "next/link";
import { TiTickOutline } from "react-icons/ti";
import Image from "next/image";

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <header className="hidden md:grid grid-cols-2 py-4 px-6 md:px-14 z-10 items-center absolute max-w-7xl w-full font-medium">
        <div className="flex space-x-8 items-center">
          <Link href="/">
            <a className="w-20 h-16 md:w-24 md:h-20 lg:w-32 lg:h-28 relative cursor-pointer">
              <Image src="/logo2.png" layout="fill" objectFit="cover" alt="" />
            </a>
          </Link>

          <Link href="/#about">
            <a className="relative nav hover:text-ffsgPink cursor-pointer transition-all duration-200">
              <span className="nav-link">About</span>
            </a>
          </Link>

          <Link href={"/systems?sys=all"}>
            <a className="relative nav hover:text-ffsgPink cursor-pointer transition-all duration-200">
              <span className="nav-link">Systems</span>
            </a>
          </Link>
          <Link href="/blog">
            <a className="relative nav hover:text-ffsgPink cursor-pointer transition-all duration-200">
              <span className="nav-link">Blog</span>
            </a>
          </Link>
          <Link href="/giftcards">
            <a className="relative nav hover:text-ffsgPink cursor-pointer transition-all duration-200">
              <span className="nav-link">Gift Cards</span>
            </a>
          </Link>
        </div>
        <div className="flex space-x-3">
          <Link href="/contact">
            <a className="hidden md:flex ml-auto items-center text-white px-6 py-3 bg-ffsgPink rounded-xl space-x-1 cursor-pointer hover:bg-ffsgLightPink hover:text-ffsgPink transition-all duration-200 ring-2 ring-pink-900 font-semibold">
              <p>Free Consultation</p>
              <FiArrowUpRight size="1.2em" />
            </a>
          </Link>
          <Link href="tel:+18334620769">
            <a className="hidden md:flex ml-auto items-center text-white px-6 py-3 bg-green-500 rounded-xl space-x-1 cursor-pointer hover:bg-ffsgLightPink hover:text-ffsgPink transition-all duration-200 ring-2 hover:ring-ffsgPink ring-green-800  font-semibold">
              <AiTwotonePhone size="1.3em" />
              <p>+1 (833) 462-0769</p>
            </a>
          </Link>
        </div>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
        <div className="mt-40 lg:mt-36 xl:mt-40 items-center px-6 lg:px-14">
          <div className="space-y-6 lg:space-y-8 xl:max-w-lg">
            <h1 className="font-semibold text-3xl lg:text-5xl lg:leading-normal leading-snug text-center lg:text-left">
              One Gym, Unlimited Possibilities
            </h1>
            <p className="leading-relaxed">
              At Fun Factory Sensory Gym, we design, manufacture, and
              custom-install sensory gyms throughout the United States. From
              learning about your space, the design of your sensory gym, and the
              3-D rendering of your space, where you can see what your gym would
              look like at your provided location, to the installation of our
              custom products, our design specialists will create the most
              effective and efficient sensory gym for all your needs. At Fun
              Factory Sensory Gym, our mission is to impact the lives of
              children through developmental and therapeutic sensory play. If
              you are a parent, therapist, or organization looking for a fun,
              healthy way for your children to learn, develop, and grow; book a
              free consultation with our design team today to learn more about
              Fun Factory and your dream sensory gym.
            </p>
            <div className="flex items-center space-x-3">
              <div className="text-white p-3 bg-ffsgPink inline-block rounded-full">
                <TiTickOutline className="text-2xl" />
              </div>
              <p className="font-medium leading-relaxed flex">
                A percentage of every installation is given back to families
                with special needs.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-5 mt-10 lg:mt-16">
            <Link href="/contact">
              <a className="px-6 py-3 md:py-4 text-sm md:text-base bg-ffsgPink text-white rounded-xl flex items-center space-x-2 cursor-pointer hover:bg-ffsgLightPink hover:text-ffsgPink transition-all duration-200 hover:ring-2 hover:ring-ffsgPink font-semibold">
                <p>Free Consultation</p>
                <HiArrowNarrowRight size="1.3em" />
              </a>
            </Link>

            <Link href="/#process">
              <a className="relative nav hover:text-ffsgPink cursor-pointer text-sm md:text-base transition-all duration-200">
                <span className="nav-link font-medium">Our Process</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Slider {...settings}>
            <video
              className="h-[35rem] md:h-[96vh] w-full object-cover"
              autoPlay
              playsInline
              loop
              muted
            >
              <source src="/videos/sample3.mp4" type="video/mp4" />
            </video>
            <video
              className="h-[35rem] md:h-[96vh] w-full object-cover"
              autoPlay
              playsInline
              loop
              muted
            >
              <source src="/videos/sample2.mp4" type="video/mp4" />
            </video>
            <video
              className="h-[35rem] md:h-[96vh] w-full object-cover"
              autoPlay
              playsInline
              loop
              muted
            >
              <source src="/videos/sample.mp4" type="video/mp4" />
            </video>
            {/* <img
              src="/hero.png"
              alt=""
              className="h-[30rem] md:h-[96vh] w-full object-cover"
            /> */}
          </Slider>

          <div className="lg:hidden absolute bottom-5 left-0 right-0 mx-5 mt-14">
            <div className="flex items-center justify-between px-6 py-4 bg-white">
              <div className="flex items-center space-x-4">
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
                  <p className="text-sm">Children Helped</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
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
                  <p className="text-sm">Installations Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
