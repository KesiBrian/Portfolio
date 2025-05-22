"use client";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-[#121212] text-white text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          About Me
        </span>
      </h2>

      <p className="max-w-3xl text-base md:text-lg text-gray-400 mb-6 leading-relaxed">
        Hey! I'm Brian Kesi, a full stack developer based in Nairobi, Kenya.
        <br />
        I build responsive, user-focused web applications using modern tech like{" "}
        <span className="text-white font-semibold">
          React, Next.js, Tailwind CSS, Python, and Flask
        </span>
        . I also have experience with HTML, CSS, and Bootstrap.
      </p>

      <div className="bg-[#1f1f1f] rounded-xl p-6 md:p-10 shadow-lg w-full max-w-4xl">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-400">
          What I Offer
        </h3>
        <ul className="text-left list-disc list-inside space-y-2 text-gray-300">
          <li>Responsive frontend development with React and Tailwind CSS</li>
          <li>Full-stack web apps using Next.js and Flask</li>
          <li>Clean and maintainable code</li>
          <li>API integration and backend development</li>
          <li>Custom landing pages and personal portfolios</li>
        </ul>
      </div>
    </section>
  );
}
