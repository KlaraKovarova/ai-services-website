"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    // Store in localStorage as a fallback record
    const existing = JSON.parse(localStorage.getItem("aiworks_signups") ?? "[]");
    existing.push({ email, at: new Date().toISOString() });
    localStorage.setItem("aiworks_signups", JSON.stringify(existing));

    // Open mailto so the signup actually reaches us
    window.location.href = `mailto:klara@aiworks.dev?subject=Newsletter+signup&body=Please+add+me+to+the+list:+${encodeURIComponent(email)}`;

    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="py-16 px-4 sm:px-6 border-t border-gray-800">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
          Early access
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Get notified when premium features launch
        </h2>
        <p className="text-gray-400 mb-8 text-sm sm:text-base">
          Join developers already on the list. No spam — just product updates and launch news.
        </p>

        {submitted ? (
          <p className="text-green-400 font-medium">
            You&rsquo;re on the list! We&rsquo;ll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors whitespace-nowrap"
            >
              Notify me
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
