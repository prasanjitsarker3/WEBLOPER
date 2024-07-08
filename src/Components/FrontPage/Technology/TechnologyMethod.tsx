"use client";
import React from "react";
import {
  Lightbulb,
  Users,
  CheckCircle,
  Rocket,
  ListChecks,
  RefreshCcw,
} from "lucide-react";
import { motion } from "framer-motion";

const TechnologyMethod = () => {
  const agileSteps = [
    {
      icon: <Lightbulb />,
      title: "Planning",
      about: "Project initiation and envisioning the product.",
    },
    {
      icon: <ListChecks />,
      title: "Defining",
      about: "Requirements gathering and initial planning.",
    },
    {
      icon: <Users />,
      title: "Design",
      about: "Development and iterative cycles of building and testing.",
    },
    {
      icon: <CheckCircle />,
      title: "Development",
      about: "Final product release and delivery.",
    },
    {
      icon: <RefreshCcw />,
      title: "Testing",
      about: "Ongoing maintenance and support.",
    },
    {
      icon: <Rocket />,
      title: "Deployment",
      about: "End-of-life phase for the product.",
    },
  ];
  const colors = ["#FFD4EE", "#D3FEE8", "#D9D3FF", "#C5E8FF"];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <div className="min-h-screen md:px-24 px-8 py-16 bg-[#F8FBFE]">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-slate-800 text-center mb-10">
          Wevloper uses Agile methodology to deliver client-focused solutions
          through ongoing engagement and iterative development. Cross-functional
          teams ensure efficient problem-solving and project delivery, supported
          by regular reviews and retrospectives for continuous improvement.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agileSteps.map((step, index) => (
            <motion.div
              key={index}
              // style={{ backgroundColor: getRandomColor() }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#003249]"
            >
              <div className="max-w-sm rounded overflow-hidden p-6 ">
                <div className="text-6xl text-[#009975] mb-4">{step.icon}</div>
                <div className="font-bold  text-white text-xl mb-2">
                  {step.title}
                </div>
                <p className="text-white text-base">{step.about}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyMethod;
