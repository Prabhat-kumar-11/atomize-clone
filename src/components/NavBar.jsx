import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import atom from "../assets/logo.svg";

export const NavBar = () => {
  const [onOpen, setOnOpen] = useState(false);

  const onToggleMenu = () => {
    setOnOpen(!onOpen);
  };

  return (
    <nav className="flex justify-between items-center w-full h-[72px] px-8 lg:px-[268px] ">
      <div>
        <img className="w-44 cursor-pointer" src={atom} alt="Logo" />
      </div>
      <div
        className={`absolute md:static top-0 left-0 w-full md:w-auto md:flex items-center px-8 lg:px-0 transition-all duration-500 ${
          onOpen ? "top-[72px] bg-white z-10" : "top-[-100%]"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-8 md:gap-4 text-md text-gray-700 md:bg-transparent bg-white w-full md:w-auto md:mt-0 mt-4 md:pt-0 pt-4">
          <li>
            <a className="cursor-pointer hover:text-gray-500" href="#">
              Features
            </a>
          </li>
          <li>
            <a className="cursor-pointer hover:text-gray-500" href="#">
              GitHub
            </a>
          </li>
          <li>
            <a className="cursor-pointer hover:text-gray-500" href="#">
              For Designers
            </a>
          </li>
          <li>
            <button className="bg-[#e1e3e8] px-5 py-2 text-gray-600 rounded-lg hover:bg-[#ebeef4]">
              Documentation
            </button>
          </li>
        </ul>
      </div>
      <div className="flex items-center md:hidden">
        <FontAwesomeIcon
          icon={onOpen ? faTimes : faBars}
          onClick={onToggleMenu}
          className="text-3xl cursor-pointer"
        />
      </div>
    </nav>
  );
};


