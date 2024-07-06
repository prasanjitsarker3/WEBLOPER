import ContactBanner from "@/components/FrontPage/Contact/ContactBanner";
import ContactForm from "@/components/FrontPage/Contact/ContactFrom";
import ContactSwiper from "@/components/FrontPage/Contact/ContactSwiper";
import Contact from "@/components/FrontPage/Contact/WhyContact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "contact",
  description: "We provide technology service",
};
const ContactPage = () => {
  return (
    <div>
      <ContactBanner />
      <ContactSwiper />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
