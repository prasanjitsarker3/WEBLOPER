"use client";
import { FlagTriangleLeft, Home, Subscript } from "lucide-react";
import { useState } from "react";

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(1);
  console.log("Active:", activeStep);

  return (
    <div className="flex flex-col items-center md:px-24 py-8">
      <div className="relative flex justify-between items-center w-full mb-8">
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-0.5 z-0">
          {/* Segment 1 */}
          <div
            className={`absolute left-0 h-full w-1/3 border-2 ${
              activeStep === 2 || activeStep === 3
                ? "border-blue-500"
                : "border-gray-600"
            }`}
          ></div>

          {/* Segment 2 */}
          <div
            className={`absolute left-1/3 h-full w-1/6 border-2 ${
              activeStep === 2 || activeStep === 3
                ? "border-blue-500"
                : "border-gray-600"
            }`}
          ></div>
          <div
            className={`absolute right-1/3 h-full w-1/6 border-2 ${
              activeStep === 3 ? "border-blue-500" : "border-gray-600"
            }`}
          ></div>
          {/* Segment 3 */}
          <div
            className={`absolute right-0 h-full w-1/3 border-2 ${
              activeStep === 3 ? "border-blue-500" : "border-gray-600"
            }`}
          ></div>
        </div>

        {/* Buttons */}
        <button
          className={`relative z-10 w-10 h-10 flex items-center justify-center rounded-full ${
            activeStep === 1 || activeStep === 2 || activeStep === 3
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveStep(1)}
        >
          <Home size={20} className="" />
        </button>

        <button
          className={`relative z-10 w-10 h-10 flex items-center justify-center rounded-full ${
            activeStep >= 2
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveStep(2)}
        >
          <FlagTriangleLeft size={20} />
        </button>

        <button
          className={`relative z-10 w-10 h-10 flex items-center justify-center rounded-full ${
            activeStep >= 3
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveStep(3)}
        >
          <Subscript size={20} />
        </button>
      </div>

      <div className=" w-full grid md:grid-cols-3 gap-8 pb-12">
        <div
          className={`bg-white p-8 space-y-5   h-60 ${
            activeStep === 1
              ? "border-r-4 border-blue-500"
              : " bg-black opacity-10"
          }  rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]`}
        >
          <h1 className="text-3xl poppins-semibold text-gray-400">01</h1>
          <h2 className="uppercase primaryColor text-xl">Progressiveness</h2>
          <h2 className="text-md poppins-light">
            We value advancement which leads us to craft contemporary and
            sustainable solutions.
          </h2>
        </div>
        <div
          className={`bg-white p-8 space-y-5   h-60 ${
            activeStep === 2
              ? "border-r-4 border-blue-500"
              : "bg-black opacity-10"
          }  rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]`}
        >
          <h1 className="text-3xl poppins-semibold text-gray-400">02</h1>
          <h2 className="uppercase primaryColor text-xl">Inclusiveness</h2>
          <h2 className="text-md poppins-light">
            We value diversity to foster equality and bring positive change.
          </h2>
        </div>

        <div
          className={`bg-white p-8 space-y-5   h-60 ${
            activeStep === 3
              ? "border-r-4 border-blue-500"
              : "  bg-black opacity-10"
          }  rounded-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]`}
        >
          <h1 className="text-3xl poppins-semibold text-gray-400">03</h1>
          <h2 className="uppercase primaryColor text-xl">Reliability</h2>
          <h2 className="text-md poppins-light">
            We work with the utmost integrity to keep our commitment preserve
            confidentiality.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
