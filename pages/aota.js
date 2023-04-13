import Image from "next/image";
import React, { useRef } from "react";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { AotaButton } from "../components/aota/AotaButton";
import emailjs from "@emailjs/browser";
import Head from "next/head";

const Aota = () => {
  const form = useRef();
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_6gwnxlg",
        "template_1aacbg4",
        form.current,
        "fDnRGjXsxGgVpe5x3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className="bg-[#FBF9FC] ">
      <Head>
        <title>
          Fun Factory Sensory Gym and Therapy Talk Goes To AOTA 2023
        </title>
        <meta
          name="description"
          content="Therapy Talk is the one-stop online resource for all advice,
                    guidelines, and information relating to therapy tools,
                    sensory gyms, tips and techniques to help children,
                    families, and therapists."
        />
      </Head>
      {/* Hero */}
      <header className="bg-[#F1ECF3] px-6">
        <div className="max-w-7xl mx-auto pb-24 lg:pb-28">
          <div className="flex items-center pt-8 min-w-fit">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:h-48 w-full lg:py-1 mt-[-5vh] lg:mt-0">
              <div className="w-32 lg:w-44 h-28 lg:h-40 relative mt-10 lg:mt-0">
                <Image
                  src="/logo2.png"
                  layout="fill"
                  objectFit="contain"
                  alt="TherapyTalk"
                />
              </div>

              <div className="hidden lg:flex items-center mt-[-5vh] z-50">
                <AotaButton
                  label="Contact Us"
                  type="default"
                  link="#footerId"
                />
              </div>
            </div>
          </div>
          <div className="container lg:-mt-6 mt-6  mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col justify-center">
                <h1 className="lg:text-[45px] text-[30px] font-bold">
                  Fun Factory Sensory Gym and Therapy Talk Goes To
                </h1>
                <div className="flex lg:h-36 w-full items-center">
                  <Image
                    src="/aota.png"
                    width="300px"
                    height="128px"
                    alt="aota"
                    className="w-36"
                  />
                  <Image
                    src="/2023.png"
                    width="300px"
                    height="100%"
                    alt="2023"
                  />
                </div>
                <div>
                  <Image
                    src="/aota_underline.png"
                    width="600px"
                    height="20px"
                    alt="aota_Underline"
                  />
                </div>
                <div>
                  <h2 className="text-gray-500 mt-4 lg:mt-8">
                    Fun factory sensory gym is the nation&apos;s leading custom
                    sensory gym installer. We have installed over 4000 gyms in
                    clinics, private homes, hospitals, churches and have helped
                    over 500,000 children and families. Therapy Talk is a
                    non-profit initiative to help educate and guide new
                    therapists, students, and struggling parents.
                  </h2>
                </div>
                <div className="mt-8 mr-auto">
                  <AotaButton label="Book Now" type="bg" link="#bookNow" />
                </div>
              </div>

              {/* RIght */}
              <div className="flex flex-col items-center justify-center mt-10 lg:mt-0">
                <div className="flex justify-center items-center rounded-full w-[90vw] h-[90vw] lg:w-[25vw] lg:h-[25vw] bg-gradient-to-b from-[#691c6422] to-[#691c64ff]">
                  <div className="flex justify-center items-center rounded-full w-[86vw] h-[86vw] lg:w-[22vw] lg:h-[22vw] bg-[#691C64]">
                    <div className="rounded-full w-[80vw] h-[80vw] lg:w-[20vw] lg:h-[20vw] bg-[url('/petros.jpg')] bg-no-repeat bg-cover"></div>
                  </div>
                </div>
                <div className=" flex flex-col items-center justify-center w-[90vw] h-[45vh] lg:w-[40vw] xl:w-[30vw] md:h-[30vh] lg:h-[33vh] mt-[-12vh] bg-white shadow-xl rounded-3xl">
                  <div className="flex items-center justify-center w-[80vw] h-[5vh] lg:w-[27vw] lg:h-[5vh]  rounded-full bg-[#691C64]">
                    <h2 className="text-[#e5e5e5] font-semibold">
                      Petros Chalkitis
                    </h2>
                  </div>
                  <h2 className="text-gray-400 px-5 lg:px-7 py-2">
                    With a master's in OT from NYIT and 17 years of experience
                    with the pediatric population in different settings, Petros
                    specializes in young children aged 2 to 10, using
                    therapeutic tools such as reflex integration, therapeutic
                    listening, kids&apos; yoga, astronaut training and rhythmic
                    movement training. He&apos;s also one of the first OTs to
                    participate in the SEED program of the NYC
                    Dept of Education.
                  </h2>
                  {/* <h2 className="text-gray-400 px-7 py-2">
                    He will be representing Therapy Talk, answering all your
                    questions and providing guidance on any matter relating to
                    occupational therapy.
                  </h2> */}
                  <h2 className=" px-2 text-center text-cyan-500">
                    @your_neighborhood_ot
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto py-20 lg:pb-40 lg:pt-28 px-6"
      >
        <div
          id="bookNow"
          className="p-6 lg:p-10 bg-white shadow-xl rounded-2xl"
        >
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold lg:leading-snug">
              Please sign up in our form below if you would like to meet Petros
              Chalkitis
            </h2>
            <p className="text-gray-500">
              Therapy Talk is an online resource for all advice, guidelines, and
              information relating to therapy tools, sensory gyms, tips and
              techniques to help children, families, and therapists.
            </p>
          </div>

          <form ref={form} className="mt-8 space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="py-2 px-1 w-full outline-none text-gray-500"
                  name="name"
                />
                <div className="border-b-2" />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="py-2 px-1 w-full outline-none text-gray-500"
                />
                <div className="border-b-2" />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <input
                  type="number"
                  placeholder="Phone"
                  name="phone"
                  className="py-2 px-1 w-full outline-none text-gray-500"
                />
                <div className="border-b-2" />
              </div>
              <div>
                <select
                  name="Select"
                  className="w-full py-2 outline-none text-gray-400"
                >
                  <option value="DEFAULT">Select</option>
                  <option value="Student">Student</option>
                  <option value="Therapist">Therapist</option>
                  <option value="SensoryGym">
                    Interested in installing a sensory gym
                  </option>
                </select>
                <div className="border-b-2" />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  className="py-2 px-1 w-full outline-none text-gray-500"
                />
                <div className="border-b-2" />
              </div>
              <div>
                <select
                  name="state"
                  className="w-full py-2 outline-none text-gray-400"
                >
                  <option value="DEFAULT">State</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="District Of Columbia">
                    District Of Columbia
                  </option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>
                <div className="border-b-2" />
              </div>
            </div>
            <div>
              <textarea
                rows="5"
                placeholder="Comments"
                className="py-2 px-1 w-full outline-none text-gray-500"
                name="comments"
              />
              <div className="border-b-2" />
            </div>

            <div />
            <button
              type="submit"
              className="rounded-full bg-[#691C64] py-3 w-full text-white text-lg font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div id="footerId" className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center">
          <div className="lg:col-span-1 flex flex-col justify-center items-center">
            <div className="h-40 w-44 lg:h-52 lg:w-60 relative">
              <Image
                src="/logo2.png"
                layout="fill"
                objectFit="contain"
                alt="aota_Underline"
              />
            </div>

            {/* <div className="mt-10">
              <AotaButton label={"Visit"} type={"bg"} link="/" />
            </div> */}
          </div>
          <div className="lg:col-span-2 ">
            <h2 className="text-3xl lg:text-[54px] text-center font-bold leading-snug lg:leading-normal">
              One Custom Gym, Unlimited Possibilities
            </h2>
            <h2 className="text-xl font-bold leading-9 text-[#585C65] text-center mt-2">
              Made possible with Fun Factory Sensory Gym
            </h2>
          </div>
          <div className="lg:col-span-1 flex flex-col justify-center items-center">
            <div className="h-40 w-44 lg:h-52 lg:w-60 relative">
              <Image
                src="/TTLogo.png"
                layout="fill"
                objectFit="contain"
                alt="aota_Underline"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center mt-16">
          <div className="flex justify-around items-center lg:w-1/3 w-full">
            <a
              href="https://www.facebook.com/FunFactoryGym"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-ffsgPink flex justify-around items-center text-2xl rounded-full bg-[#691C64] w-[50px] h-[50px] text-[#FBF9FC]"
            >
              <TiSocialFacebook />
            </a>
            <a
              href="https://www.instagram.com/funfactorysensorygym/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-ffsgPink flex justify-around items-center text-2xl rounded-full bg-[#691C64] w-[50px] h-[50px] text-[#FBF9FC]"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://twitter.com/funfactorysg?lang=enter"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-ffsgPink flex justify-around items-center text-2xl rounded-full bg-[#691C64] w-[50px] h-[50px] text-[#FBF9FC]"
            >
              <TiSocialTwitter />
            </a>
            <a
              href="https://www.youtube.com/channel/UCmlba2ClwuAboIY29LhfmnQ?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-ffsgPink flex justify-around items-center text-2xl rounded-full bg-[#691C64] w-[50px] h-[50px] text-[#FBF9FC]"
            >
              <AiFillYoutube />
            </a>
            <a
              href="https://www.pinterest.com/funfactorys0070/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-ffsgPink flex justify-around items-center text-2xl rounded-full bg-[#691C64] w-[50px] h-[50px] text-[#FBF9FC]"
            >
              <FaPinterest />
            </a>
            <a
              href="https://www.linkedin.com/company/fun-factory-sensory-gym"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-ffsgPink flex justify-around items-center text-2xl rounded-full bg-[#691C64] w-[50px] h-[50px] text-[#FBF9FC]"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
        <div className="text-center py-8 lg:py-10 text-[#585C65]">
          <h2>© 2023 Fun Factory Sensory Gym, LLC</h2>
        </div>
      </div>
    </div>
  );
};

export default Aota;
