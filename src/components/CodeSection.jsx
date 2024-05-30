import React from 'react';
import code from "../assets/code.svg";
import avatar from "../assets/avatar.png";
import add from "../assets/add.svg";
import message from "../assets/message.svg";
import '../App.css'

export const CodeSection = () => {
  const data = [
    {
      image: avatar,
      Heading: "Meagan Fisher",
      dept: "Engineering Manager",
      follow: "Follow",
      message: "Message",
    },
    {
      image: "",
      Heading: "Meagan Fisher",
      dept: "Engineering Manager",
      follow: "Follow",
      message: "Message",
    },
    {
      image: "",
      Heading: "Meagan Fisher",
      dept: "Engineering Manager",
      follow: "Follow",
      message: "Message",
    },
    {
      image: "",
      Heading: "Meagan Fisher",
      dept: "Engineering Manager",
      follow: "Follow",
      message: "Message",
    },
  ];

  return (
    <section className="w-full px-[268px] pt-[192px] justify-between items-center">
      <p className="text-[39px] w-[674px] m-auto font-medium text-center">
        Code the perfect design for each project using Atomize.
      </p>
      <div className="w-[1152px] mt-[55px] pb-[200px] border-b-[2px] border-gray-400 relative">
        <img className="rounded-2xl" src={code} alt="code" />
        <div className="absolute right-auto sm:right-auto md:right-2 lg:right-16 top-[100px] sm:top-[100px] md:top-[-15px] lg:top-[-15px] gap-5 max-h-[570px] overflow-hidden">
          {data.map((el, index) => (
            <div
              key={index}
              className="gap-5 p-2.5 bg-white text-center mt-5 animate-slidein rounded-xl border border-white"
            >
              <img src={avatar} alt="avatar" className="rounded-full mx-auto" />
              <p className="mt-5 text-black font-medium">{el.Heading}</p>
              <p className="mt-5">{el.dept}</p>
              <div className="mt-5 flex gap-8 justify-center">
                <button className="flex items-center gap-2.5  bg-blue-500 text-white rounded-full py-2 px-6">
                  {el.follow}
                  <img className='w-[20px] h-[20px] text-white' src={add} alt="add icon" />
                </button>
                <button className="flex items-center gap-1.5 border border-gray-300 bg-white rounded-full px-5 py-2.5">
                  {el.message}
                  <img src={message} alt="message icon" className="w-7" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
