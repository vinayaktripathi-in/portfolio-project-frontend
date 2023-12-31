"use client";
import "../globals.css";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import AuthProvider from "@components/auth";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";

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
  return (
    <div lang="en">
      {/* className={inter.className} */}
      <section>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </section>
    </div>
  );
}
