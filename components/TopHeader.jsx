import React from "react";
import topHeader from "../libs/topHeaderData.JSON";

const TopHeader = () => {
  return (
    <div className="flex items-center justify-center w-full h-[114px] bg-white">
      <ul className="flex w-auto">
      {topHeader.map((item) => (
          <li className="flex flex-col items-center hover:bg-[#F0F0F0] cursor-pointer px-8" key={item.id}>
            <img className="w-[60px] h-[60px]" src={item.image} alt={item.title}/>
            <div className="font-bold tracking-wider">{item.title}</div>
          </li>
      ))}
      </ul>
    </div>
  );
};

export default TopHeader;
