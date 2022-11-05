import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { FaTruck } from "react-icons/fa";
import {data} from "../libs/carouselData.jsx";

const CarouselSection = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div>
      <div className="flex items-center justify-center w-full h-[52px] bg-gradient-to-b from-[#F5F5F5]">
        <img
          className="cursor-pointer px-2"
          src="/assets/carousel/Offer.png"
          alt="/"
        />
        <div className="tracking-widest">
          <span className="font-bold ">Need It Today?</span>Free In Store &
          Pickup / <span className="font-bold">$9.99</span> Same Day Delivery
        </div>
      </div>
      <Carousel
        effect="fade"
        autoplay
        pauseOnFocus={false}
        pauseOnHover={false}
        className="relative mx-16"
      >
        {/* <div> */}
        <img src="/assets/carousel/carousel1.jpg" />

        {/* </div> */}
        {/* <div> */}
        <img src="/assets/carousel/carousel2.jpg" />
        {/* </div> */}
      </Carousel>
      <div className="flex  items-center justify-center gap-12 my-8">
        <div className="relative w-[680px] h-[337px]  overflow-hidden">
          <img
            className="relative z-10 w-[680px] h-[337px] hover:scale-105 ease-in duration-200"
            src="/assets/carousel/carousel3.jpg"
          />
          <div className="absolute top-[20vh] left-16 z-20">
            <h1 className="text-5xl font-bold tracking-wider text-white">
              Car Bumper
            </h1>
            <h1 className="text-5xl font-bold tracking-wider text-[#F1D535]">
              & More
            </h1>
          </div>
        </div>

        <div className="relative w-[680px] h-[337px] overflow-hidden">
          <img
            className="relative z-10 w-[680px] h-[337px] hover:scale-105 ease-in duration-200"
            src="/assets/carousel/carousel6.jpg"
          />
          <div className="absolute top-[20vh] left-16 z-20">
            <h1 className="text-5xl font-bold tracking-wider text-white">
              Shop For
            </h1>
            <h1 className="text-5xl font-bold tracking-wider text-[#F1D535]">
              Light
            </h1>
          </div>
        </div>
      </div>

      <div>
        <ul className="flex w-full justify-center">
          {data.map((item) => (
            <li className="flex flex-col justify-center items-center py-8 px-6 cursor-pointer">
              <div className="flex justify-center items-center text-3xl text-[#F1D535] border-2 border-[#F1D535] rounded-full w-20 h-20">{item.icon}</div>
              <h1 className="text-xl font-bold tracking-wider mt-6">{item.title}</h1>
              <p className="text-[#8C8C8C]">{item.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarouselSection;
