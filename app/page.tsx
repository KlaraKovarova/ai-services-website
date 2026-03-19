import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import EmailSignup from "@/components/EmailSignup";
import CryptoBanner from "@/components/CryptoBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Works – AI-Powered Development Agency",
  description:
    "We build web apps, APIs, automation tools, and AI integrations for startups and businesses. Ship fast, scale smart.",
  keywords: ["AI development", "web apps", "APIs", "automation", "AI integration"],
  openGraph: {
    title: "AI Works – AI-Powered Development Agency",
    description:
      "We build web apps, APIs, automation tools, and AI integrations for startups and businesses.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <Nav />
      <Hero />
      <Services />
      <Pricing />
      <Portfolio />
      <Contact />
      <EmailSignup />
      <CryptoBanner />
      <Footer />
    </main>
  );
}
