import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RouteOpening from "@/components/RouteOpening";

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
        <div className="siteIntro" aria-hidden="true">
          <div className="siteIntroContent">
            <div className="siteIntroLogoFrame">
              <span className="siteIntroLogo" />
            </div>
            <p className="siteIntroName">Percy Sparkle</p>
            <p className="siteIntroService">Cleaning Services</p>
          </div>
        </div>

        <div className="siteContent">
          <Navbar />
          {children}
          <Footer />
        </div>
        <RouteOpening />

      </body>

    </html>

  );
}
