import SectionHeading from "@/components/helper/SectionHeading";
import Image from "next/image";
import React from "react";

export default function Cer() {
  const certificates = [
    {
      image: "/images/cer/cerIt1.jpg",
      title: "Frontend course",
      issuer: "Master Id",
      date: "August 2024",
    },
    {
      image: "/images/cer/cerit2.jpg",
      title: "Backend Course",
      issuer: "Master Id",
      date: "April 2025",
    },
  ];

  return (
    <section id="cer" className="pt-16 pb-16 bg-[#050709] text-gray-300">
      <SectionHeading>Certificates</SectionHeading>

      <div className="w-[90%] md:w-[60%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-lg border border-blue-900/50 hover:border-blue-400 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-blue-900/20 relative"
          >
            <div className="relative overflow-hidden p-3 text-center">
              <Image
                src={cert.image}
                alt={`Certificate ${index + 1}`}
                className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {cert.title}
                </h3>
                <p className="text-blue-300 text-sm mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                  Issued by: {cert.issuer}
                </p>
                <p className="text-gray-300 text-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {cert.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
