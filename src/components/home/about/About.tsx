"use client";

import SectionHeading from "@/components/helper/SectionHeading";
import React from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaHome,
} from "react-icons/fa";

export default function AboutMe() {
  const personalInfo = [
    {
      label: "Education",
      values: ["Bachelor's in Computer Science"],
      icon: <FaGraduationCap className="text-blue-400" />,
    },
    {
      label: "Experience",
      values: ["Graphic Design", "Internship in Web Development"],
      icon: <FaBriefcase className="text-green-400" />,
    },
    {
      label: "Date of Birth",
      values: ["June 21, 2005"],
      icon: <FaBirthdayCake className="text-pink-400" />,
    },
    {
      label: "Place of Birth",
      values: [
        "ViheaChen village, Svaydokom commune, Siem Reap city, Cambodia",
      ],
      icon: <FaMapMarkerAlt className="text-yellow-400" />,
    },
    {
      label: "Current Location",
      values: ["Viel village, Korkchok commune, Siem Reap city, Cambodia"],
      icon: <FaHome className="text-purple-400" />,
    },
  ];

  return (
    <section
      id="about"
      className="pt-16 pb-24 bg-gradient-to-b from-[#0a0c10] via-[#050709] to-[#0f1115] text-gray-300 min-h-screen"
    >
      {/* Heading */}
      <SectionHeading>About Me</SectionHeading>

      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 items-start">
        {/* About Text */}
        <div data-aos="fade-right" className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Hi, Im Hong <span className="inline-block animate-wave">👋</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I am a passionate and dedicated web developer focused on creating
            clean, modern, and responsive web applications. I love learning new
            technologies and building useful projects that make a difference.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Here’s a snapshot of my background and experience.
          </p>

          <h3 className="text-white text-2xl font-semibold mb-4 mt-8 border-l-4 border-blue-500 pl-4">
            Education & Experience in Web Development
          </h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2 text-lg">
            <li>Graduated frontend course at Master IT Siem Reap (4 months)</li>
            <li>
              Completed paid internship as frontend developer with a freelance
              team (3 months)
            </li>
            <li>
              Graduated backend course at Next Level PHP, Laravel, MySQL (4
              months)
            </li>
          </ul>
        </div>

        {/* Personal Info */}
        <div
          data-aos="fade-left"
          className="bg-[#12151b] p-10 rounded-xl shadow-2xl border border-gray-800"
        >
          <ul className="space-y-8">
            {personalInfo.map((info, index) => (
              <li key={index} className="flex items-start space-x-4">
                <div className="mt-1 text-2xl">{info.icon}</div>
                <div>
                  <span className="block text-gray-400 text-sm uppercase tracking-wide font-semibold mb-1">
                    {info.label}
                  </span>
                  <div className="space-y-1">
                    {info.values.map((val, i) => (
                      <p
                        key={i}
                        className="text-white text-lg font-medium leading-snug"
                      >
                        {val}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
