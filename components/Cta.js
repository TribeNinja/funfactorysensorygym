// import MailchimpSubscribe from "react-mailchimp-subscribe";
// import NewsletterForm from "./NewsletterForm";

import axios from "axios";
import { useState } from "react";
import { useAlert } from "react-alert";

const Cta = () => {
  // const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
  const [email, setEmail] = useState(null);

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

    const url = "https://api.cc.email/v3/contacts/sign_up_form";
    const body = {
      email_address: email,
      list_memberships: ["211717f2-2941-11ed-9bd5-fa163e5bf31a"],
    };

    axios
      .post(url, body, {
        headers: {
          Authorization:
            "Bearer " + process.env.NEXT_PUBLIC_CONSTANT_CONTACT_ACCESS_TOKEN,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        if (res?.status == 201 || res?.status == 200) {
          alert.success("Subscribed!");
        } else {
          alert.error("Something went wrong!");
        }
        setEmail("");
      });
  };

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
        {/* <MailchimpSubscribe
          url={url}
          render={(props) => {
            const { subscribe, status, message } = props || {};
            return (
              <NewsletterForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            );
          }}
        /> */}
        <input
          onChange={(event) => setEmail(event?.target?.value ?? "")}
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

export default Cta;
