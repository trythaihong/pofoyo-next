import Image from "next/image";
import React from "react";
type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};
export default function toolcard({ skill }: Props) {
  const { image, percent, title } = skill;
  return (
    <div
      data-aos="fade-up"
      className="p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg  bg-gray-900"
    >
      <Image
        src={image}
        alt=""
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h2 className="text-[18px] mt-4 text-white font-bold">{title}</h2>
      <div className="bg-black mt-4 rounded-lg text-white opacity-40 p-2">
        {percent}
      </div>
    </div>
  );
}
