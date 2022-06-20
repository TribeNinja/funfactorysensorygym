import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import { isDesktop, isMobileOnly, isTablet } from "react-device-detect";

const TestimonialSection = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: (isMobileOnly && 1) || (isTablet && 2) || (isDesktop && 3),
    slidesToScroll: 1,
  };
  return (
    <div className="mt-14 md:mt-36 px-6 md:px-14">
      <div className="text-center space-y-4">
        <h3 className="uppercase text-gray-500 font-medium text-lg">
          Testimonials
        </h3>
        <h2 className="font-semibold text-3xl md:text-5xl max-w-lg md:leading-normal leading-snug mx-auto">
          What Our Latest Client Said About Us
        </h2>
      </div>
      {/* <div className="grid grid-cols-3 md:gap-8 lg:gap-10 mt-12">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div> */}
      <div className="mt-8">
        <Slider {...settings}>
          <TestimonialCard
            text="After five years in practice, I decided that I needed to upgrade the look of my office to allow for optimal patient care. Upon researching some possibilities, I came across the Fun Factory Sensory Gym. I immediately called the company to purchase my own gym unit. We scheduled an install date and in three short days, my gym and my vision were complete. My patients and their parents walk in and are amazed at the beautiful and fun set up. I truly feel that my patients are getting the most effective and efficient care because I have the best equipment to address their individual needs. With the Fun Factory Gym equipment, I am able to help these children improve by Leaps and Bounds!"
            from="Jill Kissel"
            title="Clinic Owner"
          />
          <TestimonialCard
            text="Our Fun Factory Sensory Gym has been life changing for our family! The entire experience of having the FFSG team in our home was so enjoyable. The crew’s heart and soul is behind the work they’re doing. From the first phone call, FFSG was committed to helping our family and our 3 small children with their various special needs. We have already experienced the calming effects of the net swing and the multiple ways the entire gym provides sensory input and regulation for our intense sensory seekers. What a great tool for our family and more than worth the investment!"
            from="Heather Helms"
            title="Parent"
          />
          <TestimonialCard
            text="We are so appreciative to the staff at Fun Factory. The guys that installed our gym were absolutely exceptional. Not only did they do an amazing custom job that fit perfectly in our home but their warmth, sensitivity and attention they gave to our children who were watching made my kids feel like they were a part of the process. We thank you from the bottom of our hearts!"
            from="The Gobers"
            title="Family"
          />
          <TestimonialCard
            text="The Kaufman Children’s Center was proud to announce an exciting upgrade made here at the KCC. Over a long weekend in late January 2013, we completed a huge remodel to our sensory gym."
            from="The Kaufman"
            title="Gym"
          />
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
