import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f0715] text-white py-10">
      <div className="w-[90%] max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo or Name */}
        <div className="text-lg font-semibold tracking-wide text-center md:text-left">
          © {new Date().getFullYear()} YourName. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-all duration-200"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-all duration-200"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-all duration-200"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
