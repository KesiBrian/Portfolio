"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Hama Nasi",
    description:
      "A full-stack movers application providing Company and User Dashboards for managing moving services efficiently.",
    tech: ["Next.js", "Tailwind CSS", "Lucide-React", "PostgreSQL", "OAuth"],
    features: [
      "User Dashboard – Manage moving requests",
      "Company Dashboard – Manage customer orders",
      "Authentication System – Secure login",
      "Responsive UI",
      "PostgreSQL Database"
    ],
    url: "https://hama-nasi.vercel.app/"
  },
  {
    title: "BookBus",
    description:
      "A modern bus booking platform allowing passengers to book seats and bus operators to manage buses, drivers, and transactions.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    features: [
      "Book Bus Tickets",
      "Seat Selection by Category",
      "User Dashboard – Booking Management",
      "Admin Panel – Manage Buses, Drivers, Reviews",
      "Driver Dashboard – Route Management"
    ],
    url: "https://book-bus-eosin.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-black text-white"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          Projects
        </span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#1f1f1f] rounded-xl shadow-lg p-6 md:p-8 transition hover:scale-[1.02] hover:shadow-blue-700/30"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>
            <ul className="text-sm text-gray-400 mb-4 list-disc pl-5 space-y-1">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-400 mb-3">
              <span className="font-medium text-white">Tech Stack:</span> {project.tech.join(", ")}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 hover:underline"
            >
              Visit Project <ExternalLink size={18} />
            </a>
          </div>
        ))}
      </div>

      <p className="text-gray-500 italic text-sm md:text-base mt-10 text-center">
        More projects coming soon. Stay tuned!
      </p>
    </section>
  );
}
