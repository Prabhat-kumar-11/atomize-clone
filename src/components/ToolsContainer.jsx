import React from "react";
import diamond from "../assets/diamond.svg";
import react from "../assets/react.svg";
import ReactSVG from "../assets/ReactSVG";

export const ToolsContainer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="p-6 border rounded-lg shadow-md w-full md:w-[384px] h-[285px]">
        <div className="h-full flex flex-col justify-between">
          <div>
            <img src={diamond} alt="icon" />
          </div>
          <p className="text-lg font-medium py-2">Design</p>
          <p className="text-base text-gray-600 pb-2">
            Design your website by using Atomize for Sketch App.
          </p>
          <div className="bg-none border-none text-blue-500 text-sm flex items-center space-x-2">
            <span>Development</span>
            <span>➜</span>
          </div>
        </div>
      </div>
      <div className="p-6 border rounded-lg shadow-md w-full md:w-[384px] h-[285px]">
        <div className="h-full flex flex-col justify-between">
          <div>
            <ReactSVG color={"#00D8FF"} w={"44px"} h={"39px"} />
          </div>
          <p className="text-lg font-medium py-2">Design</p>
          <p className="text-base text-gray-600 pb-2">
            Bring your designs to life with Atomize for React JS.
          </p>
          <div className="bg-none border-none text-blue-500 text-sm flex items-center space-x-2">
            <span>Documents</span>
            <span>➜</span>
          </div>
        </div>
      </div>
    </div>
  );
};
