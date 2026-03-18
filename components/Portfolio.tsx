const cases = [
  {
    tag: "SaaS",
    title: "AI README Generator",
    description:
      "Paste a GitHub URL or upload a zip — get a polished README in seconds. Built with Next.js + Claude API.",
    status: "In development",
  },
  {
    tag: "Automation",
    title: "Workflow Automation Bot",
    description:
      "Custom Slack bot that automates repetitive reporting tasks, saving a team 10+ hours per week.",
    status: "Coming soon",
  },
  {
    tag: "Web App",
    title: "Client Portal",
    description:
      "Full-stack client portal with auth, file uploads, invoicing, and real-time project status.",
    status: "Coming soon",
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs bg-indigo-950 border border-indigo-800 text-indigo-300 px-2.5 py-1 rounded-full">
                  {c.tag}
                </span>
                <span className="text-xs text-gray-500">{c.status}</span>
              </div>
              <h3 className="text-base font-semibold text-white">{c.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
