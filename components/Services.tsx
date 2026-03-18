const services = [
  {
    icon: "🌐",
    title: "Web Apps",
    description:
      "Full-stack web applications built with modern frameworks. From MVP to production-ready — fast.",
  },
  {
    icon: "⚡",
    title: "APIs & Backends",
    description:
      "Robust REST and GraphQL APIs. Scalable backends that integrate with any frontend or third-party service.",
  },
  {
    icon: "🤖",
    title: "AI Integrations",
    description:
      "Embed AI into your product. Chat, document processing, code generation, summarisation — powered by the latest LLMs.",
  },
  {
    icon: "🔧",
    title: "Automation",
    description:
      "Eliminate repetitive work. We build custom automation pipelines, bots, and workflows that save you hours every week.",
  },
  {
    icon: "💳",
    title: "Payment & SaaS",
    description:
      "Stripe integration, subscription management, billing dashboards. Turn your product into a revenue stream.",
  },
  {
    icon: "🚀",
    title: "Landing Pages",
    description:
      "Conversion-focused, SEO-optimised landing pages. Built fast, deployed instantly, ready to capture leads.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What we build</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            We cover the full stack — from concept to deployment. No need to hire multiple agencies.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-indigo-800 transition-colors"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
