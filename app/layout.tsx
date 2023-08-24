import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atif Kamal | Full-stack developer",
  description:
    "Experienced Software Development Engineer-I (SDE-I) with 18 months of experience in full-stack development, and expertise in end-to-end product development. Proficient in API design, UI development, and deployment. Ready to take on new challenges!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
