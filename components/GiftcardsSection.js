import Link from "next/link";

const GiftCards = () => {
  return (
    <div
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-14 mt-24 md:mt-40"
    >
      <div className="lg:hidden relative ml-auto">
        <div className="md:h-[26rem] md:w-[22rem] lg:h-[32rem] lg:w-[28rem] bg-ffsgLightPink rounded-lg" />
        <img
          className="md:h-[26rem] md:w-[22rem] lg:h-[32rem] lg:w-[28rem] rounded-lg md:absolute top-8 left-8 object-cover"
          src="/giftcards.png"
        />
      </div>
      <div className="my-auto">
        <div className="space-y-5">
          <p className="uppercase text-gray-500 font-medium text-lg">
            Gift Cards
          </p>
          <h2 className="font-semibold text-3xl md:text-5xl max-w-lg md:leading-normal leading-snug">
            FFSG Gift Cards
          </h2>
          <div>
            <p className="text-gray-500 font-light">
              Looking for the perfect gift for the little ones in your life?
              Look no further than a Fun Factory Sensory Gym Gift Card! Our gift
              cards can be used towards any of our sensory gym classes or
              towards purchasing any of our sensory gym equipment. Give the gift
              of play and learning with a Fun Factory Sensory Gym Gift Card.
              Order now and give the gift of fun and development to the special
              children in your life!
            </p>
          </div>

          <Link href="/giftcards">
            <a className="text-white px-8 py-3 bg-ffsgPink rounded-xl inline-block cursor-pointer hover:bg-ffsgLightPink hover:text-ffsgPink transition-all duration-200 hover:ring-2 hover:ring-ffsgPink font-semibold text-sm md:text-base">
              <p>Purchase</p>
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden lg:block relative ml-auto">
        <div className="md:h-[26rem] md:w-[22rem] lg:h-[32rem] lg:w-[28rem] bg-ffsgLightPink rounded-lg" />
        <img
          className="md:h-[26rem] md:w-[22rem] lg:h-[32rem] lg:w-[28rem] rounded-lg md:absolute top-8 left-8 object-cover"
          src="/giftcards.png"
        />
      </div>
    </div>
  );
};

export default GiftCards;
