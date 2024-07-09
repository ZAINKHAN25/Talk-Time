import React from "react";
import RegionDropDown from "../components/RegionDropDown.jsx";
import LandingTxtSection from "../components/LandingTxtSection.jsx";

import { MdAccountCircle } from "react-icons/md";
import { TiArrowSync } from "react-icons/ti";

function LandingPage() {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen px-16">
      <RegionDropDown />
      <div
        className="flex flex-col-reverse justify-between items-center flex-1 w-full h-full sm:flex-row"
      >

        <LandingTxtSection />
        <div className="flex flex-col justify-between items-center w-2/4">

          <div className="rounded-full relative flex justify-center items-center bg-gray-700">
            <MdAccountCircle className="text-gray-50" size={100} />
            <div className="absolute bottom-0 bg-slate-50 shadow-sm shadow-stone-500 text-gray-700 rounded-full">
              <TiArrowSync size={20}/>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default LandingPage;