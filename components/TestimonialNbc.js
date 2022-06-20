import { useState } from "react";
import { HiPlay } from "react-icons/hi";
import Modal from "react-modal";
import YouTube from "react-youtube";
import { isMobile } from "react-device-detect";

const TestimonialNbc = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const opts = {
    width: isMobile ? "310" : "840",
    height: isMobile ? "240" : "490",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.25)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-6 md:px-14 my-24 md:my-40">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={closeModal}>close</button> */}
        <YouTube videoId="9X2cGS1jgMg" opts={opts} />
      </Modal>
      <div className="text-center space-y-3 md:space-y-6">
        <div className="inline-block">
          <img src="/NBC logo.png" alt="" className="w-20 md:w-28 lg:w-32" />
        </div>
        <div className="space-y-4 lg:space-y-8">
          <p className="font-semibold text-4xl md:text-7xl lg:text-8xl">
            The Only
          </p>
          <p className="font-semibold text-2xl md:text-3xl lg:text-4xl">
            "Trusted Professionals"
          </p>
        </div>
      </div>
      <div className="text-center md:text-left">
        <div className="space-y-3 md:space-y-5 text-center md:text-left">
          <p className="uppercase text-gray-500 font-medium text-base md:text-lg">
            As seen on NBC show "George to the rescue"
          </p>
          <h2 className="font-semibold text-3xl md:text-5xl max-w-lg md:leading-normal leading-snug">
            Recommended By Everyone
          </h2>
          <p className="font-light text-gray-500">
            "Fun Factory made this episode the best of our 12 years, Barr none
            the absolute best. It is clear to all in this industry that you are
            who you are by what and how you do it, we call you the
            untouchables."{" "}
            <span className="block font-medium mt-2">
              - Andrew Scerbo Executive Producer NBCUniversal / LXTV
            </span>
          </p>
        </div>
        <div
          onClick={openModal}
          className="text-white mt-10 px-6 md:px-8 py-3 md:py-4 bg-ffsgPink rounded-lg inline-block cursor-pointer hover:bg-ffsgLightPink hover:text-ffsgPink transition-all duration-200 hover:ring-2 hover:ring-ffsgPink font-medium text-sm md:text-base"
        >
          <div className="flex items-center space-x-2">
            <HiPlay className="text-2xl" />
            <p>Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialNbc;
