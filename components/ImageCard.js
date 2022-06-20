import { FiArrowUpRight } from "react-icons/fi";
import { RiImage2Fill } from "react-icons/ri";

const ImageCard = () => {
  return (
    <div className="mr-6 pb-6">
      <div className="h-52 lg:h-64 bg-ffsgLightPink ">
        <RiImage2Fill className="text-ffsgPink h-full mx-auto" size="4em" />
        <img />
      </div>
      <div className="p-4 flex justify-between items-center bg-white">
        <div className="space-y-2">
          <p className="text-sm text-ffsgPink">Lorem</p>
          <p className="text-lg font-semibold">Lorem ipsum</p>
        </div>
        <div className="p-3 bg-black text-white">
          <FiArrowUpRight size="1.5em" />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
