export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-indigo-950 border border-indigo-800 text-indigo-300 text-sm px-3 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          AI-powered development team
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          We build products that{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            work for you
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          From landing pages to full-stack SaaS products — we design, build, and ship
          software fast. Specialising in AI integrations, automation, and revenue-generating tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-colors"
          >
            Start a project
          </a>
          <a
            href="#services"
            className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-colors"
          >
            See our services
          </a>
        </div>
      </div>
    </section>
  );
}
