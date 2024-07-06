// pages/contact.js
import TextAnimation from "@/Components/Animation/TextAnimation";
import React from "react";

const Contact = () => {
  const solutions = [
    {
      title: "Technology Solutions",
      items: [
        "Custom software development",
        "System integration",
        "IT consulting services",
        "Cloud computing solutions",
      ],
    },
    {
      title: "Digital Solutions",
      items: [
        "Digital marketing strategies",
        "SEO and SEM services",
        "Social media management",
        "Online reputation management",
      ],
    },
    {
      title: "Development Solutions",
      items: [
        "Full Stack web development",
        "Mobile app development",
        "E-commerce solutions",
        "API development and integration",
      ],
    },
    {
      title: "Studio Solutions",
      items: [
        "UI/UX design",
        "Graphic design",
        "Video production",
        "Animation and motion graphics",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FBFE] py-12 px-8 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-3xl font-extrabold text-[#009975] text-center mb-8">
          <TextAnimation title=" Why Contact Us" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-[#003249] rounded-lg shadow-md p-6">
              <h3 className="text-xl font-exotwo font-semibold text-[#009975] mb-4">
                {solution.title}
              </h3>
              <ul className="list-disc list-inside text-white">
                {solution.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
