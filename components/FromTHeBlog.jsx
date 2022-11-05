import Image from "next/image";
import Link from "next/link";
import React from "react";
import fromTheBlog from "../libs/fromTHeBlog.JSON";

const FromTHeBlog = () => {
  return (
    <div>
      <div className="w-full h-[1px] bg-slate-300 my-4"></div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold m-0 mt-16 tracking-wider">
          From The Blog
        </h1>
        <p className="truncate m-0 py-4 text-slate-500 tracking-wider mb-6">
          Our recent blogs will give you the most up-to-date information
        </p>

        <ul className="flex w-auto mb-32">
          {fromTheBlog.map((item) => (
            <li className="flex flex-col items-center px-8" key={item.id}>
              <div className="flex flex-col items-center">
                <div className="relative w-[447px] h-[223px]">
                  <Image
                    src={item.image}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    layout="fill"
                    alt=""
                  />
                </div>
                <div className="flex justify-center items-center -mt-6 z-10 bg-[#F7D929] font-bold w-32 h-10 rounded-3xl my-6">
                  {item.date}
                </div>
                <h1 className="truncate w-80 text-xl font-bold tracking-wide">{item.title}</h1>
                <p className="text-center line-clamp-2 w-96 text-slate-500 tracking-wide">{item.message}</p>
                <Link href="/" ><a className="font-semibold tracking-wide underline">Read More</a></Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FromTHeBlog;
