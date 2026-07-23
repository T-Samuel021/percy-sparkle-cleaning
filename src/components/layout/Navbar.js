"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "../ui/Container";

const logoUrl =
  "https://res.cloudinary.com/wt1k8kgj/image/upload/v1784651760/183BF762-869E-4233-9228-EE9D3F7210E7_f6wfus.png";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between lg:h-24">
          <Link
            href="/"
            aria-label="Percy Sparkle Cleaning Services home"
            className="flex shrink-0 items-center"
            onClick={closeMenu}
          >
            <img
              src={logoUrl}
              alt="Percy Sparkle Cleaning Services"
              className="h-12 w-auto object-contain sm:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-bold tracking-[0.01em] text-slate-600 hover:text-[#0A66F0]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="tel:07467139733"
              className="text-right text-sm font-bold text-slate-800 hover:text-[#0A66F0]"
            >
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Call us 24/7
              </span>
              07467 139733
            </a>

            <a
              href="#contact"
              className="rounded-xl bg-[#0A66F0] px-5 py-3 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(10,102,240,0.22)] hover:-translate-y-0.5 hover:bg-[#0047D4]"
            >
              Get a free quote
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-900 lg:hidden"
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                <path d="M4 7H20M4 12H20M4 17H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {open && (
        <div
            id="mobile-navigation"
            className="fixed inset-0 z-[60] bg-slate-950/35 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
        >
            <aside
            className="ml-auto flex h-[100dvh] w-[min(88vw,390px)] flex-col bg-white px-6 py-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            aria-label="Mobile navigation"
            >
            <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <img
                src={logoUrl}
                alt="Percy Sparkle Cleaning Services"
                style={{
                    height: "44px",
                    width: "auto",
                    maxWidth: "145px",
                    objectFit: "contain",
                }}
                />

                <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-slate-900"
                >
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                    <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    />
                </svg>
                </button>
            </div>

            <nav className="mt-5" aria-label="Mobile navigation">
                {navigation.map((item) => (
                <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between border-b border-slate-100 py-5 text-lg font-bold text-slate-800 hover:text-[#0A66F0]"
                >
                    {item.label}
                    <span className="text-[#F5C542]">→</span>
                </Link>
                ))}
            </nav>

            <div className="mt-auto border-t border-slate-100 pt-6">
                <a
                href="#contact"
                onClick={closeMenu}
                className="flex justify-center rounded-xl bg-[#0A66F0] px-5 py-4 font-extrabold text-white"
                >
                Get a free quote
                </a>

                <a
                href="tel:07467139733"
                className="mt-5 block text-center text-sm font-bold text-slate-700"
                >
                Call us: 07467 139733
                </a>

                <p className="mt-2 text-center text-xs text-slate-400">
                Available 24 hours, Monday–Sunday
                </p>
            </div>
            </aside>
        </div>
      )}
    </header>
  );
}