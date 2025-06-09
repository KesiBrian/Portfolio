"use client";
import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-4 text-center bg-black text-white"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Hi, I'm Brian
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
        A full stack developer based in Nairobi, Kenya.
      </p>

      <a
        href="#about"
        className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold text-base shadow-lg transition duration-300 ease-in-out hover:shadow-purple-500/50"
      >
        Learn More About Me
      </a>
    </section>
  );
}
