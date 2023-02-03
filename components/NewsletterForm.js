import { useState } from "react";
import axios from "axios";
import { useAlert } from "react-alert";

const NewsletterForm = ({}) => {
  const [email, setEmail] = useState("");
  const alert = useAlert();

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
    // On success return true
    alert.info("Subscribing...");

    axios.post(process.env.ZAPIER_NEWSLETTER, {
      email,
    });

    axios
      .post("/api/subscribe", {
        email,
      })
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        if (res?.data.status === "success") {
          alert.success("Subscribed!");
        } else {
          alert.error("Something went wrong!");
        }
      });

    setEmail("");
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
