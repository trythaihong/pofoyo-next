import { BaseInfo } from "@/data/Data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div
      id="home"
      className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative"
    >
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Content */}
          <div data-aos="fade-up">
            {/* Sub-heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">
              I am {BaseInfo.name}
            </h2>

            {/* Title with Typewriter */}
            <h2 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
              <Typewriter
                words={[BaseInfo.position]} // Example: "Developer"
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>

            {/* Description */}
            <p className="m-6 text-sm md:text-base text-white text-opacity-60">
              {BaseInfo.description}
            </p>

            {/* Buttons */}
            <Link
              href="https://github.com/trythaihong"
              className=" inline-flex items-center space-x-2 bg-red-400 text-blue-950 font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition-all duration-200"
            >
              <span>View GitHub Profile</span>
              <FaDownload className="w-4 h-4" />
            </Link>
            <Link
              href="TryThaihongResume .pdf"
              download
              className="ml-3  inline-flex items-center space-x-2 bg-yellow-400 text-blue-950 font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition-all duration-200 "
            >
              <span>Download Resume</span>
              <FaDownload className="w-4 h-4" />
            </Link>
          </div>

          {/* Image */}
          <div
            data-aos="fade-up"
            className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-hidden"
          >
            <Image
              src={BaseInfo.profilePic}
              alt="Profile picture"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
