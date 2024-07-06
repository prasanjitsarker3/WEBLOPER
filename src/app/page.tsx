import Banner from "@/Components/FrontPage/Home/Banner";
import CompanyData from "@/Components/FrontPage/Home/CompanyData";
import ContactReview from "@/Components/FrontPage/Home/ContactReview";
import HomeAbout from "@/Components/FrontPage/Home/HomeAbout";
import OurClient from "@/Components/FrontPage/Home/OurClient";
import ParallaxData from "@/Components/FrontPage/Home/ParallaxData";
import Scroll from "@/Components/FrontPage/Home/Scroll";
import ServiceGallery from "@/Components/FrontPage/Home/ServiceGallery";
import ServiceStudio from "@/Components/FrontPage/Home/ServiceStudio";
import ServiceWebDevelopment from "@/Components/FrontPage/Home/ServiceWebDevelopment";
import Stepper from "@/Components/FrontPage/Home/Stepper";
import TeamMentor from "@/Components/FrontPage/Home/TeamMentor";
import Testimonial from "@/Components/FrontPage/Home/Testimonial";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      {/* <HomeAbout /> */}
      <Scroll />
      <ServiceWebDevelopment />
      <ServiceStudio />
      <ServiceGallery />
      <OurClient />
      {/* <ParallaxData /> */}
      <CompanyData />
      <TeamMentor />
      {/* <Testimonial Cons /> */}
      {/* <Stepper /> */}
      <ContactReview />
    </div>
  );
};

export default HomePage;
