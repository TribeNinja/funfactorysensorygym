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
            text="Fun Factory Sensory Gym is a great addition to our school! It is so much more than a gym, it really represents a therapy and sensory space for our little ones. We couldn't more pleased in working with the staff at Fun Factory. They ALL were amazing! They were extremely responsible, professional, attentive and worked to meet our needs. Plus they have a great sense of humor! They delivered and built our gym in incredible time. Looking forward to conduct more businesses with them in the future!"
            img="/testimonial1.jpeg"
            from="Mario Varuzza"
            title="Queens New York public school"
          />
          <TestimonialCard
            text="The entire staff at Fun Factory has been a joy to work with throughout this process. Troy drew the plan, Ebram created it, Rebecca walked us through it, and Riz created amazing marketing. I wish every company did business like this."
            img="/testimonial2.jpeg"
            from="Amy Nolan"
            title="Clinic owner"
          />
          <TestimonialCard
            text="After five years in practice, I decided that I needed to upgrade the look of my office to allow for optimal patient care. Upon researching some possibilities, I came across the Fun Factory Sensory Gym. I immediately called the company to purchase my own gym unit. We scheduled an install date and in three short days, my gym and my vision were complete. My patients and their parents walk in and are amazed at the beautiful and fun set up. I truly feel that my patients are getting the most effective and efficient care because I have the best equipment to address their individual needs. With the Fun Factory Gym equipment, I am able to help these children improve by Leaps and Bounds!"
            img="/testimonial3.jpg"
            from="Jill Kissel"
            title="Clinic Owner"
          />
          <TestimonialCard
            text="We had a great experience working with Fun Factory Sensory Gym to design and build our gym at our new facility. They were very responsive and easy to work with. I love that there is so much included with the design, and they think of every little detail! We are so excited to be able to move into our new space, I know all of the kiddos we work with are going to love the new sensory gym!"
            img="/testimonial4.jpeg"
            from="Lauren Jones"
            title="Clinic owner"
          />
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
