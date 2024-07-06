import Form from "@/Components/Common/Form";
import { CircleCheckBig, SendHorizontal } from "lucide-react";
import React from "react";

const DigitalContractForm = () => {
  return (
    <div className=" md:px-24 px-8 py-16">
      <div className=" w-full flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 w-full mx-auto">
          <div className="space-y-3">
            <h1 className="text-3xl vigaRegular text-[#2C2A77]">
              Let Our Expertise Elevate Your Digital Marketing Strategy!
            </h1>
            <div className="flex items-center gap-6">
              <CircleCheckBig size={35} className="text-green-500" />
              <h1 className="text-xl font-exotwo font-semibold">
                Crafting personalized digital marketing campaigns to meet your
                business goals
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <CircleCheckBig size={35} className="text-green-500" />
              <h1 className="text-xl font-exotwo font-semibold">
                Leveraging SEO to boost your online visibility and organic
                traffic
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <CircleCheckBig size={35} className="text-green-500" />
              <h1 className="text-xl font-exotwo font-semibold">
                Utilizing social media platforms to engage and grow your
                audience
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <CircleCheckBig size={35} className="text-green-500" />
              <h1 className="text-xl font-exotwo font-semibold">
                Implementing data-driven strategies to maximize marketing ROI
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <CircleCheckBig size={35} className="text-green-500" />
              <h1 className="text-xl font-exotwo font-semibold">
                Creating high-quality content to attract and convert leads
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <CircleCheckBig size={35} className="text-green-500" />
              <h1 className="text-xl font-exotwo font-semibold">
                Providing comprehensive analytics and reporting to track
                performance
              </h1>
            </div>
          </div>
        </div>
        <div className=" md:w-1/2 w-full mx-auto">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default DigitalContractForm;
