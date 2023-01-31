import Image from "next/image";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { urlFor } from "sanity";
import { BiMailSend } from "react-icons/bi";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";

const GiftcardDetails = ({ giftcards }) => {
  const [selectedCard, setSelectedCard] = useState(giftcards[0]);
  const [loadPaypal, setLoadPaypal] = useState(false);
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const alert = useAlert();

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const [isPaid, setIsPaid] = useState(false);

  const generateVoucherCode = () => {
    const newVoucherCode = uuidv4();
    let formattedCode = newVoucherCode.replace("-", "").toUpperCase();
    return (formattedCode =
      formattedCode.slice(0, 3) +
      "-" +
      formattedCode.slice(3, 6) +
      "-" +
      formattedCode.slice(6, 9));
  };

  const loadPaypalScript = async (e) => {
    e.preventDefault();
    setLoadPaypal(true);
    paypalDispatch({
      type: "resetOptions",
      value: {
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: "USD",
      },
    });
    paypalDispatch({ type: "setLoadingStatus", value: "pending" });
  };

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: selectedCard.price * 1 },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }
  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        const code = generateVoucherCode();
        setLoading(true);
        const { data } = await axios.post("/api/orders/giftcard", {
          orderItem: {
            _type: "reference",
            _ref: selectedCard._id,
          },
          giftcardValue: selectedCard.price * 1,
          deliveryDetails: {
            recipientName,
            recipientEmail,
            senderName,
            senderEmail,
            message,
          },
          isPaid: true,
          code,
          paidAt: details.update_time,
          paymentResult: {
            id: details.id,
            status: details.status,
            email_address: details.payer.email_address,
          },
        });

        const { successResult } = await axios.post("/api/orders/success", {
          senderEmail,
          recipientEmail,
          orderId: data.id,
          date: details.update_time,
          title: selectedCard.title,
          price: selectedCard.price,
          image: urlFor(selectedCard.image).url(),
        });

        const { codeResult } = await axios.post("/api/orders/giftcode", {
          recipientEmail,
          senderName,
          recipientName,
          message,
          code,
          price: selectedCard.price,
          image: urlFor(selectedCard.image).url(),
        });

        setLoading(false);
        setIsPaid(true);
        setSenderEmail("");
        setSenderName("");
        setRecipientEmail("");
        setRecipientName("");
        setMessage("");
      } catch (err) {
        setLoading(false);
        alert.error("Something went wrong!");
      }
    });
  }
  function onError(err) {
    alert.error("Something went wrong!");
  }

  useEffect(() => {
    paypalDispatch({
      type: "resetOptions",
      value: {
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: "USD",
      },
    });
  }, [selectedCard]);

  return (
    <div className="mt-44 lg:mt-48 max-w-7xl mx-auto px-6 md:px-14">
      <div className="grid md:grid-cols-8 md:gap-24 ">
        <div className="col-span-4 ">
          <div className="bg-white sticky top-48 md:pt-10">
            <Image
              height="360"
              width="670"
              objectFit="cover"
              src={urlFor(selectedCard.image).url()}
              alt={selectedCard.title}
            />
          </div>
          <div></div>
        </div>
        <form onSubmit={loadPaypalScript} className="col-span-4">
          <div className="space-y-4 bg-white pt-8 lg:pt-10 pb-2">
            <p className="text-3xl md:text-5xl text-gray-800">
              {selectedCard.title}
            </p>
            <p>
              Our gift cards can be used towards any of our sensory gym classes,
              including play-based learning, gross motor skill development, and
              interactive play. They can also be used to purchase any of our
              sensory gym equipment.
            </p>
          </div>

          <div className="my-6 space-y-4">
            <p className="font-semibold text-xl">Choose an amount.</p>
            <div className="grid grid-cols-2 gap-5">
              {giftcards.map((giftcard) => (
                <p
                  key={giftcard._id}
                  onClick={() => {
                    setSelectedCard(giftcard);
                  }}
                  className={`${
                    giftcard.slug?.current == selectedCard.slug?.current
                      ? "ring-2 text-ffsgPink ring-ffsgPink"
                      : "ring-1 ring-gray-300 hover:ring-gray-500 hover:ring-2"
                  } font-semibold text-xl text-center rounded-xl py-6
                   cursor-pointer transition-all duration-150 ease-in-out`}
                >
                  ${giftcard.price}
                </p>
              ))}
            </div>
          </div>
          <hr />
          <div className="my-8 space-y-5">
            <p className="font-semibold text-xl">
              Enter your delivery details.
            </p>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-900">
                Who’s it for?
              </label>
              <div className="relative rounded-xl">
                <input
                  onChange={(event) =>
                    setRecipientName(event?.target?.value ?? "")
                  }
                  value={recipientName}
                  required
                  name="RecipientName"
                  type="text"
                  className="form-input py-4 px-4 block w-full leading-5 rounded-xl transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-ffsgPink focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Recipient Name"
                />
              </div>
              <div className="relative rounded-xl">
                <input
                  onChange={(event) =>
                    setRecipientEmail(event?.target?.value ?? "")
                  }
                  value={recipientEmail}
                  required
                  name="RecipientEmailAddress"
                  type="email"
                  className="form-input py-4 px-4 block w-full leading-5 rounded-xl transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-ffsgPink focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Recipient Email Address"
                />
              </div>
              <label className="block text-sm font-medium text-gray-900">
                Who’s it from?
              </label>
              <div className="relative rounded-xl">
                <input
                  onChange={(event) =>
                    setSenderName(event?.target?.value ?? "")
                  }
                  value={senderName}
                  required
                  name="SenderName"
                  type="text"
                  className="form-input py-4 px-4 block w-full leading-5 rounded-xl transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-ffsgPink focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Sender Name"
                />
              </div>
              <div className="relative rounded-xl">
                <input
                  onChange={(event) =>
                    setSenderEmail(event?.target?.value ?? "")
                  }
                  value={senderEmail}
                  required
                  name="SenderEmailAddress"
                  type="email"
                  className="form-input py-4 px-4 block w-full leading-5 rounded-xl transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-ffsgPink focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Sender Email Address"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="my-8 space-y-5">
            <p className="font-semibold text-lg">
              Want to add a personalized message?
            </p>
            <div className="space-y-4">
              <div className="relative rounded-xl">
                <input
                  onChange={(event) => setMessage(event?.target?.value ?? "")}
                  value={message}
                  type="text"
                  className="form-input py-4 px-4 block w-full leading-5 rounded-xl transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-ffsgPink focus:z-10 sm:text-sm sm:leading-5"
                  placeholder="Your Message (Optional)"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 md:p-10">
            <p className="text-4xl md:text-5xl font-medium text-gray-800 pb-4 md:pb-6">
              ${selectedCard.price}
            </p>
            <hr />
            <p className="text-gray-500 text-sm pt-4 md:pt-6 flex items-center">
              <BiMailSend className="text-2xl mr-2" />
              Usually arrives instantly
            </p>

            {(isPending || loading) && (
              <div className="flex justify-center my-20">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-200 fill-ffsgPink"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}

            {!loadPaypal ? (
              <button
                type="submit"
                className="bg-ffsgPink w-full py-3 text-white font-semibold rounded-xl text-center mt-6 md:mt-8 cursor-pointer"
              >
                Buy Now
              </button>
            ) : isPaid ? (
              <div className="pt-4 lg:pt-8 text-center">
                <FiCheckCircle className="text-4xl md:text-5xl text-green-500 mx-auto my-4" />
                <p className="text-gray-500">
                  Congratulations on your Fun Factory Sensory Gym Gift Card
                  purchase! A digital copy of the gift card has been sent to the
                  recipient email provided during checkout. If you have any
                  questions or issues, please do not hesitate to contact us.
                  <br /> <br />
                  Thank you for choosing Fun Factory Sensory Gym!
                </p>
              </div>
            ) : (
              <div className="mt-8 sticky">
                <PayPalButtons
                  createOrder={createOrder}
                  onApprove={onApprove}
                  onError={onError}
                ></PayPalButtons>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Need some help? Call +1 (833) 462-0769.
          </p>
        </form>
      </div>
    </div>
  );
};

export default GiftcardDetails;
