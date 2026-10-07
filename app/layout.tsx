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
  title: "Samuel Emmanuel — Product Engineer",
  description:
    "Product Engineer specialising in AI-assisted development. Building reliable digital products with product thinking, software engineering, and infrastructure experience. Based in Lagos, Nigeria.",
  keywords: [
    "Product Engineer",
    "Software Engineer",
    "AI-Assisted Development",
    "Full-Stack Developer",
    "TypeScript",
    "Next.js",
    "Lagos",
    "Nigeria",
  ],
  authors: [{ name: "Samuel Emmanuel" }],
  openGraph: {
    title: "Samuel Emmanuel — Product Engineer",
    description:
      "I help turn ideas into well-designed, reliable products people actually want to use.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Samuel Emmanuel — Product Engineer",
    description:
      "I help turn ideas into well-designed, reliable products people actually want to use.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                let theme = localStorage.getItem("theme");
                if (!theme) {
                  theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                }
                if (theme === "dark") {
                  document.documentElement.classList.add("dark");
                  document.documentElement.classList.remove("light");
                } else {
                  document.documentElement.classList.add("light");
                  document.documentElement.classList.remove("dark");
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden text-zinc-900 bg-white dark:bg-zinc-950 dark:text-zinc-50">{children}</body>
    </html>
  );
}
