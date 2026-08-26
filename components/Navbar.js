"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const logoUrl =
  "https://res.cloudinary.com/wt1k8kgj/image/upload/v1784812824/Logo_without_Background_j4fd5k.png";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/aboutpage" },
  { label: "Services", href: "/servicepage" },
  { label: "Gallery", href: "/gallerypage" },
  { label: "Contact", href: "/contactpage" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;

    // Keep the page behind the drawer locked without shifting its layout.
    body.style.overflow = open ? "hidden" : previousBodyOverflow;
    documentElement.style.overflow = open ? "hidden" : previousHtmlOverflow;

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [open]);

  useEffect(() => {
    const desktopBreakpoint = window.matchMedia("(min-width: 769px)");

    const closeOnDesktop = (event) => {
      if (event.matches) setOpen(false);
    };

    desktopBreakpoint.addEventListener("change", closeOnDesktop);

    return () => {
      desktopBreakpoint.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navContainer">

          {/* Logo */}

          <Link
            href="/"
            className="logo"
            onClick={closeMenu}
          >
            <div className="logoBox">
              <img
                src={logoUrl}
                alt="Percy Sparkle Cleaning Services"
              />
            </div>
          </Link>


          {/* Desktop Navigation */}

          <nav className="desktopNav">
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>


          {/* Desktop Actions */}

          <div className="desktopActions">

            <a
              href="tel:07467139733"
              className="phone"
            >

              {/* WhatsApp Logo */}

              <span className="phoneTop">
                <svg
                  className="whatsappIcon"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0
                    C5.41 0 .03 5.38.03 11.99
                    c0 2.11.55 4.17 1.6 5.99L0 24
                    l6.16-1.61a11.95 11.95 0 0 0 5.85 1.53h.01
                    c6.61 0 11.98-5.38 11.98-11.99
                    0-3.2-1.25-6.21-3.48-8.45Z"
                    fill="#25D366"
                  />

                  <path
                    d="M17.48 14.41c-.3-.15-1.77-.87-2.05-.97
                    -.27-.1-.47-.15-.67.15
                    -.2.3-.77.97-.95 1.17
                    -.17.2-.35.22-.65.07
                    -.3-.15-1.27-.47-2.42-1.5
                    -.9-.8-1.5-1.79-1.67-2.09
                    -.17-.3-.02-.46.13-.61
                    .13-.13.3-.35.45-.52
                    .15-.17.2-.3.3-.5
                    .1-.2.05-.37-.02-.52
                    -.07-.15-.67-1.62-.92-2.22
                    -.24-.58-.49-.5-.67-.51
                    -.17-.01-.37-.01-.57-.01
                    -.2 0-.52.07-.8.37
                    -.27.3-1.04 1.02-1.04 2.49
                    0 1.47 1.07 2.89 1.22 3.09
                    .15.2 2.1 3.2 5.09 4.49
                    .71.31 1.26.5 1.69.64
                    .71.23 1.36.2 1.87.12
                    .57-.08 1.77-.72 2.02-1.42
                    .25-.7.25-1.3.17-1.42
                    -.07-.12-.27-.2-.57-.35Z"
                    fill="#ffffff"
                  />
                </svg>

                <span>Call us</span>
              </span>

              <span className="phoneNumber">
                07467 139733
              </span>

            </a>


            <a
              href="/contactpage#quote-form"
              className="quoteButton"
            >
              Get a free quote
            </a>

          </div>


          {/* Mobile Hamburger Only */}

          <button
            className="hamburger"
            onClick={() => setOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>


      {/* Mobile Drawer Component */}

      <MobileMenu
        open={open}
        setOpen={setOpen}
      />


      <style jsx>{`

        .navbar {

          position: fixed;
          top: 0;
          left: 0;
          right: 0;

          z-index: 50;

          background:
            linear-gradient(
              to bottom,
              rgba(255,255,255,.96) 0%,
              rgba(238,246,255,.96) 55%,
              rgba(212,232,255,.96) 100%
            );

          backdrop-filter: blur(15px);

          border-bottom: 1px solid rgba(10, 102, 240, 0.18);

        }


        .navContainer {

          max-width: 1200px;
          width: 100%;

          height: 90px;

          margin: auto;
          padding: 0 6%;

          display: flex;
          align-items: center;
          justify-content: space-between;

        }


        /* Logo */

        .logo {
          display: flex;
          align-items: center;
        }


        .logoBox {
          width: 150px;
          height: 55px;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;
        }


        .logoBox img {
          width: 100%;
          height: 100%;

          object-fit: contain;
        }


        /* Desktop Navigation */

        .desktopNav {

          display: flex;
          align-items: center;

          gap: 32px;

        }


        .desktopNav a {

          text-decoration: none;

          color: #475569;

          font-size: 14px;
          font-weight: 700;

          transition: .3s;

        }


        .desktopNav a:hover {

          color: #0A66F0;

        }


        /* Desktop Right Section */

        .desktopActions {

          display: flex;

          align-items: center;

          gap: 25px;

        }


        /* Phone */

        .phone {

          text-decoration: none;

          text-align: right;

          color: #0f172a;

          font-size: 14px;

          font-weight: 700;

          display: flex;

          flex-direction: column;

          align-items: flex-end;

        }


        /* WhatsApp + Call Us */

        .phoneTop {

          display: flex;

          align-items: center;

          justify-content: flex-end;

          gap: 7px;

          color: #94a3b8;

          font-size: 10px;

          text-transform: uppercase;

          letter-spacing: 1.5px;

          line-height: 1;

        }


        /* WhatsApp Icon */

        .whatsappIcon {

          width: 16px;

          height: 16px;

          display: block;

          flex-shrink: 0;

        }


        .phoneNumber {

          display: block;

          margin-top: 4px;

          color: #0f172a;

          font-size: 14px;

          font-weight: 700;

          line-height: 1.2;

        }


        /* Quote Button */

        .quoteButton {

          background: #0A66F0;

          color: white;

          text-decoration: none;

          padding: 14px 22px;

          border-radius: 10px;

          font-size: 14px;

          font-weight: 800;

          transition: .3s;

        }


        .quoteButton:hover {

          background: #0047D4;

          transform: translateY(-2px);

        }


        /* Hamburger */

        .hamburger {

          display: none;

          width: 44px;
          height: 44px;

          border-radius: 10px;

          border: 1px solid #e2e8f0;

          background: white;

          cursor: pointer;

          flex-direction: column;

          justify-content: center;

          align-items: center;

          gap: 5px;

        }


        .hamburger span {

          width: 20px;

          height: 2px;

          background: #0f172a;

          border-radius: 10px;

        }


        /* Tablet */

        @media (max-width:1024px) {

          .navContainer {

            padding: 0 5%;

          }


          .desktopNav {

            gap: 20px;

          }


          .desktopActions {

            gap: 15px;

          }

        }


        /* Mobile */

        @media (max-width:768px) {

          .navbar {

            background:
              linear-gradient(
                to bottom,
                #ffffff 0%,
                #e4f1ff 35%,
                #c9e2ff 100%
              );

            border-bottom: 1px solid
              rgba(10, 102, 240, 0.18);

          }


          .navContainer {

            height: 75px;

            padding: 0 20px;

          }


          .logo img {

            height: 45px;

          }


          .desktopNav,
          .desktopActions {

            display: none;

          }


          .hamburger {

            display: flex;

          }

        }


        /* Small phones */

        @media (max-width:380px) {

          .navContainer {

            padding: 0 16px;

          }


          .logo img {

            height: 40px;

          }


          .hamburger {

            width: 40px;
            height: 40px;

          }

        }

      `}</style>

    </>
  );
}