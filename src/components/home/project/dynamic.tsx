"use client";

import SectionHeading from "@/components/helper/SectionHeading";
import { projectDynamic } from "@/data/Data";
import Image from "next/image";
import React from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function DynamicProject() {
  return (
    <section className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>Laravel Project</SectionHeading>

      <div className="w-[90%] md:w-[80%] mx-auto mt-20">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projectDynamic.map((project) => (
            <SwiperSlide key={project.id}>
             <div
  data-aos="fade-up"
  className="bg-blue-950 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-full h-[420px] flex flex-col cursor-pointer"
>
  {/* Image */}
  <div className="relative w-full h-[250px] cursor-pointer">
    <Image
      src={project.image}
      alt={project.title}
      fill
      className="object-cover p-5"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  </div>

  {/* Content */}
  <div className="p-4 flex-1 flex flex-col items-center text-center">
    <h2 className="text-white text-lg font-semibold mb-2 cursor-pointer">
      {project.title}
    </h2>

    <p className="text-gray-300 text-sm mb-4 cursor-pointer">
      {project.des}
    </p>

    {/* Buttons */}
    <div className="flex gap-3 mt-auto">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
      >
        Source Code
      </a>

      <button
        onClick={() => {
          if (!project.livedemo) {
            alert("Live demo link is not available for this project!");
          } else {
            window.open(project.livedemo, "_blank", "noopener,noreferrer");
          }
        }}
        className="px-4 py-2 text-sm border border-blue-400 text-blue-400 rounded hover:bg-blue-400 hover:text-black transition cursor-pointer"
      >
        Live Demo
      </button>
    </div>
  </div>
</div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
