"use client";
import React from "react";
import { FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1a1a1a] text-gray-300 px-6 py-10 mt-20 text-center relative">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Contact Info */}
        <div className="text-sm sm:text-base space-y-1">
          <p>
            Email:{" "}
            <a
              href="mailto:briankesim@gmail.com"
              className="text-blue-400 hover:underline"
            >
              briankesim@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+254795439412" className="text-blue-400 hover:underline">
              0795 439 412
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/brian-kesi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Brian Kesi
            </a>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/brian-kesi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Credit */}
        <div className="text-xs text-gray-500 pt-4">
          &copy; {new Date().getFullYear()} Brian Kesi. Built with Next.js & Tailwind CSS.
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
        aria-label="Scroll to Top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
