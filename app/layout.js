import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  title: "Percy Sparkle Cleaning Services | Professional Cleaning Services UK",
  description:
    "Percy Sparkle Cleaning Services provides professional residential and commercial cleaning services across the UK.",
  keywords: [
    "cleaning services UK",
    "house cleaning",
    "commercial cleaning",
    "deep cleaning",
    "professional cleaners",
  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${dmSans.variable}`}>
        <Navbar />
        {children}
        <Footer />

      </body>

    </html>

  );
}
