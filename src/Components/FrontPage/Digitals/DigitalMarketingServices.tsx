"use client";
import React from "react";
import {
  Monitor,
  Search,
  ShoppingCart,
  TrendingUp,
  BarChart,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const DigitalMarketingServices = () => {
  const services = [
    {
      icon: <Monitor className="text-blue-500" />,
      title: "SEO Optimization",
      about:
        "Improve your website's visibility on search engines with our expert SEO services.",
    },
    {
      icon: <Search className="text-blue-500" />,
      title: "Search Engine Marketing",
      about:
        "Boost your online presence with targeted search engine marketing strategies.",
    },
    {
      icon: <ShoppingCart className="text-blue-500" />,
      title: "E-commerce Marketing",
      about:
        "Drive more sales with our comprehensive e-commerce marketing solutions.",
    },
    {
      icon: <TrendingUp className="text-blue-500" />,
      title: "Content Marketing",
      about:
        "Engage and convert your audience with high-quality, relevant content.",
    },
    {
      icon: <BarChart className="text-blue-500" />,
      title: "Analytics and Reporting",
      about:
        "Gain insights into your marketing performance with our detailed analytics and reporting.",
    },
    {
      icon: <Users className="text-blue-500" />,
      title: "Social Media Management",
      about:
        "Build and manage your brand's presence on social media platforms.",
    },
  ];

  const colors = ["#FFD4EE", "#D3FEE8", "#D9D3FF", "#C5E8FF"];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="md:px-24 px-8 bg-[#F8FBFE] py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-[#2C2A77]">
          Our Digital Marketing Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="max-w-sm rounded overflow-hidden  p-6 "
              style={{ backgroundColor: getRandomColor() }}
              whileHover={{ backgroundColor: "#f0f0f0", scale: 1.05 }}
              transition={{ duration: 1 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <div className="font-bold text-xl mb-2">{service.title}</div>
              <p className="text-gray-700 text-base">{service.about}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingServices;
