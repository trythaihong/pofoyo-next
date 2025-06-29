import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTelegramPlane,
  FaLinkedin,
} from "react-icons/fa";
import React from "react";
import Link from "next/link";

export default function ContactInfo() {
  return (
    <div
      data-aos="fade-left"
      className="bg-[#1a0f26] text-white p-8 rounded-2xl w-full max-w-2xl mx-auto shadow-xl border border-indigo-800"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-indigo-400">
        Contact Information
      </h2>

      <ul className="space-y-5 text-base">
        {/* LinkedIn */}
        <li className="flex items-center gap-4">
          <FaLinkedin className="text-indigo-500" />
          <Link
            href="https://www.linkedin.com/in/try-thaihong-a868a636b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Try Thaihong
          </Link>
        </li>

        {/* Email */}
        <li className="flex items-center gap-4">
          <FaEnvelope className="text-indigo-500" />
          <a href="mailto:hongop34@gmail.com" className="hover:underline">
            hongop34@gmail.com
          </a>
        </li>

        {/* Phone */}
        <li className="flex items-center gap-4">
          <FaPhone className="text-indigo-500" />
          <a href="tel:+85561977365" className="hover:underline">
            +855 61 97 73 65
          </a>
        </li>

        {/* Telegram */}
        <li className="flex items-center gap-4">
          <FaTelegramPlane className="text-indigo-500" />
          <a
            href="https://t.me/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            +855 61 97 73 65
          </a>
        </li>

        {/* Location */}
        <li className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-indigo-500" />
          <span>Siem Reap, Cambodia</span>
        </li>
      </ul>
    </div>
  );
}
