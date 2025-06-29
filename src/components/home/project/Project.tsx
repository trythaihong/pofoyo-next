"use client";

import SectionHeading from "@/components/helper/SectionHeading";
import { projectData } from "@/data/Data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Project() {
  return (
    <div id="project" className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>Static Project</SectionHeading>

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
          {projectData.map((data) => (
            <SwiperSlide key={data.id}>
              <div
                data-aos="fade-up"
                className="bg-blue-950 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 w-full h-[400px] flex flex-col"
              >
                <Link href={data.url} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={data.image}
                      alt={`Screenshot of project ${data.title}`}
                      fill
                      className="object-cover p-5"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div>
                </Link>
                <div className="p-4 flex-1 flex items-center justify-center">
                  <h2 className="text-white text-center">{data.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
