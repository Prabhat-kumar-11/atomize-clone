import React from "react";

export const LastSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="w-full sm:w-[235px] h-[156px]">
        <p className="text-[32px] font-bold text-center">15+</p>
        <p className="text-center text-[17px] font-normal text-[#505256]">
          Ready to use ReactComponents
        </p>
      </div>
      <div className="w-full sm:w-[235px] h-[156px]">
        <p className="text-[32px] font-bold text-center">60+</p>
        <p className="text-center text-[17px] font-normal text-[#505256]">
          Predefined colors for theme setup
        </p>
      </div>
      <div className="w-full sm:w-[235px] h-[156px]">
        <p className="text-[32px] font-bold text-center">{"</>"}</p>
        <p className="text-center text-[17px] font-normal text-[#505256]">
          Detailed documentation for each component
        </p>
      </div>
      <div className="w-full sm:w-[235px] h-[156px]">
        <p className="text-[32px] font-bold text-center">FREE</p>
        <p className="text-center text-[17px] font-normal text-[#505256]">
          Open source with regular updates
        </p>
      </div>
    </div>
  );
};
