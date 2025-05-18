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
      const res = await fetch("https://formspree.io/f/your-form-id", {
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
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-white text-gray-900 dark:bg-black dark:text-white">
      <div className="max-w-xl w-full">
        <h2 className="text-4xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-700">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          ></textarea>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-sm text-center">{status}</p>}

        <div className="mt-8 text-sm text-center">
          <p>Email: <a href="mailto:briankesim@gmail.com" className="text-blue-600 dark:text-blue-400">briankesim@gmail.com</a></p>
          <p>Phone: <a href="tel:+254795439412" className="text-blue-600 dark:text-blue-400">0795 439 412</a></p>
          <p>
            GitHub: <a href="https://github.com/KesiBrian" className="text-blue-600 dark:text-blue-400" target="_blank">KesiBrian</a>
          </p>
          <p>
            LinkedIn: <a href="https://linkedin.com/in/brian-kesi-a82868324" className="text-blue-600 dark:text-blue-400" target="_blank">Brian Kesi</a>
          </p>
        </div>
      </div>
    </section>
  );
}
