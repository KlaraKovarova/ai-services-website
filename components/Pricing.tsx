const tools = [
  {
    name: "ReadmeGen",
    tagline: "AI README generator",
    href: "https://readme-gen-sable.vercel.app",
    color: "indigo",
  },
  {
    name: "CodeReview·AI",
    tagline: "Instant AI code reviews",
    href: "https://codereview-ai.vercel.app",
    color: "violet",
  },
];

const FREE_FEATURES = [
  "5 uses per day",
  "Full AI output",
  "No account required",
];

const PRO_FEATURES = [
  "Unlimited uses",
  "Priority processing",
  "Early access to new features",
  "Cancel anytime",
];

const colorMap: Record<string, { badge: string; button: string; border: string }> = {
  indigo: {
    badge: "bg-indigo-900/40 text-indigo-300 border-indigo-700/50",
    button: "bg-indigo-600 hover:bg-indigo-500",
    border: "border-indigo-700/40",
  },
  violet: {
    badge: "bg-violet-900/40 text-violet-300 border-violet-700/50",
    button: "bg-violet-600 hover:bg-violet-500",
    border: "border-violet-700/40",
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Simple pricing</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            All tools are free to try. Upgrade for $5/month per tool — unlimited usage, no
            surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool) => {
            const c = colorMap[tool.color];
            return (
              <div
                key={tool.name}
                className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"
              >
                {/* Tool header */}
                <div className={`border-b border-gray-800 px-6 py-5 flex items-center gap-3`}>
                  <div>
                    <h3 className="text-lg font-bold text-white">{tool.name}</h3>
                    <p className="text-sm text-gray-500">{tool.tagline}</p>
                  </div>
                  <span
                    className={`ml-auto text-xs font-medium px-2.5 py-1 rounded-full border ${c.badge}`}
                  >
                    Live
                  </span>
                </div>

                {/* Tiers */}
                <div className="grid grid-cols-2 divide-x divide-gray-800">
                  {/* Free */}
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                      Free
                    </p>
                    <p className="text-3xl font-bold text-white mb-1">
                      $0
                      <span className="text-sm font-normal text-gray-500">/mo</span>
                    </p>
                    <ul className="mt-4 space-y-2">
                      {FREE_FEATURES.map((f) => (
                        <li key={f} className="text-sm text-gray-400 flex items-center gap-2">
                          <span className="text-gray-600">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pro */}
                  <div className={`p-6 bg-gray-800/40`}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                      Pro
                    </p>
                    <p className="text-3xl font-bold text-white mb-1">
                      $5
                      <span className="text-sm font-normal text-gray-500">/mo</span>
                    </p>
                    <ul className="mt-4 space-y-2">
                      {PRO_FEATURES.map((f) => (
                        <li key={f} className="text-sm text-gray-300 flex items-center gap-2">
                          <span className="text-green-500">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 py-5 border-t border-gray-800">
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center ${c.button} text-white py-3 rounded-xl font-semibold text-sm transition-colors`}
                  >
                    Try {tool.name} free →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-600 mt-10">
          Payments handled by{" "}
          <a
            href="https://lemonsqueezy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-400 underline"
          >
            LemonSqueezy
          </a>{" "}
          — tax compliance and billing handled for you. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
