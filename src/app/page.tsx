import Banner from "@/components/FrontPage/Home/Banner";
import CompanyData from "@/components/FrontPage/Home/CompanyData";
import ContactReview from "@/components/FrontPage/Home/ContactReview";
import OurClient from "@/components/FrontPage/Home/OurClient";
import Scroll from "@/components/FrontPage/Home/Scroll";
import ServiceGallery from "@/components/FrontPage/Home/ServiceGallery";
import ServiceStudio from "@/components/FrontPage/Home/ServiceStudio";
import ServiceWebDevelopment from "@/components/FrontPage/Home/ServiceWebDevelopment";
import TeamMentor from "@/components/FrontPage/Home/TeamMentor";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Scroll />
      <ServiceWebDevelopment />
      <ServiceStudio />
      <ServiceGallery />
      <OurClient />
      <CompanyData />
      <TeamMentor />
      <ContactReview />
    </div>
  );
};

export default HomePage;
