import SectionHeading from "@/components/helper/SectionHeading";
import { skillsData } from "@/data/Data";
import React from "react";
import Skillcart from "./Skillcart";

export default function Skill() {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Skill</SectionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center ">
        {skillsData.map((data) => {
          return (
            <div key={data.id}>
              {/* skillcart */}
              <Skillcart skill={data}></Skillcart>
            </div>
          );
        })}
      </div>
    </div>
  );
}
