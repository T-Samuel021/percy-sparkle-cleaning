import Container from "../ui/Container";
import Link from "next/link";

const logoUrl =
  "https://res.cloudinary.com/wt1k8kgj/image/upload/v1784651760/183BF762-869E-4233-9228-EE9D3F7210E7_f6wfus.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="mt-24 overflow-hidden bg-[#071B3D] text-white">
      <div className="h-1 bg-[#F5C542]" />

      <Container>
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.35fr_0.8fr_0.95fr] lg:gap-16">
          <div>
            <Link href="/" aria-label="Percy Sparkle Cleaning Services home">
              <img
                src={logoUrl}
                alt="Percy Sparkle Cleaning Services"
                className="h-16 w-auto rounded-lg bg-white px-2 py-1 object-contain"
              />
            </Link>

            <p className="mt-7 max-w-md text-[15px] leading-7 text-slate-300">
              Professional residential and commercial cleaning, delivered with
              care, consistency, and attention to every detail.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F5C542]" />
              <span className="text-sm font-bold text-white">
                Available 24 hours, Monday–Sunday
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#F5C542]">
              Explore
            </h2>

            <ul className="mt-6 space-y-4 text-sm font-semibold text-slate-300">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="#about" className="hover:text-white">About us</Link></li>
              <li><Link href="#services" className="hover:text-white">Our services</Link></li>
              <li><Link href="#gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link href="#contact" className="hover:text-white">Contact us</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#F5C542]">
              Contact
            </h2>

            <div className="mt-6 space-y-5 text-sm text-slate-300">
              <a href="tel:07467139733" className="block group">
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Phone
                </span>
                <span className="font-bold text-white group-hover:text-[#F5C542]">
                  07467 139733
                </span>
              </a>

              <a
                href="mailto:Percysparklecleaningservices@gmail.com"
                className="block group break-all"
              >
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Email
                </span>
                <span className="font-bold text-white group-hover:text-[#F5C542]">
                  Percysparklecleaningservices@gmail.com
                </span>
              </a>

              <a
                href="https://x.com/PercySparkles"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-bold text-white hover:text-[#F5C542]"
              >
                Follow @PercySparkles <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-center text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {year} Percy Sparkle Cleaning Services. All rights reserved.</p>

          <p>
            Built by{" "}
            <span className="font-bold text-white">Temitope Samuel</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}