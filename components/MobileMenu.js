"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const logoUrl =
  "https://res.cloudinary.com/wt1k8kgj/image/upload/v1784651760/183BF762-869E-4233-9228-EE9D3F7210E7_f6wfus.png";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/aboutpage" },
  { label: "Services", href: "/servicepage" },
  { label: "Gallery", href: "/gallerypage" },
  { label: "Contact", href: "/contactpage" },
];

const navigationVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.075,
      staggerDirection: -1,
    },
  },
};

const navigationItemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    color: "#94a3b8",
  },
  visible: {
    opacity: 1,
    y: 0,
    color: ["#94a3b8", "#60a5fa", "#f8fafc"],
    transition: {
      y: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.24 },
      color: { duration: 0.42, times: [0, 0.38, 1] },
    },
  },
};

export default function MobileMenu({ open, setOpen }) {

  const closeMenu = () => {
    setOpen(false);
  };


  useEffect(() => {

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    if (open) window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };

  }, [open, setOpen]);


  return (

    <AnimatePresence>

      {open && (

        <>

          <motion.div
            className="mobileOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={closeMenu}
            aria-hidden="true"
          />



          <motion.aside
            className="mobileDrawer"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: "100%",
              opacity: 0,
              transition: {
                type: "tween",
                duration: 0.24,
                ease: [0.4, 0, 1, 1],
              },
            }}
            transition={{
              type: "tween",
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile navigation menu"
            aria-modal="true"
            role="dialog"
          >

            <div className="mobileMenuContent">


              <div className="mobileMenuHeader">

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.12 }}
                >
                  <img
                    src={logoUrl}
                    alt="Percy Sparkle Cleaning Services"
                  />
                </motion.div>


                <motion.button
                  type="button"
                  className="closeButton"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  initial={{ opacity: 0, scale: 0.7, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.28, delay: 0.16 }}
                >
                  <span aria-hidden="true">{"\u00d7"}</span>
                </motion.button>

              </div>




              <motion.nav
                id="mobile-navigation"
                className="mobileMenuNav"
                aria-label="Main navigation"
                variants={navigationVariants}
                initial="hidden"
                animate="visible"
              >

                {navigation.map((item) => (
                  <motion.div
                    className="mobileMenuNavItem"
                    key={item.label}
                    variants={navigationItemVariants}
                  >
                    <Link href={item.href} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

              </motion.nav>




              <motion.div
                className="mobileMenuCta"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.32, delay: 0.64 }}
              >

                <Link
                  href="/contactpage#quote-form"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Get a Free Quote
                </Link>


                <a href="tel:07467139733">
                  Call: 07467 139733
                </a>


              </motion.div>



            </div>


          </motion.aside>





          <style jsx global>{`

            .mobileOverlay {

              position: fixed;
              inset: 0;

              background: rgba(3, 13, 30, 0.62);

              backdrop-filter: blur(8px);

              z-index: 1000;

            }



            .mobileDrawer {

              position: fixed;

              top: 0;
              right: 0;

              height: 100dvh;

              width: min(88vw, 380px);

              background:
                radial-gradient(circle at 100% 0%, rgba(37, 99, 235, 0.52), transparent 38%),
                radial-gradient(circle at 0% 100%, rgba(245, 197, 66, 0.16), transparent 36%),
                linear-gradient(155deg, #0a2858 0%, #071b3d 48%, #04132c 100%);

              z-index: 1001;

              border-left: 1px solid rgba(191, 219, 254, 0.22);

              box-shadow: -24px 0 60px rgba(15, 23, 42, 0.2);

              overflow: hidden;

            }





            .mobileMenuContent {

              height: 100%;

              display: flex;

              flex-direction: column;

              padding: 30px;

              overflow-y: auto;

            }





            .mobileMenuHeader {

              display: flex;

              align-items: center;

              justify-content: space-between;

              padding-bottom: 25px;

              border-bottom: 1px solid rgba(191, 219, 254, 0.18);

            }





            .mobileMenuHeader img {

              width: 130px;
              height: auto;
              object-fit: contain;

            }





            .closeButton {

              width: 44px;
              height: 44px;
              flex: 0 0 44px;

              display: flex;
              align-items: center;
              justify-content: center;

              border: 1px solid rgba(191, 219, 254, 0.3);
              border-radius: 50%;

              background: rgba(255, 255, 255, 0.1);

              box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);

              font-size: 32px;
              line-height: 1;

              cursor: pointer;

              color: #ffffff;

              -webkit-tap-highlight-color: transparent;

            }


            .closeButton:hover {

              background: rgba(255, 255, 255, 0.2);

            }





            .mobileMenuNav {

              display: flex;

              flex-direction: column;

              gap: 25px;

              margin-top: 35px;

            }





            .mobileMenuNav a {

              display: block;

              text-decoration: none;

              color: inherit;

              font-size: 18px;

              font-weight: 700;

              transition: color .2s ease, transform .2s ease;

            }





            .mobileMenuNav a:hover {

              color: #60a5fa;

              transform: translateX(5px);

            }





            .mobileMenuCta {

              margin-top: auto;

              padding-top: 30px;

              display: flex;

              flex-direction: column;

              gap: 15px;

            }





            .mobileMenuCta a {

              display: flex;

              justify-content: center;

              align-items: center;

              padding: 15px;

              border-radius: 10px;

              background: linear-gradient(135deg, #3b82f6, #0a66f0);

              color: white;

              text-decoration: none;

              font-weight: 800;

              box-shadow: 0 12px 24px rgba(3, 13, 30, 0.26);

            }





            .mobileMenuCta a:last-child {

              background: rgba(255, 255, 255, 0.08);

              color: #ffffff;

              border: 1px solid rgba(191, 219, 254, 0.28);

            }





            /* Tablet */

            @media(max-width:900px){

              .mobileDrawer{

                max-width:360px;

              }

            }





            /* Mobile */

            @media(max-width:600px){

              .mobileMenuContent{

                padding:25px;

              }


              .mobileMenuHeader {

                gap: 16px;

              }


              .mobileMenuNav a{

                font-size:17px;

              }

            }





            /* Small phones */

            @media(max-width:380px){

              .mobileDrawer{

                width:90vw;

              }


              .mobileMenuHeader img {

                width: 40px;
                height: auto;

                object-fit: contain;

                border-radius: 10px;

                display: block;

              }


              .mobileMenuNav a{

                font-size:16px;

              }

            }

          `}</style>


        </>

      )}

    </AnimatePresence>

  );
}
