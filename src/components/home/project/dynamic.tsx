"use client";

import SectionHeading from "@/components/helper/SectionHeading";
import { projectDynamic } from "@/data/Data";
import Image from "next/image";
import Link from "next/link";
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
                className="bg-blue-950 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-full h-[400px] flex flex-col"
              >
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-[300px]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover p-5"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </Link>

                <div className="p-4 flex-1 flex flex-col items-center justify-center text-center">
                  <h2 className="text-white text-lg font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-sm">{project.des}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
