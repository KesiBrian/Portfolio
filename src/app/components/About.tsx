import React from "react";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white text-gray-900 dark:bg-black dark:text-white">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-700">About Me</h2>
        <p className="text-lg mb-4">
          Hey! I'm <span className="font-semibold">Brian Kesi</span>, a full stack developer based in <span className="font-semibold">Nairobi, Kenya</span>.
        </p>
        <p className="text-lg mb-4">
          I'm currently working with technologies like <span className="font-semibold">React</span>, <span className="font-semibold">Next.js</span>, <span className="font-semibold">JavaScript</span>, <span className="font-semibold">Tailwind CSS</span>, <span className="font-semibold">Python</span>, and <span className="font-semibold">Flask</span>. I also have experience with <span className="font-semibold">HTML</span>, <span className="font-semibold">CSS</span>, and <span className="font-semibold">Bootstrap</span>.
        </p>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">What I Offer</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responsive frontend development with React and Tailwind CSS</li>
            <li>Full-stack web apps using Next.js and Flask</li>
            <li>Clean and maintainable code</li>
            <li>API integration and backend development</li>
            <li>Custom landing pages and personal portfolios</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
