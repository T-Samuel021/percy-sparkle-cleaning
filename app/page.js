"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  CalendarDays,
} from "lucide-react";

//const placeholderImage =
//  "https://res.cloudinary.com/wt1k8kgj/image/upload/v1784651760/183BF762-869E-4233-9228-EE9D3F7210E7_f6wfus.png";

const galleryRevealAnimations = [
  { opacity: 0, x: -72, y: 34, scale: 0.9, rotate: -3 },
  { opacity: 0, y: 72, scale: 0.88, rotate: 2 },
  { opacity: 0, x: 72, y: 34, scale: 0.9, rotate: 3 },
  { opacity: 0, y: 64, scale: 0.9, rotate: -2 },
  { opacity: 0, x: -72, y: 34, scale: 0.9, rotate: -3 },
  { opacity: 0, x: 72, y: 34, scale: 0.9, rotate: 3 },
];

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <>
     <div className="homeSiteOpening" aria-hidden="true">
      <div className="homeOpeningLogoAnchor">
        <span className="homeOpeningLogo" />
      </div>

      <div className="homeOpeningCopy">
        <p>Percy Sparkle</p>
        <span>Cleaning Services</span>
      </div>
    </div>   
      <main className="home">

        <section className="hero">
          <div className="heroContent">

            <p className="tagline heroEntranceTagline">
              Trusted cleaning across the UK
            </p>

            <h1 className="heroTitle heroEntranceTitle">
              Percy Sparkle Cleaning Services
            </h1>

            <p className="description heroEntranceDescription">
              Professional residential and commercial cleaning services,
              delivered with care, consistency, and attention to detail.
            </p>

            <a
            href="/contactpage#quote-form"
            className="heroQuoteButton heroEntranceCta"
          >
            Request a Free Quote
          </a>

            <div className="heroHighlights">

              <div className="heroHighlight">

                <div className="heroHighlightIcon">
                  <Sparkles size={28} strokeWidth={2.2} />
                </div>

                <div>
                  <h3>Excellent Service</h3>

                  <p>
                    Exceptional Cleaning Services with a Personal Touch
                  </p>
                </div>

              </div>

              

              <div className="heroHighlight">

                <div className="heroHighlightIcon">
                  ✔
                </div>

                <div>
                  <h3>Reliable Professionals</h3>

                  <p>
                    Cleaning Done Right, Every Time
                  </p>
                </div>

              </div>

             

              <div className="heroHighlight">

                <div className="heroHighlightIcon">
                  <CalendarDays size={28} strokeWidth={2.2} />
                </div>

                <div>
                  <h3>Flexible Booking</h3>

                  <p>
                    Monday – Saturday including Holidays
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>


        <section className="aboutSection" id="about">

          <div className="aboutContent">
            <div className="aboutImageFrame">
              <div className="aboutImageInner">

                <iframe
                  src="https://www.youtube.com/embed/ELM7FBo2SXU"
                  title="Percy Sparkle Cleaning Services"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

              </div>
            </div>

            <div className="aboutCopy">
              <p className="eyebrow">About Percy Sparkle</p>
              <h2>Cleaning that lets your space shine.</h2>
              <p>
                We bring dependable, detail-focused cleaning to homes and
                workplaces across the UK. Every service is shaped around your
                space, schedule, and standards.
              </p>

              <div className="aboutPoints">
                <span>Reliable, friendly professionals</span>
                <span>Flexible bookings to suit you</span>
                <span>Care in every finishing touch</span>
              </div>
            </div>
          </div>

        </section>


        <section className="servicesPreview" id="services">

          <div className="sectionContent">

            <h2>
              Cleaning Solutions You Can Trust
            </h2>

            <p>
              From homes to commercial spaces, Percy Sparkle provides
              reliable cleaning solutions designed around your needs.
            </p>

          </div>

          <div className="serviceGrid">
            <motion.article
              className="serviceCard"
              initial={reduceMotion ? false : { opacity: 0, x: -72, y: 36, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="serviceImage">
                <img src="https://res.cloudinary.com/wt1k8kgj/image/upload/750775532_2710655036002460_7918627779612117160_n_izkire.webp" 
                     alt="Comestic cleaning" />
              </div>
              <p className="eyebrow">01 / Homes</p>
              <h3>Domestic Cleaning</h3>
              <p>Regular, deep, and one-off cleaning designed around your home.</p>
            </motion.article>

            <motion.article
              className="serviceCard"
              initial={reduceMotion ? false : { opacity: 0, y: 78, scale: 0.88, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, delay: reduceMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="serviceImage">
                <img src="https://res.cloudinary.com/wt1k8kgj/image/upload/750797681_1706491663905419_2998312758828192447_n_ghl0kp.webp" 
                     alt="Commercial cleaning" />
              </div>
              <p className="eyebrow">02 / Workplaces</p>
              <h3>Commercial Cleaning</h3>
              <p>Fresh, welcoming workspaces that support your team and customers.</p>
            </motion.article>

            <motion.article
              className="serviceCard"
              initial={reduceMotion ? false : { opacity: 0, x: 72, y: 36, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.5, delay: reduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="serviceImage">
                <img src="https://res.cloudinary.com/wt1k8kgj/image/upload/751241807_836026516145346_7836131563684118229_n_w4vrlg.webp" 
                     alt="Deep cleaning" />
              </div>
              <p className="eyebrow">03 / Specialist</p>
              <h3>Deep Cleaning</h3>
              <p>Thorough attention for the places that need a little extra care.</p>
            </motion.article>
          </div>

        </section>


        <section className="whySection">
          <div className="whyContent">
            <div>
              <p className="eyebrow">Why choose us</p>
              <h2>Small details make a sparkling difference.</h2>
            </div>

            <div className="benefitGrid">
              <div><strong>24/7</strong><span>Flexible availability</span></div>
              <div><strong>100%</strong><span>Care and attention</span></div>
              <div><strong>UK</strong><span>Trusted local service</span></div>
            </div>
          </div>
        </section>


        <section className="gallerySection" id="gallery">
          <div className="sectionContent">
            <p className="eyebrow">Our work</p>
            <h2>Results you can feel good about.</h2>
            <p>A closer look at the care behind every Percy Sparkle clean.</p>
          </div>

          <div className="galleryGrid">
            {[
              {
                label: "Home refresh",
                image: "https://res.cloudinary.com/wt1k8kgj/image/upload/751549848_1588058306373447_6870766425084193901_n_vvcbjd.webp",
              },
              {
                label: "Office care",
                image: "https://res.cloudinary.com/wt1k8kgj/image/upload/752106890_2541855486329209_4694104466843862657_n_pr0pzb.webp",
              },
              {
                label: "Deep clean",
                image: "https://res.cloudinary.com/wt1k8kgj/image/upload/81B1D26E-E4CB-4EA1-AAFF-2B46DC202200_uep5ju.png",
              },
              {
                label: "Bathroom Care",
                image: "https://res.cloudinary.com/wt1k8kgj/image/upload/Cleaner_squeegeeing_glass_window_2K_202607291659_1_jwuomc.jpg",
              },
              {
                label: "Finishing touch",
                image: "https://res.cloudinary.com/wt1k8kgj/image/upload/751241807_836026516145346_7836131563684118229_n_w4vrlg.webp",
              },
              {
                label: "Final Sparkle",
                image: "https://res.cloudinary.com/wt1k8kgj/image/upload/Kitchen_being_professionally_cle__202607291632_1_qwv6io.jpg",
              },
            ].map(({ label, image }, index) => (
              <motion.figure
                className="galleryItem"
                key={label}
                initial={reduceMotion ? false : galleryRevealAnimations[index]}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                whileHover={reduceMotion ? undefined : { y: -9, scale: 1.018 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1.5,
                  delay: reduceMotion ? 0 : index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="galleryImageFrame">
                  <img src={image} alt={label} />
                </div>
                <figcaption>{label}</figcaption>
              </motion.figure>
            ))}
          </div>
        </section>


        <section className="homeCta">
          <p className="eyebrow">Ready when you are</p>
          <h2>Let&apos;s make your space sparkle.</h2>
          <p>Tell us what you need and we&apos;ll prepare a free, no-obligation quote.</p>
          <a  href="/contactpage#quote-form"  className="heroQuoteButton" >   Get a free quote </a>
        </section>


      </main>

   
      <style jsx global>{`

        /* =========================
           GLOBAL HOME STYLES
        ========================= */

        

        .home {
          width: 100%;
          overflow: hidden;
          background:
            radial-gradient(circle at 92% 8%, rgba(10, 102, 240, 0.1), transparent 27%),
            radial-gradient(circle at 8% 70%, rgba(245, 197, 66, 0.08), transparent 26%),
            #ffffff;
        }


        /* =========================
           HERO - DESKTOP
        ========================= */

        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 140px 8%;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;

          background:
            radial-gradient(circle at 50% -20%, rgba(10,102,240,.25), transparent 45%),
            radial-gradient(circle at 20% 5%, rgba(255,255,255,.55), transparent 30%),
            radial-gradient(circle at 80% 0%, rgba(255,255,255,.45), transparent 25%);
        }


        .heroContent {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }


        .tagline {
          margin-bottom: 22px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #2563eb;
        }


        .heroTitle {
          max-width: 850px;
          font-size: clamp(3rem, 5vw, 5rem);
          line-height: 1.08;
          letter-spacing: -2px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }

        .heroHighlightIcon svg {
          width: 30px;
          height: 30px;
          stroke-width: 2.2;
        }

        .description {
          max-width: 650px;
          margin-top: 30px;
          font-size: 20px;
          line-height: 1.8;
          color: #475569;
        }


        .heroQuoteButton {
          display: inline-flex;
          margin-top: 40px;
          padding: 16px 34px;
          border-radius: 10px;
          background: #2563eb;
          color: #ffffff;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          transition: 0.3s ease;
        }


        .heroQuoteButton:hover {
          background: #1d4ed8;
          transform: translateY(-3px);
        }

        .heroHighlights {

          margin-top: 56px;

          display: grid;

          grid-template-columns: repeat(3, 1fr);

          width: 1200px;
          max-width: 1250px;

           background:
            radial-gradient(circle at 50% -15%, rgba(10,102,240,.40), transparent 42%),
            radial-gradient(circle at 15% 10%, rgba(245,197,66,.12), transparent 28%),
            radial-gradient(circle at 85% 5%, rgba(255,255,255,.75), transparent 32%),
            linear-gradient(
              to bottom,
              #dcebff 30%,
              #b1d8ff 100%,
              #025fd9 68%,
              #ffecec 72%
            );

          border: 1px solid rgba(10, 102, 240, 0.08);

          border-radius: 24px;

          overflow: hidden;

          box-shadow: 0 24px 70px rgba(15, 23, 42, 0.10);

        }

        .heroHighlight {

          display: flex;
          align-items: center;
          gap: 18px;
          padding: 30px;
          min-height: 145px;
          border-right: 1px solid var(--border);
        }

        .heroHighlight:last-child {
          border-right: none;
        }

        .heroHighlightIcon {

          width: 62px;

          height: 62px;

          border-radius: 18px;

          background: var(--primary-light);

          color: var(--primary);

          display: flex;

          align-items: center;

          justify-content: center;

          flex-shrink: 0;

          font-size: 1.7rem;

        }

        .heroHighlight h3 {

          margin-bottom: 8px;

          font-size: 1.18rem;

          line-height: 1.2;

        }

        .heroHighlight p {

          margin: 0;

          font-size: .96rem;

          line-height: 1.6;

        }

       


        /* Homepage-only opening sequence. It begins after the site opening
           has cleared, without sharing classes or timing with that layout. */
        .home .heroEntranceTagline {
          animation: hero-tagline-arrive 0.72s cubic-bezier(0.22, 1, 0.36, 1) 2.5s both;
          will-change: transform, opacity, filter;
        }

        .home .heroEntranceTitle {
          animation: hero-title-arrive 1.05s cubic-bezier(0.22, 1, 0.36, 1) 2.68s both;
          will-change: transform, opacity, filter;
        }

        .home .heroEntranceDescription {
          animation: hero-description-arrive 0.72s cubic-bezier(0.22, 1, 0.36, 1) 3.3s both;
          will-change: transform, opacity, filter;
        }

        .home .heroEntranceCta {
          animation: hero-cta-arrive 0.64s cubic-bezier(0.16, 1, 0.3, 1) 3.5s both;
          will-change: transform, opacity;
        }

        @keyframes hero-tagline-arrive {
          from { opacity: 0; transform: translateX(-30px); filter: blur(6px); }
          to { opacity: 1; transform: translateX(0); filter: blur(0); }
        }

        @keyframes hero-title-arrive {
          from { opacity: 0; transform: translateY(48px) scale(0.97); filter: blur(12px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }

        @keyframes hero-description-arrive {
          from { opacity: 0; transform: translateY(20px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @keyframes hero-cta-arrive {
          from { opacity: 0; transform: translateY(16px) scale(0.92); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }



        /* =========================
           ABOUT
        ========================= */

        .aboutSection {
          padding: 110px 8%;
          background: rgba(255, 255, 255, 0.7);
        }


        .aboutContent {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(280px, 0.85fr) minmax(0, 1fr);
          gap: clamp(48px, 8vw, 110px);
          align-items: center;
        }


        .aboutImageFrame,
        .serviceImage,
        .galleryItem {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 70% 24%, rgba(10, 102, 240, 0.18), transparent 34%),
            linear-gradient(145deg, #edf6ff, #ffffff 70%);
        }


        .aboutImageFrame {
          min-height: 210px;
          height: 295px !important;
          box-sizing: border-box;
          display: flex;
          padding: 16px;
          margin-top: 50px;
          border: 1px solid #b9d9ff;
          border-radius: 28px;
          background:
            radial-gradient(circle at 100% 0%, rgba(10, 102, 240, 0.16), transparent 40%),
            linear-gradient(145deg, #ffffff 0%, #eff7ff 58%, #dcecff 100%);
          box-shadow: 0 22px 46px rgba(10, 102, 240, 0.14);
        }


        .aboutImageInner {
          position: relative;
          flex: 1;
          overflow: hidden;
          border-radius: 18px;
          box-shadow: 0 8px 20px rgba(3, 31, 76, 0.2);
        }


        .aboutImageFrame img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          border-radius: inherit;
          object-fit: cover;
        }

        .aboutImageFrame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          border: none;
          border-radius: inherit;
        }


        .aboutImageFrame span {
          position: absolute;
          bottom: 22px;
          left: 22px;
          padding: 9px 13px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.9);
          color: #475569;
          font-size: 12px;
          font-weight: 700;
        }


        .eyebrow {
          margin-bottom: 14px;
          color: #2563eb;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }


        .aboutCopy h2,
        .whySection h2,
        .homeCta h2 {
          font-size: clamp(2.25rem, 4vw, 3.75rem);
        }


        .aboutCopy > p:not(.eyebrow) {
          max-width: 590px;
          margin-top: 24px;
          font-size: 18px;
        }


        .aboutPoints {
          display: grid;
          gap: 14px;
          margin-top: 32px;
        }


        .aboutPoints span {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #334155;
          font-weight: 700;
        }


        .aboutPoints span::before {
          content: "";
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #0a66f0;
          box-shadow: 0 0 0 5px rgba(10, 102, 240, 0.1);
        }



        /* =========================
           SECOND SECTION
        ========================= */

        .servicesPreview {
          padding: 100px 8%;
          background:
            radial-gradient(circle at 50% 0%, rgba(10, 102, 240, 0.1), transparent 42%),
            #f8fafc;
        }


        .sectionContent {
          max-width: 800px;
          margin: auto;
          text-align: center;
        }


        .sectionContent h2 {
          font-size: 40px;
          color: #0f172a;
          margin-bottom: 20px;
        }


        .sectionContent p {
          font-size: 18px;
          line-height: 1.7;
          color: #475569;
        }


        .serviceGrid {
          max-width: 1200px;
          margin: 56px auto 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }


        .serviceCard {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 16px;
          border: 1px solid #b9d9ff;
          border-radius: 22px;
          background:
            radial-gradient(circle at 100% 0%, rgba(10, 102, 240, 0.16), transparent 40%),
            linear-gradient(145deg, #ffffff 0%, #eff7ff 58%, #dcecff 100%);
          box-shadow:
            0 18px 38px rgba(10, 102, 240, 0.14),
            0 4px 12px rgba(6, 45, 115, 0.08);
        }


        .serviceImage {
          aspect-ratio: 16 / 9;
          border: 1px solid rgba(255, 255, 255, 0.62);
          border-radius: 14px;
          box-shadow: 0 6px 16px rgba(3, 31, 76, 0.2);
        }


        .serviceImage img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          border-radius: inherit;
          object-fit: cover;
        }


        .serviceCard .eyebrow {
          margin: 0;
          color: #0a66f0;
          font-size: 10px;
        }


        .serviceCard h3 {
          margin: 0;
          color: #0f172a;
          font-size: 22px;
        }


        .serviceCard > p:last-child {
          margin: 0;
          color: #475569;
          font-size: 15px;
          line-height: 1.65;
        }


        /* =========================
           WHY US
        ========================= */

        .whySection {
          padding: 100px 8%;
          background:
            radial-gradient(circle at 12% 0%, rgba(10, 102, 240, 0.32), transparent 32%),
            #071b3d;
        }


        .whyContent {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: end;
        }


        .whySection .eyebrow {
          color: #a9caff;
        }


        .whySection h2 {
          max-width: 600px;
          color: #ffffff;
        }


        .benefitGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }


        .benefitGrid div {
          min-height: 140px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
          border: 1px solid rgba(191, 219, 254, 0.42);
          border-radius: 16px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.18), rgba(219, 238, 255, 0.16) 58%, rgba(10, 102, 240, 0.3));
        }


        .benefitGrid strong {
          color: #ffffff;
          font-family: var(--font-heading), sans-serif;
          font-size: 30px;
        }


        .benefitGrid span {
          margin-top: 6px;
          color: #cbd5e1;
          font-size: 13px;
          line-height: 1.35;
        }


        /* =========================
           GALLERY AND CTA
        ========================= */

        .gallerySection {
          padding: 110px 8%;
          background:
            radial-gradient(circle at 88% 12%, rgba(10, 102, 240, 0.1), transparent 24%),
            #ffffff;
        }


        .galleryGrid {
          display: grid !important;
          max-width: 1500px !important;
          margin: 54px auto 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px !important;
          align-items: stretch;
        }


        .galleryItem {
          position: relative;
          box-sizing: border-box;
          width: auto !important;
          min-width: 0 !important;
          max-width: 100% !important;
          min-height: 220px;
          height: 280px !important;
          transform: none !important;
          z-index: 1 !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin: 0;
          padding: 20px;
          overflow: hidden;
          isolation: isolate;
          border: 1px solid #7dafec;
          border-radius: 24px;
          background:
            radial-gradient(circle at 100% 0%, rgba(10, 102, 240, 0.16), transparent 40%),
            linear-gradient(145deg, #ffffff 0%, #eff7ff 58%, #dcecff 100%);
          box-shadow:
            0 20px 42px rgba(10, 102, 240, 0.14),
            0 4px 12px rgba(10, 102, 240, 0.08);
          cursor: default;
        }

        .galleryItem:hover {
          transform: none !important;
        }

        .galleryImageFrame {
          position: relative;
          width: 100%;
          height: auto;
          flex: 1;
          align-self: stretch;
          overflow: hidden;
          border-radius: 16px;
          background: #dbeafe;
          box-shadow: 0 5px 16px rgba(3, 31, 76, 0.18);
        }


        .galleryImageFrame img {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: inherit;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }


        .galleryItem:hover .galleryImageFrame img {
          transform: scale(1.06);
        }


        .galleryItem figcaption {
          position: absolute;
          right: 22px;
          bottom: 22px;
          left: 22px;
          margin: 0;
          padding: 7px 9px;
          border: 1px solid rgba(10, 102, 240, 0.18);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 6px 16px rgba(3, 31, 76, 0.2);
          color: #063b99;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.02em;
        }


        .homeCta {
          max-width: 1100px;
          margin: 60px auto 0;
          padding: 72px 8%;
          border-radius: 26px;
          background:
            radial-gradient(circle at 90% 0%, rgba(245, 197, 66, 0.26), transparent 30%),
            linear-gradient(135deg, #0a66f0, #074bb3);
          color: #ffffff;
          text-align: center;
        }


        .homeCta .eyebrow,
        .homeCta h2,
        .homeCta > p:not(.eyebrow) {
          color: #ffffff;
        }


        .homeCta > p:not(.eyebrow) {
          max-width: 600px;
          margin: 20px auto 0;
        }


        .homeCta a {
          display: inline-flex;
          margin-top: 30px;
          padding: 15px 24px;
          border-radius: 10px;
          background: #ffffff;
          color: #0a66f0;
          font-weight: 800;
        }




        /* =========================
           TABLET
           769px - 1024px
        ========================= */

        @media (max-width: 1024px) {


          .hero {
            padding: 120px 6%;
          }


          .heroTitle {
            font-size: clamp(2.5rem, 6vw, 4rem);
          }


          .description {
            font-size: 18px;
          }


          .servicesPreview {
            padding: 80px 6%;
          }


          .galleryGrid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }


        }




        /* =========================
            MOBILE
            768px and below
          ========================= */

          @media (max-width: 768px) {

            /* Hero */
            .hero {
              min-height: auto;
              padding: 120px 40px 90px;
            }

            .heroTitle {
              font-size: 3rem;
              line-height: 1.15;
            }

            .description {
              font-size: 18px;
            }

            /* About */
            .aboutSection {
              padding: 90px 40px;
            }

            .aboutContent {
              grid-template-columns: 1fr;
              gap: 50px;
            }

            .aboutImageFrame {
              min-height: 210px;
              height: 120px !important;
              margin-Top: -10px;
            }

            /* Services */
            .servicesPreview {
              padding: 80px 40px;
            }

            .serviceGrid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }

            /* Why Us */
            .whySection {
              padding: 90px 40px;
            }

            .whyContent {
              grid-template-columns: 1fr;
              gap: 40px;
            }

            .benefitGrid {
              grid-template-columns: repeat(3, 1fr);
            }

            /* Gallery */
            .gallerySection {
              padding: 90px 40px;
            }

            .galleryGrid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }

            /* CTA */
            .homeCta {
              margin: 70px 40px 0;
              padding: 60px 40px;
            }

            .heroHighlights {

              margin-top: 38px;

              display: flex;

              flex-direction: column;

              width: 100%;

              background:
              radial-gradient(circle at 50% -15%, rgba(10,102,240,.40), transparent 42%),
              radial-gradient(circle at 15% 10%, rgba(245,197,66,.12), transparent 28%),
              radial-gradient(circle at 85% 5%, rgba(255,255,255,.75), transparent 32%),
              linear-gradient(
                to bottom,
                #dcebff 30%,
                #b1d8ff 100%,
                #025fd9 68%,
                #ffecec 72%
              );

              border-radius: 22px;

              overflow: hidden;

              border: 1px solid rgba(10, 102, 240, 0.08);

              box-shadow: 0 18px 45px rgba(15, 23, 42, .08);

            }

            .heroHighlight {

              display: flex;

              align-items: flex-start;

              gap: 16px;

              padding: 22px;

            }

            .heroHighlightIcon {

              width: 52px;

              height: 52px;

              border-radius: 15px;

              background: var(--primary-light);

              color: var(--primary);

              display: flex;

              justify-content: center;

              align-items: center;

              flex-shrink: 0;

              font-size: 1.4rem;

            }

            .heroHighlight h3 {

              margin-bottom: 6px;

              font-size: 1.05rem;

              line-height: 1.3;

            }

            .heroHighlight p {

              margin: 0;

              font-size: .9rem;

              line-height: 1.55;

            }

            .heroDivider {

              width: calc(100% - 44px);

              height: 1px;

              margin: 0 auto;

              background: var(--border);

            }

          }


          /* =========================
            MOBILE
            600px and below
          ========================= */

          @media (max-width: 600px) {

            /* General */

            .home {
              background:
                radial-gradient(circle at 96% 7%, rgba(10,102,240,.14), transparent 34%),
                radial-gradient(circle at 5% 72%, rgba(245,197,66,.11), transparent 30%),
                #fff;
            }

            /* Hero */

            .hero {
              min-height: auto;
              padding: 100px 20px 80px;
            }

            .tagline {
              font-size: 11px;
              letter-spacing: 2px;
            }

            .heroTitle {
              font-size: 2.3rem;
              line-height: 1.15;
              letter-spacing: -1px;
            }

            .description {
              margin-top: 22px;
              font-size: 16px;
              line-height: 1.7;
            }

            .heroQuoteButton {
              width: 100%;
              justify-content: center;
              padding: 15px 20px;
            }

            /* About */

            .aboutSection {
              padding: 70px 20px;
            }

            .aboutContent {
              grid-template-columns: 1fr;
              gap: 36px;
            }

            .aboutImageFrame {
              min-height: 199px;
              
            }

            .aboutCopy h2 {
              font-size: 2rem;
            }

            .aboutCopy p {
              font-size: 16px;
            }

            /* Section Titles */

            .sectionContent h2 {
              font-size: 30px;
            }

            .sectionContent p {
              font-size: 16px;
            }

            /* Services */

            .servicesPreview {
              padding: 70px 20px;
            }

            .serviceGrid {
              grid-template-columns: 1fr;
              gap: 22px;
            }

            .serviceCard {
              padding: 14px;
            }

            /* Why Us */

            .whySection {
              padding: 70px 20px;
            }

            .whyContent {
              grid-template-columns: 1fr;
              gap: 32px;
            }

            .benefitGrid {
              grid-template-columns: 1fr;
              gap: 16px;
            }

            /* Gallery */

            .gallerySection {
              padding: 76px 20px;
            }

            .galleryGrid {
              grid-template-columns: 1fr;
              gap: 24px;
              margin-top: 38px;
            }

            .galleryItem {
              width: 100%;
              min-height: 250px;
              aspect-ratio: 1.2;
              border-radius: 22px;
              padding: 8px;
              gap: 9px;
              align-items: stretch;
              justify-content: initial;
            }

            .galleryImageFrame {
              width: auto;
              height: auto;
              flex: 1;
              align-self: stretch;
              border-radius: 15px;
            }

            .galleryItem figcaption {
              position: static;
              padding: 11px 12px;
              border-radius: 13px;
              background: rgba(255,255,255,.96);
              color: #063b99;
              font-size: 13px;
            }

            /* CTA */

            .homeCta {
              margin: 50px 20px 0;
              padding: 50px 20px;
              border-radius: 20px;
            }

            /* Hero Highlights */

          .heroHighlights {

            margin-top: 32px;

            border-radius: 20px;

          }

          .heroHighlight {

            gap: 14px;

            padding: 20px;

          }

          .heroHighlightIcon {

            width: 48px;

            height: 48px;

            border-radius: 14px;

            font-size: 1.25rem;

          }

          .heroHighlightIcon svg {

            width: 24px;

            height: 24px;

          }

          .heroHighlight h3 {

            margin-bottom: 5px;

            font-size: .98rem;

          }

          .heroHighlight p {

            font-size: .85rem;

            line-height: 1.5;

          }

          .heroDivider {

            width: calc(100% - 40px);

          }

          }


          /* =========================
            SMALL PHONES
            380px and below
          ========================= */

          @media (max-width: 380px) {

            .hero {
              padding: 90px 16px 70px;
            }

            .heroTitle {
              font-size: 2rem;
            }

            .tagline {
              font-size: 10px;
            }

            .description {
              font-size: 15px;
            }

            .aboutSection,
            .servicesPreview,
            .whySection,
            .gallerySection {
              padding-left: 16px;
              padding-right: 16px;
            }

            .homeCta {
              margin: 40px 16px 0;
              padding: 40px 16px;
            }

            /* Hero Highlights */

            .heroHighlights {

              margin-top: 28px;

              border-radius: 18px;

            }

            .heroHighlight {

              gap: 12px;

              padding: 18px 16px;

            }

            .heroHighlightIcon {

              width: 44px;

              height: 44px;

              border-radius: 12px;

              font-size: 1.1rem;

            }

            .heroHighlightIcon svg {

              width: 22px;

              height: 22px;

            }

            .heroHighlight h3 {

              margin-bottom: 4px;

              font-size: .92rem;

              line-height: 1.25;

            }

            .heroHighlight p {

              font-size: .8rem;

              line-height: 1.45;

            }

            .heroDivider {

              width: calc(100% - 32px);

            }

          }


          /* =========================
            REDUCED MOTION
          ========================= */

          @media (prefers-reduced-motion: reduce) {

            .galleryImageFrame img {
              transition: none;
            }

            .home .heroEntranceTagline,
            .home .heroEntranceTitle,
            .home .heroEntranceDescription,
            .home .heroEntranceCta {
              animation: none;
            }

          }


      `}</style>
    </>
  );
}
