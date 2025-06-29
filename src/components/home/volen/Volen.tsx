import SectionHeading from "@/components/helper/SectionHeading";
import React from "react";

export default function Volen() {
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <SectionHeading>Volunteer</SectionHeading>
      <div className="w-[90%] sm:w-[80%] mx-auto mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Assisted school students in learning basic coding skills, Microsoft
          Word, and Excel 3 Month
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Provided one-on-one and group instruction to help students understand
          fundamental computer concepts, including file management, word
          processing, spreadsheets, and introductory programming logic. Designed
          engaging practical activities and mini-projects to reinforce learning
          and boost problem-solving skills. Fostered a supportive learning
          environment by answering questions patiently and adapting teaching
          methods to different learning styles. Motivated students to explore
          technology further, building their confidence and digital literacy for
          academic and personal growth.
        </p>
      </div>
    </div>
  );
}
