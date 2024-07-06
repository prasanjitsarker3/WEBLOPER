import ContactBanner from "@/Components/FrontPage/Contact/ContactBanner";
import ContactForm from "@/Components/FrontPage/Contact/ContactFrom";
import ContactSwiper from "@/Components/FrontPage/Contact/ContactSwiper";
import Contact from "@/Components/FrontPage/Contact/WhyContact";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <ContactBanner />
      {/* <Contact /> */}
      <ContactSwiper />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
