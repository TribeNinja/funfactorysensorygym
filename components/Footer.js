import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="bg-ffsgPurple mt-24 md:mt-48">
      <div className="max-w-7xl mx-auto p-6 md:p-14 text-white mt-14">
        <div className="flex items-center justify-between">
          <div className="w-28 md:w-40 lg:w-48">
            <img src="/logo2.png" alt="" />
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 space-x-6">
            <p className="font-medium text-sm md:text-base">
              Ready to get started?
            </p>
            <div
              onClick={() => router.push("/contact")}
              className="ml-auto items-center px-6 py-3 md:px-8 md:py-4 bg-ffsgPink rounded-lg flex space-x-1 cursor-pointer hover:bg-ffsgLightPink hover:text-ffsgPink transition-all duration-200 hover:ring-2 hover:ring-ffsgPink text-sm md:text-base font-medium"
            >
              <p>Free Consultation</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-14">
          <div className="col-span-2">
            <p className="font-semibold">Working Hours</p>
            <p className="font-light">Mon-Fri -8 am to 8 pm EST</p>
            <p className="mt-8 font-light">
              <span className="font-medium">
                Sales & Customer service address:
              </span>{" "}
              991 US Highway 22, Suite 200, Bridgewater, NJ
              <br />
              <span className="font-medium">
                Manufacturing & Warehouse:
              </span>{" "}
              108 Park St, Bear Creek WI 54922
            </p>
            <p className="mt-4">© 2022 Fun Factory Sensory Gym, LLC</p>
          </div>
          <div className="mt-8 md:mt-0 space-y-4 text-slate-300 font-light md:ml-auto text-sm">
            <p className="text-ffsgPink">Systems</p>
            <div className="hover:cursor-pointer hover:underline">
              <Link href="/systems?sys=all">
                <a>
                  <p>All Systems</p>
                </a>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href="/systems?sys=commercial">
                <a>
                  <p>Commercial System</p>
                </a>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href="/systems?sys=home">
                <a>
                  <p>Home System</p>
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-8 md:mt-0 space-y-4 text-slate-300 font-light md:ml-auto text-sm">
            <p className="text-ffsgPink">About</p>
            <div className="hover:cursor-pointer hover:underline">
              <Link href="/#about">
                <a>
                  <p>Our Story</p>
                </a>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href="/#process">
                <a>
                  <p>Process</p>
                </a>
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href="/contact">
                <a>
                  <p>Contact Us</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8 md:mt-12 justify-between">
          <div className="flex justify-between md:space-x-6 text-3xl">
            <a
              href="https://www.facebook.com/FunFactoryGym"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-ffsgPink"
            >
              <TiSocialFacebook />
            </a>
            <a
              href="https://www.instagram.com/funfactorysensorygym/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-ffsgPink"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://twitter.com/funfactorysg?lang=enter"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-ffsgPink"
            >
              <TiSocialTwitter />
            </a>
            <a
              href="https://www.youtube.com/channel/UCmlba2ClwuAboIY29LhfmnQ?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-ffsgPink"
            >
              <AiFillYoutube />
            </a>
            <a
              href="https://www.pinterest.com/funfactorys0070/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-ffsgPink"
            >
              <FaPinterest />
            </a>
            <a
              href="https://www.linkedin.com/company/fun-factory-sensory-gym"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-ffsgPink"
            >
              <AiFillLinkedin />
            </a>
          </div>
          {/* <div className="mt-8 md:mt-0 flex space-x-6 text-sm font-light">
            <p className="hover:cursor-pointer hover:underline">
              Terms & Conditions
            </p>
            <p className="hover:cursor-pointer hover:underline">
              Privacy Policy
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
