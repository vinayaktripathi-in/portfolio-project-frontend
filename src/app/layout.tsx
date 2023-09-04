"use client";
import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Providers } from "@lib/providers";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(loadTheme());

  function loadTheme() {
    const isServer = typeof window === "undefined";
    if (!isServer) {
      return localStorage.getItem("theme") || "dark";
    }
  }

  useEffect(() => {
    const element = document.documentElement;
    if (localStorage.getItem("theme") === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <html lang="en">
      {/* className={inter.className} */}
      <body className="bg-white dark:bg-[#121212] ">
        <main>
          <Providers>
            <Toaster />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
