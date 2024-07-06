import { SendHorizontal } from "lucide-react";
import React from "react";

const Form = () => {
  return (
    <div>
      <div className="space-y-3 px-4 mx-auto p-6 py-10 bg-white shadow-md rounded">
        <h1 className=" vigaRegular text-3xl text-[#2a286e]">
          Your Contact information
        </h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Name"
            className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 py-2"
          />
        </div>
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 py-2"
          />
        </div>
        <div className="relative">
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 py-2"
          />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Organization"
            className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 py-2"
          />
        </div>
        <div className="relative">
          <textarea
            rows={3}
            placeholder="Tell us about your project?"
            className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 py-2"
          ></textarea>
        </div>

        <div className="text-center w-full">
          <button className="bg-[#2a286e] flex items-center gap-5 justify-center w-full text-white px-4 py-2 rounded-full hover:bg-[#34327a] focus:outline-none">
            Send Message
            <SendHorizontal size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
