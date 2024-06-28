"use client";

import Image from "next/image";
import { Tabs } from "./tabs";

const TechnologyTabs = () => {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full flex flex-col md:flex-row h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className=" space-y-4 md:w-1/2">
            <h1 className=" vigaRegular text-2xl font-semibold">
              Software & Platform Engineering
            </h1>
            <h1 className=" vigaRegular text-xl font-semibold">
              Innovating with cutting-edge technology solutions
            </h1>
            <h1 className=" font-exotwo text-lg text-slate-800">
              We design, architect, and build robust enterprise-scale Software
              Systems to accelerate your Digital Transformation journey. By
              leveraging cloud-native architectures, a DevOps mindset, and
              cutting-edge technology stacks, we engineer scalable, secure, and
              reliable software platforms.
            </h1>
          </div>
          <div className=" md:w-1/2 w-full">
            <DummyContent />
          </div>
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full flex flex-col md:flex-row h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className=" space-y-4 md:w-1/2 w-full">
            <h1 className=" vigaRegular text-2xl font-semibold">
              Software & Platform Engineering
            </h1>
            <h1 className=" vigaRegular text-xl font-semibold">
              Innovating with cutting-edge technology solutions
            </h1>
            <h1 className=" font-exotwo text-lg text-slate-800">
              We design, architect, and build robust enterprise-scale Software
              Systems to accelerate your Digital Transformation journey. By
              leveraging cloud-native architectures, a DevOps mindset, and
              cutting-edge technology stacks, we engineer scalable, secure, and
              reliable software platforms.
            </h1>
          </div>
          <div className=" md:w-1/2">
            <DummyContent />
          </div>
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full flex flex-col md:flex-row h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className=" space-y-4 md:w-1/2 w-full">
            <h1 className=" vigaRegular text-2xl font-semibold">
              Software & Platform Engineering
            </h1>
            <h1 className=" vigaRegular text-xl font-semibold">
              Innovating with cutting-edge technology solutions
            </h1>
            <h1 className=" font-exotwo text-lg text-slate-800">
              We design, architect, and build robust enterprise-scale Software
              Systems to accelerate your Digital Transformation journey. By
              leveraging cloud-native architectures, a DevOps mindset, and
              cutting-edge technology stacks, we engineer scalable, secure, and
              reliable software platforms.
            </h1>
          </div>
          <div className=" md:w-1/2 w-full ">
            <DummyContent />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[30rem] max-w-5xl mx-auto w-full  items-start justify-start my-4">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TechnologyTabs;

const DummyContent = () => {
  return (
    <div className="h-[400px] overflow-hidden">
      <Image
        src="https://img.freepik.com/free-vector/circuit-board-tree-symbol_98292-3922.jpg?t=st=1719171702~exp=1719175302~hmac=9fcbfeac2e23b9108a689954dd043c92f58936a9443652795a283d9224411127&w=740"
        alt="dummy image"
        width="1000"
        height="1000"
        className="  mx-auto "
      />
    </div>
  );
};
