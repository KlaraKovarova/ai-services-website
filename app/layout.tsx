import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://website-omega-one-91.vercel.app"
  ),
  title: "AI Works – AI-Powered Development Agency",
  description:
    "We build web apps, APIs, automation, and AI integrations for startups and businesses. Fast delivery, transparent pricing. Free developer tools included.",
  keywords: [
    "ai development agency",
    "ai integration",
    "web app development",
    "api development",
    "automation",
    "startup development",
  ],
  openGraph: {
    title: "AI Works – AI-Powered Development Agency",
    description:
      "We build web apps, APIs, automation, and AI integrations for startups and businesses. Fast delivery, transparent pricing.",
    type: "website",
    url: "/",
    siteName: "AI Works",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Works – AI-Powered Development Agency",
    description:
      "We build web apps, APIs, automation, and AI integrations for startups and businesses. Fast delivery, transparent pricing.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AI Works",
              description:
                "AI-powered development agency building web apps, APIs, and AI integrations for startups.",
              url: "https://website-omega-one-91.vercel.app",
              serviceType: [
                "Web Application Development",
                "API Development",
                "AI Integration",
                "Automation",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
