import React from "react";

const BottomBanner = () => {
  return (
    <div className="flex justify-center items-center mb-20">
      <div className="w-[2000px] flex justify-center items-center gap-12">
        <div className="overflow-hidden  max-w-[900px] max-h-[800px]">
          <div className="relative">
            <img
              className="relative z-10 hover:scale-105 duration-200"
              src="/assets/bottomBanner/Cms-Banner-1.jpg"
            />
            <div className="absolute top-[65vh] left-16 z-20">
              <p className="text-xl tracking-wider text-white">
                Starting At Only $5,500
              </p>
              <h1 className="text-5xl font-bold tracking-wider text-white">
                Branded <span className="text-[#F1D535]">Tyers</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="relative max-w-[900px] max-h-[800px] overflow-hidden">
          <img
            className="relative z-10 hover:scale-105 ease-in duration-200"
            src="/assets/bottomBanner/Cms-Banner-2.jpg"
          />
          <div className="absolute top-[65vh] left-16 z-20">
            <p className="text-xl  tracking-wider text-white">
              Starting At Only $5,500
            </p>
            <h1 className="text-5xl font-bold tracking-wider text-white">
              Luxurious <span className="text-[#F1D535]">Lights</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
