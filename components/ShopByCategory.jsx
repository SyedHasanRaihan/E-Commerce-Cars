import Image from "next/image";
import React from "react";
import { data } from "../libs/shopByCategories";

const ShopByCategory = () => {
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <h1 className="text-4xl font-bold tracking-wider">Shop By Categories</h1>
      <p className="text-[#8C8C8C] tracking-wider">
        Choose from a wide range of categories to find the best deal for you.
      </p>

      <div className="flex justify-center w-full px-24 bg-[#262626] pt-4">
        <ul className="grid grid-cols-6 gap-6 m-0">
          {data.map((item) => (
            <li
              className="flex flex-col justify-center items-center text-yellow-300 pt-2 hover:bg-white hover:text-black px-6 pb-2"
              key={item.id}
            >
              {typeof item.icon === "string" ? (
                <div className="relative w-14 h-14">
                  <Image
                    src={item.icon}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    layout="fill"
                    alt=""
                  />
                </div>
              ) : (
                <div className="w-14 h-14 text-5xl">{item.icon}</div>
              )}
              <p className="m-0">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center my-10 border-2 w-[211px] h-[307px] py-4 ">
        <img
          className="w-[209px] h-[172px] mb-4"
          src="/assets/topHeader/break.png"
          alt="brake"
        />
        <h1 className="text-xl text-[#8c8c8c]">Brand</h1>
        <p className="tracking-wide">Model</p>
        <p>Ratings</p>
        <h1 className="text-xl">$Price</h1>
      </div>
    </div>
  );
};

export default ShopByCategory;
