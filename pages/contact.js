import axios from "axios";
import Footer from "components/Footer";
import Header from "components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAlert } from "react-alert";

const Contact = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState(null);
  const [selectedSystem, setSelectedSystem] = useState(null);

  const alert = useAlert();

  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !phone ||
      !city ||
      !state ||
      !message ||
      !email
    ) {
      return alert.info("Please fill out all the fields!");
    }
    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      return alert.info("Please enter a valid email address!");
    }
    alert.info("Sending...");
    axios
      .post("/api/success", {
        firstName,
        lastName,
        phone,
        email,
        city,
        state,
        message,
        selectedSystem,
      })
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        if (res?.data.status === "success") {
          router.push("/thankyou");
        } else {
          alert.error("Something went wrong!");
        }
      });

    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setCity("");
    setMessage("");
    setSelectedSystem(null);
  };

  return (
    <div>
      <Head>
        <title>Contact | Fun Factory Sensory Gym</title>
      </Head>

      <Header StartFromTop={true} />

      <div className="mt-44 md:mt-48 max-w-7xl mx-auto">
        <div className="text-center mt-10 mx-6 max-w-3xl md:mx-auto">
          <h1 className="text-3xl font-bold leading-snug uppercase max-w-2xl mx-auto">
            Leave it to the sensory gym professionals.
          </h1>

          <div className="mt-6 text-gray-500">
            <p className="leading-relaxed">
              We’ve done thousands of sensory gym installs across North America,
              but every child is different and has their own needs. What are
              your ideas for improving sensory gym layouts? Tell us about them
              below.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-14 mx-6 md:mx-52">
          <form className="md:grid md:grid-cols-2 md:gap-8 space-y-6 md:space-y-0">
            <div className="space-y-2">
              <p className="font-medium text-gray-500">First Name</p>
              <input
                onChange={(event) => setFirstName(event?.target?.value ?? "")}
                value={firstName}
                className="bg-ffsgLightPink appearance-none border-2 border-ffsgLightPink rounded w-full py-3 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-ffsgPink transition-colors duration-200"
                type="text"
                name="first name"
              />
            </div>

            <div className="space-y-2">
              <p className="font-medium text-gray-500">Last Name</p>
              <input
                onChange={(event) => setLastName(event?.target?.value ?? "")}
                value={lastName}
                className="bg-ffsgLightPink appearance-none border-2 border-ffsgLightPink rounded w-full py-3 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-ffsgPink transition-colors duration-200"
                type="text"
                name="last name"
              />
            </div>

            <div className="space-y-2">
              <p className="font-medium text-gray-500">Email</p>
              <input
                onChange={(event) => setEmail(event?.target?.value ?? "")}
                value={email}
                className="bg-ffsgLightPink appearance-none border-2 border-ffsgLightPink rounded w-full py-3 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-ffsgPink transition-colors duration-200"
                type="email"
                name="email"
              />
            </div>

            <div className="space-y-2">
              <p className="font-medium text-gray-500">Phone</p>
              <input
                onChange={(event) => setPhone(event?.target?.value ?? "")}
                value={phone}
                className="bg-ffsgLightPink appearance-none border-2 border-ffsgLightPink rounded w-full py-3 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-ffsgPink transition-colors duration-200"
                type="number"
                name="phone"
              />
            </div>
            <div className="space-y-2">
              <p className="font-medium text-gray-500">City</p>
              <input
                onChange={(event) => setCity(event?.target?.value ?? "")}
                value={city}
                className="bg-ffsgLightPink appearance-none border-2 border-ffsgLightPink rounded w-full py-3 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-ffsgPink transition-colors duration-200"
                type="text"
                name="city"
              />
            </div>

            <div className="space-y-2">
              <p className="font-medium text-gray-500">State</p>
              <select
                onChange={(event) => setState(event?.target?.value ?? "")}
                className="bg-ffsgLightPink appearance-none border-2 border-ffsgLightPink rounded w-full py-3 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-ffsgPink transition-colors duration-200"
                name="state"
              >
                <option value="DEFAULT"></option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="District Of Columbia">
                  District Of Columbia
                </option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
            </div>

            <div className="space-y-2 col-span-2">
              <p className="font-medium text-gray-500">Message</p>
              <textarea
                onChange={(event) => setMessage(event?.target?.value ?? "")}
                value={message}
                rows="8"
                className="bg-ffsgLightPink appearance-none border-2 border-ffsgLightPink rounded w-full py-3 px-4 text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-ffsgPink transition-colors duration-200 "
                name="message"
                placeholder="How we can help?"
              />
            </div>

            <p className="pt-10 md:pt-0 col-span-2 text-xl font-semibold uppercase text-center">
              Building a sensory space for
            </p>

            <div
              onClick={() => setSelectedSystem("home")}
              className={`${
                selectedSystem === "home"
                  ? "text-white bg-ffsgPink"
                  : "text-ffsgPink bg-white hover:bg-ffsgLightPink cursor-pointer"
              } border-2 border-ffsgPink rounded w-full py-3 px-4  text-center font-semibold  transition-colors duration-200`}
            >
              <p>Home System</p>
            </div>
            <div
              onClick={() => setSelectedSystem("commercial")}
              className={`${
                selectedSystem === "commercial"
                  ? "text-white bg-ffsgPink"
                  : "text-ffsgPink bg-white hover:bg-ffsgLightPink cursor-pointer"
              } border-2 border-ffsgPink rounded w-full py-3 px-4  text-center font-semibold  transition-colors duration-200`}
            >
              <p>Commercial System</p>
            </div>

            <button
              type="submit"
              onClick={submit}
              className="col-span-2 border-2 text-white bg-ffsgPink border-ffsgPink hover:bg-ffsgLightPink hover:text-ffsgPink cursor-pointer rounded w-full py-3 px-4 text-center font-semibold transition-colors duration-200"
            >
              <p>Submit</p>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
