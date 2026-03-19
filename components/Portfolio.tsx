import React from "react";

const cases = [
  {
    tag: "SaaS",
    title: "AI README Generator",
    description:
      "Paste a GitHub URL or upload a zip — get a polished README in seconds. Built with Next.js + Claude API.",
    status: "Live",
    href: "https://readme-gen-sable.vercel.app",
  },
  {
    tag: "SaaS",
    title: "AI Code Review",
    description:
      "Paste any code snippet and get an instant AI-powered review covering bugs, security issues, performance, and style — with severity levels. BYOK + demo mode.",
    status: "Live",
    href: "https://code-review-topaz.vercel.app",
  },
  {
    tag: "SaaS",
    title: "TestGen·AI — Unit Test Generator",
    description:
      "Paste any code and get complete unit tests in seconds — Jest, pytest, Go, and Rust supported. BYOK or try with demo mode, no sign-up needed.",
    status: "Live",
    href: "https://unit-test-gen.vercel.app",
  },
  {
    tag: "SaaS",
    title: "CommitCraft·AI — Commit Message Generator",
    description:
      "Paste a diff or describe your changes and get a clear, conventional commit message instantly. BYOK + demo mode, no sign-up needed.",
    status: "Live",
    href: "https://commit-msg-gen.vercel.app",
  },
  {
    tag: "SaaS",
    title: "EnvGen·AI — .env File Generator",
    description:
      "Paste your package.json, docker-compose, or config files and get a complete .env.example with all variables, sensible defaults, and inline docs in seconds. BYOK + demo mode.",
    status: "Live",
    href: "https://env-gen.vercel.app",
  },
  {
    tag: "Automation",
    title: "Workflow Automation Bot",
    description:
      "Custom Slack bot that automates repetitive reporting tasks, saving a team 10+ hours per week.",
    status: "Coming soon",
    href: null,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What we&apos;re building</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Our portfolio is growing. Here&apos;s a preview of current and upcoming projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c) => {
            const CardWrapper = c.href
              ? ({ children }: { children: React.ReactNode }) => (
                  <a
                    href={c.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-indigo-700 transition-colors group"
                  >
                    {children}
                  </a>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4">
                    {children}
                  </div>
                );
            return (
              <CardWrapper key={c.title}>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-indigo-950 border border-indigo-800 text-indigo-300 px-2.5 py-1 rounded-full">
                    {c.tag}
                  </span>
                  <span className={`text-xs ${c.status === "Live" ? "text-emerald-400" : "text-gray-500"}`}>
                    {c.status}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white group-only:text-white">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.description}</p>
                {c.href && (
                  <span className="text-indigo-400 text-sm mt-auto">Try it →</span>
                )}
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
