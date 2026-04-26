import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Play Nearby — Find Local Sports Partners",
  description: "Discover matches and sports partners near you. Join games, find players, and play together.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read user's dark mode preference from DB
  let darkMode = true; // default to dark
  try {
    const session = await getSession();
    if (session?.user?.id) {
      const user = await db.user.findUnique({
        where: { id: session.user.id },
        select: { darkMode: true },
      });
      if (user) darkMode = user.darkMode;
    }
  } catch {
    // Session or DB not available — use default
  }

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased ${darkMode ? 'dark' : 'light'}`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider darkMode={darkMode}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
