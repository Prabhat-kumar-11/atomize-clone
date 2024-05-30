import React from "react";

export const StylingCard = ({ icon, heading, paragraph }) => {
  return (
    <div className="border rounded-lg shadow-md h-[317px] w-[272px] ">
      <div className="p-[33px] h-full flex flex-col justify-between">
        <div className="h-[32px] w-[32px]">
          <img className="" src={icon} alt="icon" />
        </div>
        <p className="text-[22px] font-medium py-[8px]">{heading}</p>
        <p className="text-[16px] text-[#505256] font-normal pb-[8px]">
          {paragraph}
        </p>
        <div className="bg-none border-none text-[#0284FE] text-[14px]">
          See how
        </div>
      </div>
    </div>
  );
};
