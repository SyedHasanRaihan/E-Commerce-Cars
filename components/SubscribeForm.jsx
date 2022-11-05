import React from "react";
import { RiMailOpenLine } from "react-icons/ri";

const SubscribeForm = () => {
  return (
    <div className="flex  justify-center items-center w-full h-[10vh] bg-[#262626]">
      <div className="w-[1400px] flex">
        <RiMailOpenLine className="text-[#F7D929] text-5xl" />
        <div className="flex flex-col px-4">
          <h1 className="text-white text-lg font-semibold tracking-widest m-0">
            Subscribe For Joining Us!
          </h1>
          <p className="text-md text-white font-semibold tracking-widest m-0">
            Get all the latest information on Events, Sales and Offers.
          </p>
        </div>
        <input
          className="w-[60vh] h-11 outline-none border-none rounded-full px-6"
          placeholder="Your Email Address"
          type="mail"
        />
        <button className="bg-[#F7D929] font-bold w-32 h-12 rounded-3xl  mx-3">
            Subscribe
          </button>
      </div>
    </div>
  );
};

export default SubscribeForm;
