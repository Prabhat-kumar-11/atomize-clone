import React from "react";
import eye from "../assets/eye.svg";
import heart from "../assets/heart.svg";
import play from "../assets/play.svg";
import download from "../assets/download.svg";
import link from "../assets/link.svg";
import tag from "../assets/tag.svg";
import message from "../assets/message.svg";
import avatar from "../assets/avatar.png";
import add from "../assets/add.svg";

export const ProfileCard = () => {
  const iconStyle =
    "w-[40px] h-[40px] p-[11px] border rounded-full shadow-md flex items-center justify-center";

  return (
    <div className="h-auto sm:h-[384px] flex flex-col justify-between p-4 sm:p-0">
      <div className="flex space-x-2 sm:space-x-4 justify-center mb-4 sm:mb-0">
        <div className={iconStyle}>
          <img src={heart} alt="heart icon" />
        </div>
        <div className={iconStyle}>
          <img src={eye} alt="eye icon" />
        </div>
        <div className={iconStyle}>
          <img src={tag} alt="tag icon" />
        </div>
        <div className={iconStyle}>
          <img src={link} alt="link icon" />
        </div>
        <div className={iconStyle}>
          <img src={play} alt="play icon" />
        </div>
        <div className={iconStyle}>
          <img src={download} alt="download icon" />
        </div>
      </div>
      <div className="w-full sm:w-[312px] h-auto sm:h-[312px] mx-auto p-4 sm:p-[19px_58.37px_19px_57.63px] space-y-4 border rounded-lg shadow-md">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-[72px] h-[72px]">
            <img
              src={avatar}
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="text-lg font-medium text-center">Meagan Fisher</p>
          <p className="text-sm text-gray-600 text-center">
            Engineering Manager
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <button className="flex items-center justify-center gap-[5px] bg-blue-500 text-white rounded-full py-2 px-6 w-full sm:w-auto">
              Follow
              <img className='w-[20px] h-[20px] text-white' src={add} alt="add icon" />
            </button>
            <button className="flex items-center justify-center gap-[5px] border border-gray-300 bg-white rounded-full px-6 py-2.5 w-full sm:w-auto">
              Message
              <img src={message} alt="message icon" className="w-[20px] h-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
