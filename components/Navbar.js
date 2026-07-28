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

              <span>
                Call us 24/7
              </span>

              07467 139733

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
            );         backdrop-filter: blur(15px);

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



        .phone {

          text-decoration: none;

          text-align: right;

          color: #0f172a;

          font-size: 14px;
          font-weight: 700;

        }



        .phone span {

          display: block;

          color: #94a3b8;

          font-size: 10px;

          text-transform: uppercase;

          letter-spacing: 1.5px;

        }




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

            background: linear-gradient(
              to bottom,
              #ffffff 0%,
              #e4f1ff 35%,
              #c9e2ff 100%
            );

            border-bottom: 1px solid rgba(10, 102, 240, 0.18);
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
