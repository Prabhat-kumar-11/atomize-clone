import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import iconSystem from "../assets/iconSystem.svg";
import customisation from "../assets/customisation.svg";
import atomic from "../assets/atomic.svg";
import themeSetUp from "../assets/themeSetUp.svg";
import React from "react";
import ReactSVG from "../assets/ReactSVG";

export const MiddleCard = () => {
  return (
    <section className="w-full mt-[200px]  px-[368px]  justify-between items-center ">
      <div className=" sm:w-[85%]  w-[1184px] flex flex-col sm:flex-row gap-[150px]  p-0 sm:p-8">
        <div className=" hidden sm:block">
          <div className="relative w-[350px] h-[350px] border-2 rounded-full flex justify-center items-center">
            <div className="relative w-[290px] h-[290px] border-2 border-gray-300 rounded-full flex justify-center items-center">
              <div className="w-[230px] h-[230px] border-2 border-gray-400 rounded-full flex justify-center items-center">
                <div className="w-[170px] h-[170px] border-2 border-gray-500 rounded-full flex justify-center items-center">
                  <ReactSVG w={"64px"} h={"57px"} color={"black"}/>
                </div>
              </div>
              <div className="w-[40px] h-[40px] absolute left-0 top-12 bg-yellow-500  rounded-full flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="ae c0 ds dt du  w-8 h-8 cursor-pointer"
                >
                  <path
                    fill="#FFFFFF"
                    fillRule="evenodd"
                    d="M11,11 L11,6 C11,5.44771525 11.4477153,5 12,5 C12.5522847,5 13,5.44771525 13,6 L13,11 L18,11 C18.5522847,11 19,11.4477153 19,12 C19,12.5522847 18.5522847,13 18,13 L13,13 L13,18 C13,18.5522847 12.5522847,19 12,19 C11.4477153,19 11,18.5522847 11,18 L11,13 L6,13 C5.44771525,13 5,12.5522847 5,12 C5,11.4477153 5.44771525,11 6,11 L11,11 Z"
                  />
                </svg>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faToggleOn}
                  className="text-3xl text-[#36AB80] absolute top-6 right-[20px]  rounded-full flex justify-center items-center cursor-pointer"
                />
              </div>
            </div>

            <button className="absolute right-0 bottom-12 bg-blue-500 rounded-lg flex justify-center items-center text-white p-2 px-3 ">
              Sign Up
            </button>
            <FontAwesomeIcon
              icon={faSquareCheck}
              className="w-[20px] h-[20px] absolute left-[15px] bottom-20 text-orange-500 rounded-full flex justify-center items-center cursor-pointer"
            />
          </div>
        </div>
        <div className="w-[656px]">
          <div>
            <p className="text-[39px] w-[512px]  font-semibold text-gray-800">
              Beautiful & consistant UI Powered with
              <span className="text-sky-400">{" "}React</span>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-start gap-2  rounded-lg p-4">
             <img src={atomic} alt="icon" />

              <div className="flex flex-col items-start">
                <h2 className="text-xl font-semibold my-4">Atomic</h2>
                <p className="text-gray-500 text-start w-[]">
                  based on Atomic Design.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6  rounded-lg p-4">
             <img src={themeSetUp} alt="icon" />

              <div className="flex flex-col items-start">
                <h2 className="text-xl font-semibold my-4">Theme Setup</h2>
                <p className="text-gray-500 text-start w-[60%]">
                  Auto Updating colors and Styleguide.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6  rounded-lg p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
              >
                <g fill="none" fillRule="evenodd">
                  <rect width="40" height="40" fill="#FFF" />
                  <path
                    fill="#000"
                    d="M7.5,0 L19.5,0 C23.6421356,-7.6089797e-16 27,3.35786438 27,7.5 C27,11.6421356 23.6421356,15 19.5,15 L7.5,15 C3.35786438,15 5.07265313e-16,11.6421356 0,7.5 C-5.07265313e-16,3.35786438 3.35786438,7.6089797e-16 7.5,0 Z M19.5,12 C21.9852814,12 24,9.98528137 24,7.5 C24,5.01471863 21.9852814,3 19.5,3 C17.0147186,3 15,5.01471863 15,7.5 C15,9.98528137 17.0147186,12 19.5,12 Z M7.5,18 L19.5,18 C23.6421356,18 27,21.3578644 27,25.5 C27,29.6421356 23.6421356,33 19.5,33 L7.5,33 C3.35786438,33 0,29.6421356 0,25.5 C0,21.3578644 3.35786438,18 7.5,18 Z M7.5,20 C4.46243388,20 2,22.4624339 2,25.5 C2,28.5375661 4.46243388,31 7.5,31 L19.5,31 C22.5375661,31 25,28.5375661 25,25.5 C25,22.4624339 22.5375661,20 19.5,20 L7.5,20 Z M8.5,29.5 C6.290861,29.5 4.5,27.709139 4.5,25.5 C4.5,23.290861 6.290861,21.5 8.5,21.5 C10.709139,21.5 12.5,23.290861 12.5,25.5 C12.5,27.709139 10.709139,29.5 8.5,29.5 Z"
                    transform="translate(6 3)"
                  />
                </g>
              </svg>

              <div className="flex flex-col items-start">
                <h2 className="text-xl font-semibold my-4">Components</h2>
                <p className="text-gray-500 text-start w-[60%]">
                  Ever-increasing list of components.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6  rounded-lg p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
              >
                <g fill="none" fillRule="evenodd">
                  <rect width="40" height="40" fill="#FFF" />
                  <path
                    fill="#000"
                    fillRule="nonzero"
                    d="M16.1994228,14.3863636 L19.6768382,10.9089482 L17.9720713,10.9089482 L17.9720713,8.90894821 L21.0910518,8.90894821 L23.0910518,8.90894821 L23.0910518,13.676065 L21.0910518,13.676065 L21.0910518,12.3231618 L17.6136364,15.8005772 L17.6136364,30 L21.8528129,30 L21.8528129,32 L7,32 C3.13400675,32 0,28.8659932 0,25 L0,11.7792194 L2,11.7792194 L2,14.3863636 L16.1994228,14.3863636 Z M13,-3.96482847e-12 L13,2 L8,2 L8,-3.96482847e-12 L13,-3.96482847e-12 Z M21,-3.96482847e-12 L21,2 L16,2 L16,-3.96482847e-12 L21,-3.96482847e-12 Z M29.312066,2.01809664 L27.9835896,3.5131386 C26.8926993,2.54378652 25.489927,2 24,2 L24,-3.96482847e-12 C25.9844012,-3.96482847e-12 27.8585431,0.726513568 29.312066,2.01809664 Z M32,10.0735935 L30,10.0735935 L30,8 C30,7.16103014 29.828298,6.34799809 29.4999549,5.59755587 L31.3322474,4.79586773 C31.7706818,5.79792821 32,6.88378047 32,8 L32,10.0735935 Z M32,18.0735935 L30,18.0735935 L30,13.0735935 L32,13.0735935 L32,18.0735935 Z M31.650948,26.3436547 L29.7384789,25.7584522 C29.911187,25.1940341 30,24.6035556 30,24 L30,21.0735935 L32,21.0735935 L32,24 C32,24.8024374 31.8815271,25.5901115 31.650948,26.3436547 Z M24.9253078,31.9469704 L24.6961626,29.9601406 C26.1629692,29.7909708 27.501384,29.0868459 28.4763741,27.9953608 L29.967944,29.3277344 C28.6693376,30.7815025 26.8832163,31.7211608 24.9253078,31.9469704 Z M1.45416179,3.39984762 L3.08962948,4.55104067 C2.38411597,5.55334393 2,6.74654724 2,8 L2,8.77921939 L0,8.77921939 L0,8 C0,6.33103694 0.513322342,4.73647183 1.45416179,3.39984762 Z M8,-3.96482847e-12 L8,2 C6.9224267,2 5.88865033,2.28355838 4.97966049,2.81432416 L3.97117893,1.08719796 C5.18418076,0.378917357 6.56560991,-3.96482847e-12 8,-3.96482847e-12 Z"
                    transform="translate(5 4)"
                  />
                </g>
              </svg>

              <div className="flex flex-col items-start">
                <h2 className="text-xl font-semibold my-4">Responsive</h2>
                <p className="text-gray-500 text-start w-[60%]">
                  Build fully responsive structures easily.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6  rounded-lg p-4">
             <img src={customisation} alt="" />

              <div className="flex flex-col items-start">
                <h2 className="text-xl font-semibold my-4">Customisation</h2>
                <p className="text-gray-500 text-start w-[60%]">
                  Multiple customisations to suit your style.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6  rounded-lg p-4">
             <img src={iconSystem} alt="icon" />

              <div className="flex flex-col items-start">
                <h2 className="text-xl font-semibold my-4">Icon System</h2>
                <p className="text-gray-500 text-start w-[60%]">
                  An inbuilt icon system for faster development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
