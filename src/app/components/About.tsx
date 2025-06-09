"use client";
import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiFlask,
  SiPostgresql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-black text-white text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
        About Me
      </h2>

      <p className="max-w-3xl text-gray-300 mb-10 leading-relaxed text-base md:text-lg">
        I'm <span className="font-semibold text-white">Brian Kesi</span>, a passionate full-stack developer based in Nairobi, Kenya.
        I specialize in building dynamic, responsive web applications that deliver smooth user experiences — using powerful tools like{" "}
        <span className="text-white font-semibold">React, Next.js, Tailwind CSS, Python</span>, and{" "}
        <span className="text-white font-semibold">Flask</span>. I enjoy transforming ideas into real-world products that solve problems
        and create impact.
        <br /><br />
        When I'm not coding, I'm likely exploring new tech, fine-tuning UI details, or helping others break into development.
      </p>

      <div className="bg-[#1f1f1f] rounded-xl shadow-lg p-6 md:p-8 w-full max-w-3xl">
        <h3 className="text-xl font-bold text-purple-500 mb-4">What I Offer</h3>
        <ul className="text-left text-gray-300 list-disc list-inside space-y-2 text-sm md:text-base">
          <li>Responsive front-end development with React and Tailwind CSS</li>
          <li>Full-stack web apps with Next.js, Flask, and PostgreSQL</li>
          <li>RESTful API development and backend integration</li>
          <li>Clean, scalable, and maintainable code</li>
          <li>Custom dashboards, landing pages, and portfolio websites</li>
        </ul>
      </div>

      {/* Tech Stack Icons */}
      <div className="mt-16 w-full max-w-4xl">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Tech Stack
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center text-5xl text-gray-400">
          {[
            { Icon: SiReact, hover: "hover:text-cyan-400", title: "React" },
            { Icon: SiNextdotjs, hover: "hover:text-white", title: "Next.js" },
            { Icon: SiTailwindcss, hover: "hover:text-sky-400", title: "Tailwind CSS" },
            { Icon: SiPython, hover: "hover:text-yellow-300", title: "Python" },
            { Icon: SiFlask, hover: "hover:text-gray-300", title: "Flask" },
            { Icon: SiPostgresql, hover: "hover:text-blue-400", title: "PostgreSQL" },
            { Icon: SiJavascript, hover: "hover:text-yellow-400", title: "JavaScript" },
            { Icon: SiHtml5, hover: "hover:text-orange-500", title: "HTML5" },
            { Icon: SiCss3, hover: "hover:text-blue-500", title: "CSS3" },
            { Icon: SiBootstrap, hover: "hover:text-purple-600", title: "Bootstrap" },
          ].map(({ Icon, hover, title }, index) => (
            <div
              key={index}
              className={`text-gray-400 ${hover} transform transition duration-300 hover:scale-110`}
              title={title}
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
