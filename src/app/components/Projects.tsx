"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-[#121212] text-white text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          Featured Project
        </span>
      </h2>

      {/* Project Card */}
      <div className="bg-[#1f1f1f] rounded-xl shadow-lg p-6 md:p-10 w-full max-w-4xl text-left mb-12 transition hover:scale-[1.02] hover:shadow-blue-700/30">
        <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-3">
          Hama Nasi
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          We specialize in efficient and reliable moving services, ensuring a
          smooth transition for all your needs.
        </p>
        <a
          href="https://your-project-link.com" // Replace with real URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-500 hover:underline"
        >
          Visit Project <ExternalLink size={18} />
        </a>
      </div>

      {/* Coming Soon */}
      <p className="text-gray-500 italic text-sm md:text-base">
        More projects coming soon. Stay tuned!
      </p>
    </section>
  );
}
