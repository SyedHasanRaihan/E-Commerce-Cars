import React from "react";
import SubscribeForm from "./SubscribeForm";
import data from "../libs/footer.JSON";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import { BsFacebook,BsTwitter,BsInstagram,BsYoutube,BsPinterest } from "react-icons/bs";
import Credit from "./Credit";

const Footer = () => {
  return (
    <div>
      <SubscribeForm />
      <div className="grid grid-cols-12 mx-72 my-16">
        {data.map((item) => (
          <ul className="col-span-3">
            <div className="text-xl py-2 font-medium tracking-wide">
              {item.title}
            </div>
            {item.links.map((path) => (
              <Link href={path.path}>
                <li className=" flex items-center text-md  hover:cursor-pointer hover:text-slate-500 font-medium tracking-widest p-1">
                  <FaAngleRight />
                  {path.name}
                </li>
              </Link>
            ))}
          </ul>
        ))}
        <div className="col-span-3">
          <div className="relative w-[390px] h-[260px]  bg-gradient-to-b from-[#F0F0F0] px-6 py-10">
            <div className="relative w-[177px] h-[40px]">
              <Image
                src={`/assets/footer/Logo1.png`}
                width="100%"
                height="100%"
                objectFit="cover"
                layout="fill"
                alt=""
              />
            </div>
            <p className="py-4">
              60, 29th Street, San Francisco, CA 94110, United States of America
            </p>
            <p>demo@example.com</p>
            <h1 className="text-xl font-medium tracking-wider">
              (+1) 1234 4567 890
            </h1>
            <h1 className="text-xl tracking-wider py-4">Follow Us</h1>
            <div className="flex gap-2">
              <div className="text-xl bg-slate-300 hover:bg-[#F7D929] rounded-full p-2">
                <BsFacebook />
              </div>
              <div className="text-xl bg-slate-300 hover:bg-[#F7D929] rounded-full p-2">
                <BsTwitter />
              </div>
              <div className="text-xl bg-slate-300 hover:bg-[#F7D929] rounded-full p-2">
                <BsInstagram />
              </div>
              <div className="text-xl bg-slate-300 hover:bg-[#F7D929] rounded-full p-2">
                <BsYoutube />
              </div>
              <div className="text-xl bg-slate-300 hover:bg-[#F7D929] rounded-full p-2">
                <BsPinterest />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Credit/>
    </div>
  );
};

export default Footer;
