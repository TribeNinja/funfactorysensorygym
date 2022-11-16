import ProcessCard from "./ProcessCard";
import { BiPalette } from "react-icons/bi";
import { FaHardHat } from "react-icons/fa";
import { HiOutlineTruck } from "react-icons/hi";
import { MdOutlineConstruction } from "react-icons/md";

const ProcessSection = () => {
  return (
    <div>
      <div id="process" className="text-center mt-20 md:mt-36 px-6 md:px-0">
        <p className="uppercase text-gray-500 font-medium text-lg">
          Our Process
        </p>
        <h2 className="font-semibold text-3xl md:text-5xl max-w-lg md:leading-normal leading-snug mx-auto">
          There are 4 easy steps to our process
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 md:p-16">
        <ProcessCard
          icon={<BiPalette size="1.5em" />}
          title="Design"
          description="Expect a prompt response when you contact us at Fun Factory Sensory Gym! As soon as you contact us, our design consultants will be at your service to answer all your questions and concerns. They will run through your vision and carefully comprehend what you are looking to achieve in your sensory gym. A print, sketch, picture, or something along these lines will be requested so that the design consultants can do a comprehensive layout of your space. The design will be drawn up to maximize room functionality and flow, all the while tailoring it to incorporate your needs in it. If you would like to make any changes to the proposed design, we offer an unlimited amount of changes until you are happy with the design and materials being installed! We want to make sure your sensory gym is everything you’ve dreamed of."
        />
        <ProcessCard
          icon={<FaHardHat size="1.5em" />}
          title="Manufacture"
          description="Once we have agreed on the design and layout, we will send over a contract for you to sign. The contract simply states that both parties have agreed upon the layout and cost. After the contract is signed, we will begin milling your sensory gym. All of the preparatory work is done by our master carpenters, who specialize specifically in sensory gym manufacture and installation. In most cases, the average time from concept to completion is between three days to one week."
        />
        <ProcessCard
          icon={<HiOutlineTruck size="1.5em" />}
          title="Delivery"
          description="We at Fun Factory deliver your sensory gym to you by ourselves. Nothing shows up in a box, so there is no need to rummage through any instruction manuals. Depending on your distance from our manufacturing facilities, the trip to you will take no more than a day. Everything is wrapped for quality assurance purposes. If for some unfortunate reason, something is damaged, Fun Factory will replace it at no charge to the customer."
        />
        <ProcessCard
          icon={<MdOutlineConstruction size="1.5em" />}
          title="Installation"
          description="Everything is custom installed for your convenience and safety. Our installers are fast, friendly, and very detail-oriented. We treat our customers like family and hope to maintain that friendship even after the installation. If something wasn’t accounted for in the design layout, each and every Fun Factory vehicle is equipped to be able to build and mill an entire clinic from scratch right at your location. In addition to a fully equipped vehicle, the crew leader and his team are the most effective, efficient, and friendly carpenters you will ever have to work with. Once the installation is done, your home will be safely equipped with the sensory gym that you wanted, ready to break into, play, and have fun!"
        />
      </div>
    </div>
  );
};

export default ProcessSection;
