import Form from "@/components/Common/Form";
import { CircleCheckBig, SendHorizontal } from "lucide-react";
import React from "react";

const ContactForm = () => {
  return (
    <div className=" md:px-24 px-8 py-16">
      <div className=" w-full flex flex-col md:flex-row gap-12">
        <div className=" md:w-1/2 w-full mx-auto">
          <div className="space-y-5">
            <h1 className=" text-3xl vigaRegular text-[#2C2A77]">
              Let Our Expertise Help Redefine Your Business!
            </h1>
            <div className="flex items-center gap-6">
              <CircleCheckBig size={35} className="text-green-500" />
              <h1 className="text-xl font-exotwo font-semibold">
                Expert teams of dedicated software developers with customized
                strategies
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <CircleCheckBig size={35} className="text-green-500" />
              <h1 className="text-xl font-exotwo font-semibold">
                Our skilled team uses trusted technology for maximum impact
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <CircleCheckBig size={35} className="text-green-500" />
              <h1 className="text-xl font-exotwo font-semibold">
                Implement rigorous protocols on high-security and transparency
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <CircleCheckBig size={35} className="text-green-500" />
              <h1 className="text-xl font-exotwo font-semibold">
                Offer scalable solutions that adapt to your changing
                requirements
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <CircleCheckBig size={35} className="text-green-500" />
              <h1 className="text-xl font-exotwo font-semibold">
                Provide a cost-efficient model that maximizes productivity
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

export default ContactForm;
