import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Emon Karmoker · AI / ML Engineer",
  description:
    "The working notebook of Emon Karmoker, an AI / ML Engineer building LLM applications, autonomous agents, RAG systems, and deep learning research. 2x IEEE and Springer publications.",
  openGraph: {
    title: "Emon Karmoker · AI / ML Engineer",
    description:
      "LLM applications, autonomous agents, RAG systems, and deep learning research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fraunces.variable} ${mono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
