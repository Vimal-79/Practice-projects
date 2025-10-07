import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import SessionWrapper from "./components/SessionWrapper";

export const metadata = {
  title: "MakeMecode - Page for raise funds",
  description: "MakeMecode - a page for raise funds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
      <body className=" top-0 z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <Navbar />
        <div className="min-h-screen">
        {children}
        </div>
        <Footer />
      </body>
      </SessionWrapper>
    </html>
  );
}
