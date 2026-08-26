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
      y: {
        duration: 0.34,
        ease: [0.22, 1, 0.36, 1],
      },
      opacity: {
        duration: 0.24,
      },
      color: {
        duration: 0.42,
        times: [0, 0.38, 1],
      },
    },
  },
};

/* =========================
   PHONE ICON
========================= */

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22 16.92V20a2 2 0 0 1-2.18 2
        19.79 19.79 0 0 1-8.63-3.07
        19.5 19.5 0 0 1-6-6
        A19.79 19.79 0 0 1 2.12 4.18
        2 2 0 0 1 4.11 2h3.09
        a2 2 0 0 1 2 1.72
        c.12.9.33 1.78.62 2.63
        a2 2 0 0 1-.45 2.11L8.06 9.77
        a16 16 0 0 0 6 6l1.31-1.31
        a2 2 0 0 1 2.11-.45
        c.85.29 1.73.5 2.63.62
        A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================
   WHATSAPP ICON
========================= */

function WhatsAppIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
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
        fill="currentColor"
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
        fill="#25D366"
      />
    </svg>
  );
}

export default function MobileMenu({ open, setOpen }) {
  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("keydown", closeOnEscape);
    }

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* =========================
              OVERLAY
          ========================= */}

          <motion.div
            className="mobileOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* =========================
              MOBILE DRAWER
          ========================= */}

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
              {/* =========================
                  HEADER
              ========================= */}

              <div className="mobileMenuHeader">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.12,
                  }}
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
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    rotate: -45,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    duration: 0.28,
                    delay: 0.16,
                  }}
                >
                  <span aria-hidden="true">{"\u00d7"}</span>
                </motion.button>
              </div>

              {/* =========================
                  NAVIGATION
              ========================= */}

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

              {/* =========================
                  CTA + PHONE + WHATSAPP
              ========================= */}

              <motion.div
                className="mobileMenuCta"
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.32,
                  delay: 0.64,
                }}
              >
                {/* Get a Free Quote */}

                <Link
                  href="/contactpage#quote-form"
                  onClick={closeMenu}
                >
                  Get a Free Quote
                </Link>

                {/* Phone + WhatsApp */}

                <div className="mobileContactRow">
                  {/* PHONE */}

                  <a
                    href="tel:07467139733"
                    className="phoneNumber"
                    aria-label="Call 07467 139733"
                  >
                    <span className="phoneIcon">
                      <PhoneIcon />
                    </span>

                    <span className="phoneText">
                      07467 139733
                    </span>
                  </a>

                  {/* WHATSAPP */}

                  <a
                    href="https://wa.me/447467139733"
                    className="whatsappButton"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact Percy Sparkle Cleaning Services on WhatsApp"
                  >
                    <WhatsAppIcon />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.aside>

          {/* =========================
              STYLES
          ========================= */}

          <style jsx global>{`
            /* =========================
               OVERLAY
            ========================= */

            .mobileOverlay {
              position: fixed;
              inset: 0;

              background: rgba(3, 13, 30, 0.62);

              backdrop-filter: blur(8px);

              z-index: 1000;
            }

            /* =========================
               DRAWER
            ========================= */

            .mobileDrawer {
              position: fixed;

              top: 0;
              right: 0;

              height: 100dvh;

              width: min(88vw, 380px);

              background:
                radial-gradient(
                  circle at 100% 0%,
                  rgba(37, 99, 235, 0.52),
                  transparent 38%
                ),
                radial-gradient(
                  circle at 0% 100%,
                  rgba(245, 197, 66, 0.16),
                  transparent 36%
                ),
                linear-gradient(
                  155deg,
                  #0a2858 0%,
                  #071b3d 48%,
                  #04132c 100%
                );

              z-index: 1001;

              border-left: 1px solid
                rgba(191, 219, 254, 0.22);

              box-shadow:
                -24px 0 60px
                rgba(15, 23, 42, 0.2);

              overflow: hidden;
            }

            /* =========================
               CONTENT
            ========================= */

            .mobileMenuContent {
              height: 100%;

              display: flex;
              flex-direction: column;

              padding: 30px;

              overflow-y: auto;
            }

            /* =========================
               HEADER
            ========================= */

            .mobileMenuHeader {
              display: flex;

              align-items: center;
              justify-content: space-between;

              padding-bottom: 25px;

              border-bottom: 1px solid
                rgba(191, 219, 254, 0.18);
            }

            .mobileMenuHeader img {
              width: 130px;

              height: auto;

              object-fit: contain;
            }

            /* =========================
               CLOSE BUTTON
            ========================= */

            .closeButton {
              width: 44px;
              height: 44px;

              flex: 0 0 44px;

              display: flex;
              align-items: center;
              justify-content: center;

              border: 1px solid
                rgba(191, 219, 254, 0.3);

              border-radius: 50%;

              background: rgba(255, 255, 255, 0.1);

              box-shadow:
                0 8px 20px
                rgba(15, 23, 42, 0.08);

              font-size: 32px;
              line-height: 1;

              cursor: pointer;

              color: #ffffff;

              -webkit-tap-highlight-color: transparent;
            }

            .closeButton:hover {
              background: rgba(255, 255, 255, 0.2);
            }

            /* =========================
               NAVIGATION
            ========================= */

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

              transition:
                color 0.2s ease,
                transform 0.2s ease;
            }

            .mobileMenuNav a:hover {
              color: #60a5fa;

              transform: translateX(5px);
            }

            /* =========================
               CTA AREA
            ========================= */

            .mobileMenuCta {
              margin-top: auto;

              padding-top: 30px;

              display: flex;

              flex-direction: column;

              gap: 15px;
            }

            /* Get a Free Quote */

            .mobileMenuCta > a:first-child {
              display: flex;

              justify-content: center;
              align-items: center;

              padding: 15px;

              border-radius: 10px;

              background:
                linear-gradient(
                  135deg,
                  #3b82f6,
                  #0a66f0
                );

              color: white;

              text-decoration: none;

              font-weight: 800;

              box-shadow:
                0 12px 24px
                rgba(3, 13, 30, 0.26);
            }

            /* =========================
               PHONE + WHATSAPP ROW
            ========================= */

            .mobileContactRow {
              display: flex;

              align-items: center;

              gap: 10px;

              width: 100%;
            }

            /* PHONE NUMBER */

            .phoneNumber {
              flex: 1;

              min-width: 0;

              display: flex !important;

              align-items: center;

              justify-content: center;

              gap: 9px;

              padding: 13px 12px;

              border-radius: 10px;

              background: rgba(255, 255, 255, 0.08);

              color: #ffffff;

              border: 1px solid
                rgba(191, 219, 254, 0.28);

              text-decoration: none;

              font-weight: 800;

              transition:
                background 0.2s ease,
                transform 0.2s ease;
            }

            .phoneNumber:hover {
               background:
                linear-gradient(
                  135deg,
                  #3b82f6,
                  #0a66f0
                );

              transform: translateY(-1px);
            }

            .phoneIcon {
              width: 20px;
              height: 20px;

              display: flex;

              align-items: center;
              justify-content: center;

              color: #ffffff;

              flex-shrink: 0;
            }

            .phoneIcon svg {
              width: 20px;
              height: 20px;

              display: block;
            }

            .phoneText {
              white-space: nowrap;
            }

            /* =========================
               WHATSAPP BUTTON
            ========================= */

            .whatsappButton {
              width: 52px;
              height: 52px;

              flex: 0 0 52px;

              display: flex !important;

              align-items: center;
              justify-content: center;

              border-radius: 10px;

              background: #04a13e;

              color: #ffffff;

              text-decoration: none;

              box-shadow:
                0 10px 20px
                rgba(0, 0, 0, 0.18);

              transition:
                transform 0.2s ease,
                background 0.2s ease;
            }

            .whatsappButton:hover {
              transform: translateY(-2px);

              background: #20bd5a;
            }

            .whatsappButton svg {
              width: 25px;
              height: 25px;

              display: block;
            }

            /* =========================
               TABLET
            ========================= */

            @media (max-width: 900px) {
              .mobileDrawer {
                max-width: 360px;
              }
            }

            /* =========================
               MOBILE
            ========================= */

            @media (max-width: 600px) {
              .mobileMenuContent {
                padding: 25px;
              }

              .mobileMenuHeader {
                gap: 16px;
              }

              .mobileMenuNav a {
                font-size: 17px;
              }
            }

            /* =========================
               SMALL PHONES
            ========================= */

            @media (max-width: 380px) {
              .mobileDrawer {
                width: 90vw;
              }

              .mobileMenuHeader img {
                width: 40px;

                height: auto;

                object-fit: contain;

                border-radius: 10px;

                display: block;
              }

              .mobileMenuNav a {
                font-size: 16px;
              }

              .phoneNumber {
                padding-left: 9px;
                padding-right: 9px;

                gap: 7px;
              }

              .phoneText {
                font-size: 14px;
              }

              .whatsappButton {
                width: 50px;
                height: 50px;

                flex-basis: 50px;
              }
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
}