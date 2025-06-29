import SectionHeading from "@/components/helper/SectionHeading";
import React from "react";
import Toolcard from "./toolcard";
import { toolData } from "@/data/Data";

export default function tool() {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Tool</SectionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center ">
        {toolData.map((data) => {
          return (
            <div key={data.id}>
              {/* skillcart */}
              <Toolcard skill={data}></Toolcard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
