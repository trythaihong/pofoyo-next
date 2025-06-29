import SectionHeading from "@/components/helper/SectionHeading";
import React from "react";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <div id="contact" className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>Contact</SectionHeading>

      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto gap-10 mt-10">
        {/* This grid cell will center ContactInfo */}
        <div className="flex justify-center items-center">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
