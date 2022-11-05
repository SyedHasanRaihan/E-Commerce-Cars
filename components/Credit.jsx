import Image from "next/image";
import React from "react";
import { FaAngleUp } from "react-icons/fa";

const Credit = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const paymentCards = [
    {
      id: 1,
      img: "/assets/footer/visa.png",
    },
    {
      id: 2,
      img: "/assets/footer/discover.png",
    },
    {
      id: 3,
      img: "/assets/footer/paypal.png",
    },
    {
      id: 4,
      img: "/assets/footer/maestro.png",
    },
    {
      id: 5,
      img: "/assets/footer/master.png",
    },
    {
      id: 6,
      img: "/assets/footer/mastercard.png",
    },
  ];
  return (
    <div className="relative">
      <div className="w-full h-[1px] bg-slate-300 mb-3"></div>
      <div className="flex justify-center">
        <div className="flex justify-between w-[1400px] my-2">
          <p className="text-md tracking-wider m-0">
            Powered By OpenCart Your Store © 2022
          </p>
          <ul className="flex">
            {paymentCards.map((item) => (
              <li className="mx-1" key={item.id}>
                <div className="relative w-[40px] h-[25px]">
                  <Image
                    src={item.img}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    layout="fill"
                    alt=""
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute right-6 bottom-2  text-xl bg-[#F7D929] w-fit rounded-full hover:bg-slate-600 hover:text-white hover:border-1 p-4"
        onClick={() => scrollToTop()}
      >
        <FaAngleUp />
      </div>
    </div>
  );
};

export default Credit;
