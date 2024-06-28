const ContactHome = () => {
  return (
    <div className=" py-24">
      <div className="md:h-[37.50rem] h-full w-full relative ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/gradient-smooth-background_23-2148964961.jpg?t=st=1718739633~exp=1718743233~hmac=4cb0c1a87da72e12bc7c4888b228674aecc8fb9ed6a253a4ccff7f8a4fec0471&w=740')",
            height: "100%",
            width: "100%",
          }}
        />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full md:px-24 px-6 ">
          <div className="md:w-1/2 w-full space-y-5">
            <h1 className="text-4xl leading-relaxed font-semibold vigaRegular text-[#2C2A77]">
              Contact us
            </h1>
            <h1 className=" text-xl font-normal font-exotwo text-black">
              Whether you are a large enterprise looking to augment your teams
              with experts resources or an SME looking to scale your business or
              a startup looking to build something. We are your digital growth
              partner.
            </h1>
            <div className=" space-y-1">
              <h1 className=" text-xl font-exotwo">
                <span className=" font-bold">Tel:</span> +1 408 365 4638
              </h1>
              <h1 className=" text-xl font-exotwo">
                <span className=" font-bold"> Support:</span> +1 (408) 512 1812
              </h1>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="max-w-md mx-auto p-6 py-12 bg-white shadow-md">
              {/* <h2 className="text-2xl font-bold mb-5 vigaRegular px-4 text-[#2C2A77]">
                Contact Us
              </h2> */}
              <div className="space-y-4 px-4">
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
                  <button className="bg-[#2a286e] w-full text-white px-4 py-2 rounded-full hover:bg-[#34327a] focus:outline-none">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
