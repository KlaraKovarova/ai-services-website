"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Simple mailto fallback — replace with real form endpoint when ready
    const subject = encodeURIComponent(`Project enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:hello@aiworks.dev?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 border-t border-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let&apos;s build something</h2>
        <p className="text-gray-400 text-lg mb-12">
          Tell us what you need. We&apos;ll get back to you within 24 hours.
        </p>
        {submitted ? (
          <div className="bg-indigo-950 border border-indigo-800 rounded-2xl p-8">
            <p className="text-indigo-300 font-medium">
              ✓ Opening your email client — we can&apos;t wait to hear from you!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1.5" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Smith"
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-indigo-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1.5" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-indigo-600 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5" htmlFor="message">
                What are you building?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Describe your project, goals, or questions..."
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-indigo-600 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-colors w-full sm:w-auto sm:self-end"
            >
              Send message
            </button>
          </form>
        )}
        <p className="text-gray-600 text-sm mt-6">
          Or email us directly at{" "}
          <a href="mailto:hello@aiworks.dev" className="text-indigo-400 hover:text-indigo-300">
            hello@aiworks.dev
          </a>
        </p>
      </div>
    </section>
  );
}
