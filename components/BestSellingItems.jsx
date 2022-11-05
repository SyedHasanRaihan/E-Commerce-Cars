import React from "react";

const BestSellingItems = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold tracking-wider">Best Selling Items</h1>
      <p className="text-[#8C8C8C] tracking-wider]">
        Explore these best-selling products that people love to buy.
      </p>
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

      <div className="grid grid-cols-3 container gap-10 my-6">
        <div className="flex flex-col justify-center items-center border-4 bg-gradient-to-b from-white to-[#E5E7EB]">
          <img className="py-4" src="/assets/bestSellingItems/Sub-Banner-01.png" alt="/" />
          <h1 className="text-3xl font-bold">MRF</h1>
          <p className="text-xl tracking-wider">
            Starting At Only <span className="font-bold">$2,500</span>
          </p>
          <img
            className="w-24 mb-4"
            src="/assets/bestSellingItems/hsbc-logo-200x25.svg"
            alt="/"
          />
          <p className="font-bold m-0 tracking-wider">10% Instant Discount*</p>
          <p className="tracking-wider">On ABC Credit card</p>
        </div>
        <div className="flex flex-col justify-center items-center border-4">
            <h1 className="text-5xl font-bold tracking-wider"><span className="bg-[#F7D929] px-2">Deal</span> Of</h1>
            <h1 className="text-5xl font-bold tracking-wider">The Day</h1>
            <h3 className="text-xl text-blue-700 tracking-widest">Hurry Up!!!</h3>
            <button className="bg-[#F7D929] font-bold w-32 h-12 rounded-3xl hover:bg-black duration-500 hover:text-white my-6">Shop Now</button>
            <h3 className="text-xl font-bold">Get Deals. Every Day</h3>
        </div>
        <div className="flex flex-col justify-center items-center border-4 bg-gradient-to-b from-white to-[#E5E7EB]">
          <img className="py-4" src="/assets/bestSellingItems/Sub-Banner-02.png" alt="/" />
          <h1 className="text-3xl font-bold">BREMBO</h1>
          <p className="text-xl tracking-wider">
            Starting At Only <span className="font-bold">$2,500</span>
          </p>
          <img
            className="w-24 mb-4"
            src="/assets/bestSellingItems/hsbc-logo-200x25.svg"
            alt="/"
          />
          <p className="font-bold m-0 tracking-wider">10% Instant Discount*</p>
          <p className="tracking-wider">On ABC Credit card</p>
        </div>
      </div>
    </div>
  );
};

export default BestSellingItems;
