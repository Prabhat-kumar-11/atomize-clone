import React from "react";
import download from "../assets/download.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import TagSVG from "../assets/TagSVG";

export const ProfileBack = () => {
  return (
    <div className=" w-full max-w-[272px] md:max-w-none md:w-[384px]h-[384px]  flex flex-col justify-between  ">
      <div className=" border rounded-lg shadow-md">
        <div className="w-full  rounded-lg">
          <img
            src={download}
            alt="background"
            className="w-full h-[full]   rounded-t-lg  object-cover"
          />
        </div>
        <div
          id="avatar2"
          className="flex items-center  justify-between p-[16px]    "
        >
          <div className=" flex gap-5 items-center">
            <div className="">
              <img
                src={avatar2}
                alt="avatar"
                className="w-[24px] h-[24px] rounded-full"
              />
            </div>
            <p className="text-[14px] font-semibold  ">Meagan Fisher</p>
          </div>

          <div className="  ">
            <FontAwesomeIcon icon={faHeart} className="text-black " />
          </div>
        </div>
      </div>
      <div
        id="avatar3"
        className="flex  items-center  justify-between p-[16px] bg-[#F7F8F9] rounded-lg border shadow-md"
      >
        <div className="flex gap-5 items-center justify-center  ">
          <div className="w-10 h-10">
            <img
              src={avatar3}
              alt="John Doe avatar"
              className="w-full h-full rounded-full "
            />
          </div>
          <div className="  flex flex-col justify-center items-center">
            <p className="text-[14px] font-semibold">John Doe</p>
            <p className="text-gray-500 text-[12px]">UI / UX Designer</p>
          </div>
        </div>

        <div className="">
          <TagSVG />
        </div>
      </div>
    </div>
  );
};
