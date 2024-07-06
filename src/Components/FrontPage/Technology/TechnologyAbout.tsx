import Image from "next/image";

const TechnologyAbout = () => {
  return (
    <div className=" md:px-24 py-16 px-8 bg-[#F8FBFE]">
      <div className=" w-full flex flex-col-reverse md:flex-row gap-12">
        <div className=" md:w-1/2 w-full">
          <h1 className=" vigaRegular text-5xl text-[#2C2A77] pb-5">
            Powering innovation and efficiency
          </h1>
          <div>
            <Image
              src={
                "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt=""
              width={500}
              height={500}
              className=" rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className=" md:w-1/2 w-full space-y-6">
          <h1 className=" vigaRegular text-2xl text-[#2C2A77] text-justify">
            Wevloper provides ERP solutions, web applications, web development,
            and e-commerce services to help you enhance your workflow, improve
            your online presence, and accelerate business growth. Wevloper
            harnesses advanced technologies to drive innovation and enhance
            efficiency, empowering businesses to achieve their goals seamlessly.
          </h1>
          <h1 className=" font-exotwo font-medium text-xl text-slate-800">
            End to End technology solutions
          </h1>
          <p className=" text-lg font-exotwo text-slate-800 text-justify">
            Wevloper offers complete end-to-end technological solutions that
            address all aspects of your business demands. From initial
            consulting and system design to implementation and ongoing
            maintenance, our experience guarantees that your technical
            infrastructure works seamlessly and performs optimally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyAbout;
