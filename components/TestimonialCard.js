import Image from "next/image";
import { useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const TestimonialCard = ({ text, from, title, img }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="md:mx-3 pb-6 relative">
      <div className="z-10 absolute top-48 lg:top-56 left-6 md:left-10 text-white p-3 md:text-3xl lg:text-4xl bg-ffsgPink inline-block rounded-full shadow-lg shadow-pink-300">
        <RiDoubleQuotesL />
      </div>
      <div className="relative h-52 lg:h-64 bg-ffsgLightPink object-cover">
        <Image src={img} objectFit="cover" layout="fill" alt={from} />
      </div>
      <div className="text-sm md:text-base text-gray-500 bg-gray-50 p-6 pt-12">
        <p className={readMore ? "line-clamp-none" : "line-clamp-4"}>{text}</p>
        <span
          className="text-ffsgPink underline hover:text-ffsgPurple cursor-pointer text-sm md:text-base"
          onClick={() => setReadMore(!readMore)}
        >
          {!readMore ? "Read more..." : "Read less..."}
        </span>
        <p className="mt-4">
          <span className="text-black font-semibold text-base lg:text-lg">
            {from}
          </span>{" "}
          <br />
          {title}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
