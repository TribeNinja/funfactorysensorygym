import { useState } from "react";

const ProcessCard = ({ icon, title, description }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="space-y-4 p-6 bg-ffsgLightPink rounded-lg">
      <div className="text-white p-3 bg-ffsgPink inline-block rounded-full">
        {icon}
      </div>
      <h4 className="font-semibold text-xl">{title}</h4>
      <p
        className={
          readMore
            ? "line-clamp-none text-sm md:text-base font-light text-gray-500"
            : "line-clamp-4 text-sm md:text-base font-light text-gray-500"
        }
      >
        {description}
      </p>
      <span
        className="text-ffsgPink underline hover:text-ffsgPurple cursor-pointer text-sm md:text-base"
        onClick={() => setReadMore(!readMore)}
      >
        {!readMore ? "Read more..." : "Read less..."}
      </span>
    </div>
  );
};

export default ProcessCard;
