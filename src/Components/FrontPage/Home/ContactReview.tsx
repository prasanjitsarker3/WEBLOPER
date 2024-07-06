"use client";
import { MessageCircleHeart, SendHorizontal } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactReview = () => {
  const clients = [
    {
      name: "Rahil Sachak Patwa",
      title: "Founder, TutorChase",
      feedback:
        "The client is thrilled with the new site and excited to deploy it soon. Halo Lab manages tasks well and communicates regularly to ensure both sides are always on the same page and that the client's needs are addressed promptly.",
      imageUrl:
        "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?ga=GA1.1.2060036261.1681297115&semt=ais_user",
    },
    {
      name: "Jane Doe",
      title: "CEO, TechSolutions",
      feedback:
        "The team at Halo Lab exceeded our expectations with their professionalism and attention to detail. Our new website has received fantastic feedback from our clients.",
      imageUrl:
        "https://img.freepik.com/free-photo/portrait-happy-businesswoman-standing-arms-crossed_171337-1072.jpg",
    },
    {
      name: "John Smith",
      title: "Marketing Director, CreativeCorp",
      feedback:
        "Working with Halo Lab was a pleasure. They delivered high-quality work on time and communicated effectively throughout the project.",
      imageUrl:
        "https://img.freepik.com/free-photo/portrait-smiling-young-man-indoors_171337-1243.jpg",
    },
    {
      name: "Alice Johnson",
      title: "Founder, StartUpXYZ",
      feedback:
        "Halo Lab's expertise and dedication were evident in every aspect of our collaboration. We're extremely happy with the results.",
      imageUrl:
        "https://img.freepik.com/free-photo/portrait-young-woman-smiling-happy-confidently_171337-1625.jpg",
    },
    {
      name: "Michael Brown",
      title: "CTO, InnovativeTech",
      feedback:
        "From start to finish, Halo Lab demonstrated their commitment to our project's success. Their technical skills and creativity are top-notch.",
      imageUrl:
        "https://img.freepik.com/free-photo/portrait-cheerful-man_171337-746.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);
  return (
    <div className=" py-20 md:px-24 px-8">
      <div className="w-full flex flex-col md:flex-row gap-12 bg-slate-100 py-12">
        <div className=" md:w-1/2 w-full mx-auto">
          <div className="max-w-md mx-auto p-6 py-10 space-y-8">
            <div className=" flex items-center gap-8">
              <MessageCircleHeart size={35} className=" text-red-500" />
              <h1 className=" vigaRegular text-3xl text-[#2a286e]">
                Our client say
              </h1>
            </div>
            <div className=" border-b border-slate-500"></div>
            <div className=" w-full h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full"
                >
                  <h1 className="text-lg h-44 text-slate-800 font-medium text-justify">
                    {clients[index].feedback}
                  </h1>
                  <div className="flex items-center gap-8 mt-4">
                    <div>
                      <Image
                        src={clients[index].imageUrl}
                        alt={clients[index].name}
                        width={100}
                        height={100}
                        className="rounded-full h-16 w-16"
                      />
                    </div>
                    <div className="text-lg font-medium font-exotwo text-[#2a286e]">
                      <h1>{clients[index].name}</h1>
                      <h1>{clients[index].title}</h1>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className=" md:w-1/2 w-full mx-auto">
          <div className="space-y-3 px-4 max-w-md mx-auto p-6 py-10 bg-white shadow-md rounded">
            <h1 className=" vigaRegular text-3xl text-[#2a286e]">
              Ready to discuss ?
            </h1>
            {/* <div>
              <h1 className=" vigaRegular text-3xl text-[#2a286e]">
                Ready to discuss
              </h1>
              <h1 className=" vigaRegular text-3xl text-[#2a286e]">
                your project with us?
              </h1>
            </div> */}
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
              <input
                placeholder="Tell us about your project?"
                className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 py-2"
              ></input>
            </div>

            <div className="text-center max-w-sm">
              <button className="bg-[#2a286e] flex items-center gap-5 justify-center w-full text-white px-4 py-2 rounded-full hover:bg-[#34327a] focus:outline-none">
                Send Message
                <SendHorizontal size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactReview;
