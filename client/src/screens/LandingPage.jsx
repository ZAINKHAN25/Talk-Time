import React from "react";
import RegionDropDown from "../components/RegionDropDown.jsx";
import LandingTxtSection from "../components/LandingTxtSection.jsx";
import LandingJoiningSections from "../components/LandingJoiningSections.jsx";

function LandingPage() {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen px-16 bg-gradient-to-r from-blue-100 to-cyan-100 ">

      <RegionDropDown />
      <div
        className="flex flex-col-reverse justify-between items-center flex-1 w-full h-full sm:flex-row"
      >
        <LandingTxtSection />
        <LandingJoiningSections />
      </div>
      
    </div>
  );
}

export default LandingPage;