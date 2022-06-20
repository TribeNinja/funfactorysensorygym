import { useState } from "react";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  return (
    <div>
      <div className="mb-3 space-y-4">
        <input
          onChange={(event) => setEmail(event?.target?.value ?? "")}
          name="email"
          type="email"
          placeholder="Email"
          className="px-6 py-3 md:px-8 md:py-4 w-full md:w-96 md:rounded-l-lg text-sm md:text-base outline-none"
        />

        <button
          onClick={handleFormSubmit}
          className="text-white px-6 py-3 md:px-8 md:py-4 bg-ffsgPink rounded-md md:rounded-none md:rounded-r-lg inline-block font-medium text-sm md:text-base"
        >
          <p>Subscribe</p>
        </button>
      </div>
      {error && (
        <div className="font-light text-sm md:text-base max-w-xl text-white">
          {error}
        </div>
      )}
      {status === "sending" && (
        <div className="font-light text-sm md:text-base max-w-xl text-white">
          sending...
        </div>
      )}
      {status === "error" && (
        <div className="font-light text-sm md:text-base max-w-xl text-white">
          {message}
        </div>
      )}
      {status === "success" && (
        <div className="font-light text-sm md:text-base max-w-xl text-white">
          Subscribed !
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;
