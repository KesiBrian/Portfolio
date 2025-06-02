"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-[#121212] text-white text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          Featured Project
        </span>
      </h2>

      {/* Project Card */}
      <div className="bg-[#1f1f1f] rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-5xl text-left mb-12 transition-all hover:scale-[1.02] hover:shadow-cyan-700/30">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-2">
            Hama Nasi
          </h3>
          <p className="text-gray-300 leading-relaxed">
            A full-stack movers application built with modern tools like Next.js, Tailwind CSS, and PostgreSQL. Hama Nasi offers both a customer and company dashboard for efficiently managing moving services across Kenya.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-blue-500 mb-1">Tech Stack</h4>
          <ul className="text-sm text-gray-400 list-disc list-inside grid grid-cols-2 md:grid-cols-3 gap-y-1">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Lucide-React</li>
            <li>PostgreSQL</li>
            <li>OAuth Authentication</li>
            <li>Next.js API Routes</li>
          </ul>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-blue-500 mb-1">Key Features</h4>
          <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
            <li>User Dashboard – Manage personal moving requests</li>
            <li>Company Dashboard – View and manage customer orders</li>
            <li>Secure Authentication – OAuth integration</li>
            <li>Responsive UI – Optimized for all screen sizes</li>
            <li>Database-driven – Reliable data storage with PostgreSQL</li>
          </ul>
        </div>

        {/* Link */}
        <a
          href="https://hama-nasi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-500 hover:underline text-sm font-medium"
        >
          Visit Live Project <ExternalLink size={18} />
        </a>
      </div>

      {/* Placeholder for more projects */}
      <p className="text-gray-500 italic text-sm md:text-base">
        More projects coming soon. Stay tuned!
      </p>
    </section>
  );
}
