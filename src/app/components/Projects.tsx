import React from "react";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white text-gray-900 dark:bg-black dark:text-white">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-700">Featured Project</h2>
        <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Hama Nasi</h3>
          <p className="text-lg mb-4">
            We specialize in efficient and reliable moving services, ensuring a smooth transition for all your needs.
          </p>
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <a href="https://hama-nasi.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:underline">
              Visit Project <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-lg text-gray-700 dark:text-gray-300">
          More projects coming soon. Stay tuned!
        </p>
      </div>
    </section>
  );
}
