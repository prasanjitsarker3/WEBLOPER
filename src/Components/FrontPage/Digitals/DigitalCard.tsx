"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import digi from "../../../../public/image/New Banner/Frame_20-removebg-preview.png";

const DigitalCard = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const items = [
    {
      id: 1,
      title: "Digital Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: digi,
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      img: "https://img.freepik.com/free-photo/full-shot-woman-reading-with-smartphone_23-2149629602.jpg?t=st=1719312921~exp=1719316521~hmac=a6cd86cf55b50adaea975b5d2ad4663529ae5fff2ac5724a38680a286c192018&w=740",
    },
    {
      id: 3,
      title: "Business Analysis",
      description:
        "Nulla facilisi. Mauris tincidunt dui ut ante consequat varius.",
      img: "https://img.freepik.com/premium-photo/financial-analysts-analyze-business-financial-reports-digital-tablet-planning-investment-project-discussion-meeting-corporate-showing-results-their-successful-teamwork_265022-72314.jpg?w=740",
    },
    {
      id: 4,
      title: "Research & Analysis",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      img: "https://img.freepik.com/premium-photo/digital-design-businessman-show-increase-market-graphic_35761-546.jpg?w=740",
    },
  ];

  const handleHover = (id: any) => {
    setHoveredId(id);
  };

  const handleHoverOut = () => {
    setHoveredId(null);
  };

  return (
    <div className="py-24 md:px-24 px-6 bg-[#F8FBFE]">
      <motion.div
        className={`grid gap-4 ${
          hoveredId ? "md:grid-cols-5" : "md:grid-cols-4"
        }`}
        layout
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            className={`relative overflow-hidden bg-slate-700 ${
              hoveredId === item.id ? "col-span-2" : ""
            }`}
            onMouseEnter={() => handleHover(item.id)}
            onMouseLeave={handleHoverOut}
            layout
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[80vh]">
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
              <h2 className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-lg text-white font-bold z-10">
                {item.title}
              </h2>
            </div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
              transition={{ duration: 3 }}
            >
              <div className="text-center text-white">
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DigitalCard;

// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const DigitalCard = () => {
//   const [hoveredId, setHoveredId] = useState(null);

//   const items = [
//     {
//       id: 1,
//       title: "Digital Marketing",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       img: "https://img.freepik.com/free-vector/digital-marketing-infographic_52683-9003.jpg?t=st=1719313186~exp=1719316786~hmac=24f21ce9e58c47416558b3a042ed081137c28459a9997b40a0ee07b755edc933&w=740",
//     },
//     {
//       id: 2,
//       title: "Social Media Marketing",
//       description:
//         "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
//       img: "https://img.freepik.com/free-photo/full-shot-woman-reading-with-smartphone_23-2149629602.jpg?t=st=1719312921~exp=1719316521~hmac=a6cd86cf55b50adaea975b5d2ad4663529ae5fff2ac5724a38680a286c192018&w=740",
//     },
//     {
//       id: 3,
//       title: "Business Analysis",
//       description:
//         "Nulla facilisi. Mauris tincidunt dui ut ante consequat varius.",
//       img: "https://img.freepik.com/premium-photo/financial-analysts-analyze-business-financial-reports-digital-tablet-planning-investment-project-discussion-meeting-corporate-showing-results-their-successful-teamwork_265022-72314.jpg?w=740",
//     },
//     {
//       id: 4,
//       title: "Research & Analysis",
//       description:
//         "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
//       img: "https://img.freepik.com/premium-photo/digital-design-businessman-show-increase-market-graphic_35761-546.jpg?w=740",
//     },
//   ];

//   const handleHover = (id) => {
//     setHoveredId(id);
//   };

//   const handleHoverOut = () => {
//     setHoveredId(null);
//   };

//   return (
//     <div className="py-24 md:px-24 px-6">
//       <div
//         className={`grid gap-4 ${
//           hoveredId ? "md:grid-cols-5" : "md:grid-cols-4"
//         }`}
//       >
//         {items.map((item) => (
//           <motion.div
//             key={item.id}
//             className={`relative overflow-hidden transition-transform duration-300 ${
//               hoveredId === item.id ? "col-span-2" : ""
//             }`}
//             onMouseEnter={() => handleHover(item.id)}
//             onMouseLeave={handleHoverOut}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ duration: 3, delay: 1 }}
//           >
//             <div className="relative h-[80vh]">
//               <Image
//                 src={item.img}
//                 alt={item.title}
//                 layout="fill"
//                 objectFit="cover"
//               />
//               <h2 className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-lg text-white font-bold z-10">
//                 {item.title}
//               </h2>
//             </div>
//             <motion.div
//               className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 z-20"
//               initial={{ opacity: 0 }}
//               animate={hoveredId === item.id ? { opacity: 1 } : { opacity: 0 }}
//             >
//               <div className="text-center text-white">
//                 <p className="text-sm mt-2">{item.description}</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DigitalCard;
