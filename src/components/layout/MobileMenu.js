"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

export default function MobileMenu({ open, setOpen }) {
  const closeMenu = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />

          {/* Drawer */}
          <motion.aside
            className="fixed right-0 top-0 z-50 h-screen w-[85vw] max-w-[320px] bg-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex h-full flex-col p-8">

              {/* Header */}
              <div className="mb-10 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#0A66F0]">
                  Percy Sparkle
                </h2>

                <button
                  onClick={closeMenu}
                  className="text-3xl"
                >
                  ×
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex flex-col gap-6 text-lg">

                <Link href="/" onClick={closeMenu}>
                  Home
                </Link>

                <Link href="#about" onClick={closeMenu}>
                  About
                </Link>

                <Link href="#services" onClick={closeMenu}>
                  Services
                </Link>

                <Link href="#gallery" onClick={closeMenu}>
                  Gallery
                </Link>

                <Link href="#contact" onClick={closeMenu}>
                  Contact
                </Link>

              </nav>

              <div className="mt-auto">
                <Button href="#contact">
                  Get a Free Quote
                </Button>
              </div>

            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}