import StudioBanner from "@/components/FrontPage/Studio/StudioBanner";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "studio",
  description: "We provide technology service",
};
const StudioPage = () => {
  return (
    <div>
      <StudioBanner />
    </div>
  );
};

export default StudioPage;
