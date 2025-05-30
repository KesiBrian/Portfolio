"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white">Brian Kesi</div>
        <div className="space-x-6 text-sm font-medium text-white">
          <Link href="#home" className="hover:text-purple-400 transition">
            Home
          </Link>
          <Link href="#about" className="hover:text-purple-400 transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-purple-400 transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-purple-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
