import React from "react";
import RegionDropDown from "../components/RegionDropDown.jsx";
import LandingTxtSection from "../components/LandingTxtSection.jsx";
import LandingJoiningSections from "../components/LandingJoiningSections.jsx";

function LandingPage() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 overflow-x-hidden px-3">

      <div className="container flex flex-col items-center w-full min-h-screen my-2 mx-auto">

        <RegionDropDown />
        <div
          className="flex flex-col gap-3 items-center flex-1 w-full h-full sm:flex-row landingPageMainDiv"
        >
          <LandingTxtSection />
          <LandingJoiningSections />
        </div>

      </div>
    </div>
  );
}

export default LandingPage;