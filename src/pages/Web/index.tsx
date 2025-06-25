import React from "react";
import HeroSection from "./HeroSection";
import WhyAttendSection from "./WhyAttendSection";
import BodySection from "./BodySection";
// import SponsorSection from "./SponsorSection";

const WebPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <WhyAttendSection />
      <BodySection />
      {/* <SponsorSection /> */}
    </div>
  );
};

export default WebPage;
