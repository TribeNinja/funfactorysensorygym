import NewsletterForm from "./NewsletterForm";

const Cta = () => {
  return (
    <div className="p-6 md:p-14 mt-16 md:mt-32">
      {/* <img src="/cta bg.jpg" className="rounded-lg" /> */}
      <div
        className="bg-gray-400 bg-blend-multiply rounded-lg p-6 md:p-14 space-y-6 bg-left bg-cover"
        style={{ backgroundImage: 'url("/cta%20bg.jpg")' }}
      >
        <h2 className="font-semibold text-3xl md:text-5xl md:max-w-xl md:leading-normal leading-snug text-white">
          Subscribe to our newsletter!
        </h2>
        {/* <p className="font-light text-sm md:text-base max-w-xl text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          consequat vitae augue eget aliquet. Donec a dui commodo.
        </p> */}
        <NewsletterForm />
      </div>
    </div>
  );
};

export default Cta;
