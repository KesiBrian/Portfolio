"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://formspree.io/f/mqaqoqaj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-black text-white"
    >
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Contact Me
          </span>
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-[#1f1f1f] p-8 rounded-xl shadow-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2a2a2a] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2a2a2a] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 rounded bg-[#2a2a2a] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-medium"
          >
            Send Message
          </button>
          {status && <p className="text-center text-sm mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}
