"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

export default function ServiceCart({ service }: Props) {
  return (
    <Tilt
      data-aos="fade-right"
      className="w-72 h-80 shadow-2xl p-6 rounded-lg bg-[#814ced] text-white flex flex-col gap-4 items-center justify-center text-center"
    >
      <div className="w-14 h-14">
        <Image src={service.icon} alt={service.title} width={56} height={56} />
      </div>
      <h3 className="text-xl font-bold">{service.title}</h3>
      <p className="text-sm text-white/80">{service.description}</p>
    </Tilt>
  );
}
