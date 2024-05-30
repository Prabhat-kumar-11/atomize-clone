import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye } from "@fortawesome/free-solid-svg-icons";
export const LoginCard = () => {
  return (
    <div className="max-w-[312px]  p-[33px] border rounded-lg shadow-md">
      <div className="space-y-4">
        <div className="space-y-4">
          <p className="text-2xl font-semibold text-center">
            Login into your account
          </p>
          <p className="text-sm text-gray-600 text-center">
            Don't have an account yet?{" "}
            <span className="text-blue-500 cursor-pointer">Create New</span>
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="johndoe@gmail.com"
              className="w-full h-[40px] py-[12px] px-[17px] border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-[40px] py-[12px] px-[17px] border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
              <FontAwesomeIcon icon={faEye} />
            </span>
          </div>
          <button className="w-full h-[42px] text-blue-500 bg-blue-100 rounded-full hover:bg-blue-600">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
