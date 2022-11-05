import Image from "next/image";
import React from "react";

const LastBottomBanner = () => {
  return (
    <div className="flex justify-center pb-10">
      <div className="w-[1400px] h-[900px] flex justify-center gap-10">
        <div className="flex flex-col  items-center w-[480px]">
          <div className="relative w-[480px] h-[490px] hover:cursor-pointer">
            <Image
              src={`/assets/lastBottomBanner/sub-Banner-3.jpg`}
              width="100%"
              height="100%"
              objectFit="cover"
              layout="fill"
              alt=""
            />
          </div>
          <h1 className="text-3xl font-bold py-6">Auto Accessories</h1>
          <p className="text-[#808080] px-2 text-center">
            Contrary to popular belief, Lorem Ipsum is not simply dummy text. It
            roots in a piece of classical Latin literature45 BC, making it ov
            2000 years old. dummy text
          </p>
          <button className="bg-[#F7D929] font-bold w-32 h-12 rounded-3xl hover:bg-black duration-500 hover:text-white my-6">
            Read More
          </button>
        </div>

        <div className="flex flex-col  items-center w-[480px]">
          <div className="relative w-[480px] h-[700px] hover:cursor-pointer">
            <Image
              src={`/assets/lastBottomBanner/Sub-Banner-4.jpg`}
              width="100%"
              height="100%"
              objectFit="cover"
              layout="fill"
              alt=""
            />
          </div>
          <h1 className="text-3xl font-bold py-6">Shopping Headlight</h1>
          <p className="text-[#808080] px-2 text-center">
          Contrary to popular belief, Lorem Ipsum is not simply dummy text. It roots in a piece of classical Latin literature45 BC, making it ov 2000 years old. dummy text
          </p>
          <button className="bg-[#F7D929] font-bold w-32 h-12 rounded-3xl hover:bg-black duration-500 hover:text-white my-6">
            Read More
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default LastBottomBanner;
