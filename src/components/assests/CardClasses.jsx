import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { FitICon } from "../../icons/fitIcon";

export function CardClasses({
  category = "default",
  linkImg = "https://i.ibb.co/YTnxJy9/treadmill-4.png",
}) {
  return (
    <div className="border border-solid border-[#DEDEDE] px-9 py-12 uppercase rounded-md shadow-md">
      <div className="w-20">
        <img src={linkImg} alt="" />
      </div>
      <p className="mt-24 text-lg text-[#2b20248a] font-bold tracking-wide">
        Academia
      </p>
      <h3 className="mt-2 text-2xl lg:text-3xl text-[#2B2024] font-bold tracking-[0.04rem]">
        {category}
      </h3>
      <hr className="mt-6 border border-[#DEDEDE]" />
      <div className="mt-12 flex items-center justify-between ">
        <p className="text-lg text-[#2B2024] font-bold tracking-wide hover:cursor-pointer">
          Mais Informações
        </p>
        <span className="hover:cursor-pointer">
          <BsArrowRightShort size={25} />
        </span>
      </div>
    </div>
  );
}
