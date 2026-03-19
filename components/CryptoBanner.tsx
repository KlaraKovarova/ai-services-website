export default function CryptoBanner() {
  return (
    <section className="py-8 px-4 sm:px-6 border-t border-gray-800 bg-gray-900/30">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🪙</span>
          <div>
            <p className="text-sm font-medium text-gray-300">Interested in crypto trading?</p>
            <p className="text-xs text-gray-500">Join 200M+ users on the world&apos;s largest exchange — commission may apply.</p>
          </div>
        </div>
        <a
          href="https://www.binance.com/register?ref=12852887"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-sm font-semibold bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 px-4 py-2 rounded-lg transition-colors"
        >
          Try Binance →
        </a>
      </div>
    </section>
  );
}
