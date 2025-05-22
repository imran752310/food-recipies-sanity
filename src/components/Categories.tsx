import React from "react";
import img1 from "@/Assets/image/bg2.jpg";
import img2 from "@/Assets/image/bg3.jpg";
import Image from "next/image";
export const Categories = () => {
  return (
    <>
      <div className="w-[90%] m-auto my-16">
        <div>
          <h1 className=" font-bold text-[30px] mb-10 border-b-2 border-gray-400 py-4">
            <span className="border-l-4 border-green-400 p-4"> Categories</span>
          </h1>
        </div>
        <div className="flex gap-5 justify-between py-5">
          <div className="relative w-1/3">
            <Image src={img1} alt="ct" width={400} />
            <div className="absolute top-8  left-4">
              <h1 className="text-white font-medium text-[30px]">
                Strawberry Cake
              </h1>
              <p className="text-white text-sm pb-5">Simple & Delicious</p>
              <button className="bg-green-500 text-white border-none p-2">
                Read More
              </button>
            </div>
          </div>

          <div className="relative  w-1/3">
            <Image src={img2} alt="ct" width={400} />
            <div className="absolute top-8  left-4">
              <h1 className="text-white font-medium text-[30px]">
                Strawberry Cake
              </h1>
              <p className="text-white text-sm pb-5">Simple & Delicious</p>
              <button className="bg-green-500 text-white border-none p-2">
                Read More
              </button>
            </div>
          </div>

          <div className="relative  w-1/3">
            <Image src={img1} alt="ct" width={400} />
            <div className="absolute top-8  left-4">
              <h1 className="text-white font-medium text-[30px]">
                Strawberry Cake
              </h1>
              <p className="text-white text-sm pb-5">Simple & Delicious</p>
              <button className="bg-green-500 text-white border-none p-2">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
