import Image from "next/image";
import React from "react";
import { GrSend } from "react-icons/gr";

const aota = () => {
  return (
    <div className="bg-[#FBF9FC]">
      {/* Hero */}
      <header className="bg-[#F1ECF3]">
        <div className="max-w-7xl mx-auto">
          <div className="justify-between">
            <div></div>
            <div></div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="max-w-3xl mx-auto py-40">
        <div className="p-10 bg-white shadow-xl rounded-2xl">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-snug">
              Please sign up in our form below if you would like to meet Petros
              Chalkitis
            </h2>
            <p className="text-gray-500">
              Fun factory sensory gym is the nation's leading custom sensory gym
              installer. We have installed over 4000 gyms in clinics, private
              homes, hospitals, churches and have helped over 500,000 children
              and families. Therapy Talk is a non profit initiative to help
              educate and guide new therapists, students, and
              struggling parents.
            </p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="py-2 px-1 w-full outline-none text-gray-500"
                />
                <div className="border-b-2" />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="py-2 px-1 w-full outline-none text-gray-500"
                />
                <div className="border-b-2" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <input
                  type="number"
                  placeholder="Phone"
                  className="py-2 px-1 w-full outline-none text-gray-500"
                />
                <div className="border-b-2" />
              </div>
              <div>
                <select
                  name="Select"
                  className="w-full py-2 outline-none text-gray-400"
                >
                  <option value="DEFAULT">Select</option>
                  <option value="Student">Student</option>
                  <option value="Therapist">Therapist</option>
                  <option value="SensoryGym">
                    Interested in installing a sensory gym
                  </option>
                </select>
                <div className="border-b-2" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  placeholder="City"
                  className="py-2 px-1 w-full outline-none text-gray-500"
                />
                <div className="border-b-2" />
              </div>
              <div>
                <select
                  name="state"
                  className="w-full py-2 outline-none text-gray-400"
                >
                  <option value="DEFAULT">State</option>
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
                <div className="border-b-2" />
              </div>
            </div>
            <div>
              <textarea
                rows="5"
                placeholder="Comments"
                className="py-2 px-1 w-full outline-none text-gray-500"
              />
              <div className="border-b-2" />
            </div>

            <div />
            <button
              type="submit"
              className="rounded-full bg-[#691C64] py-3 w-full text-white text-lg font-bold"
            >
              Send <GrSend className="text-white text-xl inline-block ml-1" />
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div></div>
    </div>
  );
};

export default aota;
