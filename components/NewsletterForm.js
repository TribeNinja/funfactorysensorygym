import { useEffect, useState } from "react";
import { useAlert } from "react-alert";

const NewsletterForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const alert = useAlert();

  useEffect(() => {
    // status === "sending" && alert.info("Sending...");

    if (status === "error") {
      alert.error(message);
      setEmail("");
    }

    if (status === "success") {
      alert.success(message);
      setEmail("");
    }
  }, [status, message]);

  const handleFormSubmit = () => {
    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      return alert.info("Please enter a valid email address!");
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
          onKeyPress={(e) => e.key === "Enter" && handleFormSubmit()}
          value={email}
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
    </div>
  );
};

export default NewsletterForm;
