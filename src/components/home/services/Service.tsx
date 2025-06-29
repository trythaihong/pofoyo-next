import SectionHeading from "@/components/helper/SectionHeading";
import { servicesData } from "@/data/Data";
import React from "react";
import ServiceCart from "./ServiceCart";

export default function Service() {
  return (
    <div id="service" className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Service</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20">
        {servicesData.map((data) => {
          return (
            <div key={data.id}>
              {/* serviccecart */}
              <ServiceCart service={data}></ServiceCart>
            </div>
          );
        })}
      </div>
    </div>
  );
}
