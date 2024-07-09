import React from "react";
import RegionDropDown from "../components/RegionDropDown.jsx";

function LadingPage() {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen px-16 bg-[#fff9f9]">
      <RegionDropDown />
      <div
        className="flex flex-col-reverse justify-between items-center flex-1 w-full h-full sm:flex-row"
      >
        <div className="Landing-Txt-Div flex flex-col justify-center items-center w-2/4">
          <h1
            className="text-7xl"
          >
            Welcome to Talk_Time:
          </h1>
          <h4 className="mt-5 text-lg">
            The place where you can meet and chat with strangers without signing up. Connect, make friends, and explore new conversations effortlessly.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default LadingPage;