import Image from "next/image";
import React from "react";

const Brands = () => {
  const logos = [
    {
      id: 1,
      logo: "/assets/brandsLogo/brand2-165x54.png",
    },
    {
      id: 2,
      logo: "/assets/brandsLogo/brand3-165x54.png",
    },
    {
      id: 3,
      logo: "/assets/brandsLogo/brand4-165x54.png",
    },
    {
      id: 4,
      logo: "/assets/brandsLogo/brand5-165x54.png",
    },
    {
      id: 5,
      logo: "/assets/brandsLogo/brand6-165x54.png",
    },
    {
      id: 6,
      logo: "/assets/brandsLogo/brand7-165x54.png",
    },{
        id: 3,
        logo: "/assets/brandsLogo/brand4-165x54.png",
      },
      {
        id: 4,
        logo: "/assets/brandsLogo/brand5-165x54.png",
      },
      {
        id: 5,
        logo: "/assets/brandsLogo/brand6-165x54.png",
      },
      {
        id: 6,
        logo: "/assets/brandsLogo/brand7-165x54.png",
      },
  ];

  return (
    <div className=" flex justify-center mb-24">
      <ul className="flex items-center justify-center gap-6 w-[60rem] overflow-x-auto scrollbar-hide">
        {logos.map((item) => (
          <li key={item.id}>
            <div className="relative w-44 h-14 hover:opacity-70">
              <Image
                src={item.logo}
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
  );
};

export default Brands;
