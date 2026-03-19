import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start Trading on Binance – Get Started Today",
  description:
    "Join Binance, the world's largest crypto exchange. Step-by-step guide to get started with crypto trading. Sign up through our referral link.",
  keywords: [
    "binance signup",
    "crypto trading",
    "binance referral",
    "bitcoin",
    "cryptocurrency exchange",
    "start trading crypto",
  ],
  openGraph: {
    title: "Start Trading on Binance – Get Started Today",
    description:
      "Join Binance, the world's largest crypto exchange. Step-by-step guide to get started with crypto trading.",
    type: "website",
  },
  alternates: {
    canonical: "/binance",
  },
};

const REFERRAL_LINK = "https://www.binance.com/register?ref=12852887";

export default function BinancePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white tracking-tight">
            AI<span className="text-indigo-400">Works</span>
          </Link>
          <a
            href={REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-yellow-500 hover:bg-yellow-400 text-gray-950 px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Sign Up Free
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm px-4 py-1.5 rounded-full mb-6">
            <span>🌍</span>
            <span>World&apos;s largest crypto exchange</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Start Trading Crypto on{" "}
            <span className="text-yellow-400">Binance</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Binance is trusted by 200 million+ users in 180+ countries. Buy,
            sell, and trade Bitcoin, Ethereum, and thousands of other coins —
            all in one place.
          </p>
          <a
            href={REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-yellow-500/20"
          >
            Create Your Free Binance Account →
          </a>
          <p className="text-gray-500 text-sm mt-4">
            No credit card required · Free to sign up · Takes 2 minutes
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 border-y border-gray-800">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "200M+", label: "Registered Users" },
            { value: "350+", label: "Cryptocurrencies" },
            { value: "$76B+", label: "24h Trading Volume" },
            { value: "180+", label: "Countries Supported" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Binance?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "💰",
                title: "Low Trading Fees",
                description:
                  "Start with fees as low as 0.1% per trade — among the lowest in the industry. Reduce them further with BNB.",
              },
              {
                icon: "🔒",
                title: "Industry-Leading Security",
                description:
                  "SAFU fund, 2FA, cold wallet storage, and advanced risk controls protect your assets 24/7.",
              },
              {
                icon: "📱",
                title: "Trade Anywhere",
                description:
                  "Powerful mobile app for iOS and Android. Trade on the go with the full feature set.",
              },
              {
                icon: "🎓",
                title: "Binance Academy",
                description:
                  "Free educational resources for beginners and pros. Learn trading strategies, DeFi, NFTs, and more.",
              },
              {
                icon: "💎",
                title: "350+ Coins",
                description:
                  "Access Bitcoin, Ethereum, BNB, Solana, and hundreds of altcoins all in one platform.",
              },
              {
                icon: "📈",
                title: "Advanced Tools",
                description:
                  "Spot trading, futures, staking, savings, and P2P — everything you need to grow your portfolio.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-yellow-500/30 transition-colors"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-step guide */}
      <section className="py-20 px-4 sm:px-6 bg-gray-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Get Started in 4 Simple Steps
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Your account can be live in under 10 minutes.
          </p>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Create Your Account",
                description:
                  'Click the button below and sign up with your email address. Choose a strong password. Use our referral link to unlock any sign-up bonuses.',
              },
              {
                step: "2",
                title: "Verify Your Identity",
                description:
                  "Complete KYC (Know Your Customer) verification. Upload a government-issued ID and take a selfie. Typically approved within minutes.",
              },
              {
                step: "3",
                title: "Add Funds",
                description:
                  "Deposit via bank transfer, credit/debit card, or transfer crypto from another wallet. As little as $10 to start.",
              },
              {
                step: "4",
                title: "Start Trading",
                description:
                  "Browse 350+ cryptocurrencies. Place your first buy order. Consider starting with Bitcoin or Ethereum if you're new to crypto.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 text-gray-950 rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={REFERRAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-yellow-500/20"
            >
              Sign Up on Binance Now →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Is Binance safe to use?",
                a: "Binance is the world's largest crypto exchange by volume with over a decade of operation. It employs industry-leading security including cold storage, 2FA, and a dedicated SAFU (Secure Asset Fund for Users) to protect against breaches.",
              },
              {
                q: "How much money do I need to start?",
                a: "You can start with as little as $10-15 depending on your payment method. There is no minimum account balance requirement.",
              },
              {
                q: "What cryptocurrencies can I buy?",
                a: "Binance supports 350+ cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), BNB, Solana (SOL), and hundreds of altcoins. New coins are added regularly.",
              },
              {
                q: "Are there fees?",
                a: "Standard spot trading fees are 0.1% per trade. You can reduce this by holding BNB (Binance's native token) to pay fees at a discount. Deposit fees vary by payment method.",
              },
              {
                q: "Is crypto trading right for me?",
                a: "Crypto is a high-risk, high-reward asset class. Prices are volatile. Only invest money you can afford to lose, do your own research, and consider starting with small amounts to learn the market.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6"
              >
                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 bg-gray-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-gray-400 mb-8">
            Join 200 million+ users on the world&apos;s most trusted crypto exchange.
          </p>
          <a
            href={REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-yellow-500/20"
          >
            Create Free Binance Account →
          </a>
          <p className="text-gray-500 text-sm mt-4">
            No credit card required · Free to sign up
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-xs leading-relaxed text-center">
            <strong className="text-gray-500">Disclaimer:</strong> Cryptocurrency
            trading involves significant risk of loss. The value of
            cryptocurrencies can be extremely volatile. This page contains a
            referral link — we may earn a commission if you sign up and trade on
            Binance. This is not financial advice. Past performance is not
            indicative of future results. Please do your own research and only
            invest what you can afford to lose. Availability of Binance services
            may vary by jurisdiction.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>© 2026 AI Works. All rights reserved.</span>
          <Link href="/" className="hover:text-gray-300 transition-colors">
            ← Back to AI Works
          </Link>
        </div>
      </footer>
    </main>
  );
}
