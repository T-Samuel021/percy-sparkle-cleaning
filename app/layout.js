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
  title: "Percy Sparkle Cleaning Services | Professional Cleaners in Jarrow",

  description:
    "Percy Sparkle Cleaning Services provides reliable residential and commercial cleaning services in Jarrow and surrounding areas.",

  openGraph: {
    title: "Percy Sparkle Cleaning Services | Professional Cleaners in Jarrow",

    description:
      "Percy Sparkle Cleaning Services provides reliable residential and commercial cleaning services in Jarrow and surrounding areas.",

    url: "https://percysparkle.co.uk",

    siteName: "Percy Sparkle Cleaning Services",

    images: [
      {
        url: "https://res.cloudinary.com/wt1k8kgj/image/upload/v1784651760/183BF762-869E-4233-9228-EE9D3F7210E7_f6wfus.png",
        width: 1200,
        height: 630,
        alt: "Percy Sparkle Cleaning Services",
      },
    ],

    locale: "en_GB",
    type: "website",
  },

  alternates: {
    canonical: "https://percysparkle.co.uk",
  },
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
