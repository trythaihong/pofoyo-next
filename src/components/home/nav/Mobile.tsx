import { NavLink } from "@/constant/Constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

export default function Mobile({ closeNav, showNav }: Props) {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <>
      {/* Overlay */}
      {showNav && (
        <div
          className="fixed inset-0 bg-black opacity-70 z-[999]"
          onClick={closeNav}
        />
      )}

      {/* Side Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-[#0f0715] text-white z-[1000] transform ${navOpen} transition-transform duration-500 ease-in-out flex flex-col justify-center space-y-6 px-6`}
      >
        {NavLink.map((data) => (
          <Link key={data.id} href={data.url} onClick={closeNav}>
            <p className="nav_link text-[20px] border-b-[1.5px] pb-2 border-white sm:text-[30px]">
              {data.label}
            </p>
          </Link>
        ))}

        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer"
        />
      </div>
    </>
  );
}
