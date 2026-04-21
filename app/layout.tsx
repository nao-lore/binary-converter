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
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title:
    "Binary Converter - Binary, Decimal, Hex, Octal | binary-converter",
  description:
    "Free online binary converter. Convert between binary, decimal, hexadecimal, and octal instantly. Supports negative numbers, bit visualization, and ASCII reference.",
  keywords: [
    "binary converter",
    "binary to decimal",
    "decimal to binary",
    "hex converter",
    "octal converter",
    "number base converter",
  ],
  authors: [{ name: "binary-converter" }],
  openGraph: {
    title: "Binary Converter - Binary, Decimal, Hex, Octal",
    description:
      "Free online tool to convert between binary, decimal, hexadecimal, and octal. Real-time conversion with bit visualization.",
    url: "https://binary-converter.vercel.app",
    siteName: "binary-converter",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Binary Converter - Binary, Decimal, Hex, Octal",
    description:
      "Free online tool to convert between binary, decimal, hexadecimal, and octal. Real-time conversion with bit visualization.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://binary-converter.vercel.app",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Binary Converter",
              description:
                "Free online binary converter. Convert between binary, decimal, hexadecimal, and octal with real-time updates and bit visualization.",
              url: "https://binary-converter.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Binary to decimal conversion",
                "Decimal to binary conversion",
                "Hexadecimal conversion",
                "Octal conversion",
                "Bit visualization with 8-bit blocks",
                "Two's complement for negative numbers",
                "ASCII quick reference table",
                "One-click copy to clipboard",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
