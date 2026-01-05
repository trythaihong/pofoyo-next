"use client";

import SectionHeading from "@/components/helper/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { phpProject } from "@/data/Data";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Dynamic() {
  return (
    <section className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>PHP Project</SectionHeading>

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
          {phpProject.map((project) => (
            <SwiperSlide key={project.id}>
              <div
                data-aos="fade-up"
                className="bg-blue-950 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-full h-[400px] flex flex-col"
              >
                {/* Image (NOT clickable) */}
                <div className="relative w-full h-[260px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover p-5"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between text-center">
                  <div>
                    <h2 className="text-white text-lg font-semibold mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.des}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 justify-center">
                    <Link
                      href={project.url}
                      target="_blank"
                      className="px-4 py-2 text-sm rounded-md bg-gray-800 text-white hover:bg-gray-700 transition"
                    >
                      GitHub
                    </Link>

                    <Link
                      href={project.live}
                      target="_blank"
                      className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-500 transition"
                    >
                      Live Demo
                    </Link>
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
