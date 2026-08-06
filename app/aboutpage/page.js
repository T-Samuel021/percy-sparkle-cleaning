"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  CalendarDays,
} from "lucide-react";

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  const values = [
    {
      icon: <Sparkles size={30} strokeWidth={2.2} />,
      title: "Attention To Detail",
      text: "Every corner matters. We focus on the small details that transform a clean space into a sparkling one.",
    },
    {
      icon: <ShieldCheck size={30} strokeWidth={2.2} />,
      title: "Reliable Service",
      text: "Our professional approach ensures dependable cleaning you can trust every time.",
    },
    {
      icon: <HeartHandshake size={30} strokeWidth={2.2} />,
      title: "Customer Care",
      text: "We listen, understand your needs, and provide cleaning solutions built around you.",
    },
  ];


  const approach = [
    {
      number: "01",
      title: "Professional Team",
      text: "Our cleaners are committed to delivering high standards with care, respect, and consistency.",
    },
    {
      number: "02",
      title: "Flexible Cleaning",
      text: "Whether you need regular cleaning, deep cleaning, or a one-off service, we adapt around your schedule.",
    },
    {
      number: "03",
      title: "Quality Results",
      text: "We combine experience, attention to detail, and the right methods to achieve excellent results.",
    },
  ];


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
      <main className="aboutPage">


        {/* =========================
            ABOUT HERO
        ========================= */}

        <section className="aboutHero">

          <div className="aboutHeroContent">

            <div className="aboutHeroCopy">

              <p className="eyebrow">
                About Percy Sparkle
              </p>


              <h1>
                Cleaning spaces.
                <br />
                Creating comfort.
              </h1>


              <p className="heroDescription">
                Percy Sparkle Cleaning Services provides professional
                residential and commercial cleaning across the UK,
                bringing reliability, care, and attention to every space
                we serve.
              </p>


              <div className="aboutHeroStats">

                <div>
                  <strong>100%</strong>
                  <span>Quality Focus</span>
                </div>

                <div>
                  <strong>UK</strong>
                  <span>Trusted Service</span>
                </div>

                <div>
                  <strong>24/7</strong>
                  <span>Flexible Support</span>
                </div>

              </div>


            </div>



            <motion.div
              className="aboutHeroImage"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 80,
                      scale: 0.92,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <div className="aboutHeroImageFrame">

                <img
                  src="https://res.cloudinary.com/wt1k8kgj/image/upload/Cleaner_squeegeeing_glass_window_2K_202607291639_1_d9wr34.jpg"
                  alt="Percy Sparkle cleaning team"
                />

              </div>

            </motion.div>


          </div>


        </section>





        {/* =========================
            WHO WE ARE
        ========================= */}


        <section className="storySection">


          <div className="storyImage">

            <img
              src="https://res.cloudinary.com/wt1k8kgj/image/upload/Cleaner_squeegeeing_glass_window_2K_202607291726_1_syb1n8.jpg"
              alt="Professional home cleaning"
            />

          </div>



          <div className="storyContent">

            <p className="eyebrow">
              Who We Are
            </p>


            <h2>
              A cleaning company built around trust.
            </h2>


            <p>
              At Percy Sparkle, we believe cleaning is more than making
              a place look good. It is about creating healthier,
              comfortable environments where people can live and work
              with confidence.
            </p>


            <p>
              Our goal is simple: deliver dependable cleaning services
              with professionalism, care, and a personal touch.
            </p>


            <div className="storyPoints">

              <span>
                Professional and friendly cleaners
              </span>

              <span>
                Services tailored to your needs
              </span>

              <span>
                Consistent results you can rely on
              </span>

            </div>


          </div>


        </section>





        {/* =========================
            VALUES
        ========================= */}


        <section className="valuesSection">


          <div className="sectionContent">

            <p className="eyebrow">
              Our Values
            </p>


            <h2>
              The standards behind every sparkle.
            </h2>


            <p>
              Everything we do is guided by quality, reliability,
              and genuine care for our customers.
            </p>


          </div>



          <div className="valuesGrid">


            {values.map((value, index) => (

              <motion.article
                key={value.title}
                className="valueCard"

                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 60,
                        scale: 0.92,
                      }
                }

                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}

                viewport={{
                  once: true,
                  amount: 0.3,
                }}

                transition={{
                  duration: 1.2,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                <div className="valueIcon">
                  {value.icon}
                </div>


                <h3>
                  {value.title}
                </h3>


                <p>
                  {value.text}
                </p>


              </motion.article>

            ))}


          </div>


        </section>





        {/* =========================
            OUR APPROACH
        ========================= */}


        <section className="approachSection">


          <div className="approachHeader">

            <p className="eyebrow">
              Our Approach
            </p>


            <h2>
              Simple process. Excellent results.
            </h2>

          </div>



          <div className="approachGrid">


            {approach.map((item, index)=>(

              <motion.div

                key={item.number}

                className="approachCard"

                initial={
                  reduceMotion
                  ? false
                  : {
                      opacity:0,
                      x:index % 2 === 0 ? -50 : 50,
                    }
                }

                whileInView={{
                  opacity:1,
                  x:0,
                }}

                viewport={{
                  once:true,
                  amount:.3,
                }}

                transition={{
                  duration:1.2,
                  delay:index * .15,
                }}

              >

                <span>
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>


                <p>
                  {item.text}
                </p>


              </motion.div>

            ))}


          </div>


        </section>





        {/* =========================
            CTA
        ========================= */}


        <section className="aboutCta">


          <p className="eyebrow">
            Ready To Experience Better Cleaning?
          </p>


          <h2>
            Let Percy Sparkle transform your space.
          </h2>


          <p>
            Contact us today for a free, no-obligation quote.
          </p>

          <a
            href="/contactpage#quote-form"
            className="quoteButton"
          >
            Get a free quote
          </a>


        </section>


      </main>



      <style jsx global>{`

                
       /* =====================================================
          ABOUT PAGE
        ===================================================== */

        .aboutPage {
          width: 100%;
          overflow: hidden;
          background:
            radial-gradient(circle at 90% 5%, rgba(10,102,240,.12), transparent 32%),
            radial-gradient(circle at 8% 70%, rgba(245,197,66,.08), transparent 28%),
            #fff;
        }



        /* =====================================================
          HERO
        ===================================================== */

        .aboutHero {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 92vh;
          padding: 140px 8%;
          overflow: hidden;
        }

        .aboutHero::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;

          background:
            radial-gradient(circle at 50% -25%, rgba(10,102,240,.22), transparent 45%),
            radial-gradient(circle at 5% 10%, rgba(255,255,255,.95), transparent 28%);
        }

        .aboutHeroContent {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 1280px;

          margin: 0 auto;

          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 80px;
          align-items: center;
        }



        /* =====================================================
          HERO COPY
        ===================================================== */

        .aboutHeroCopy {
          display: flex;
          flex-direction: column;
        }

        .aboutHero .eyebrow {
          display: inline-flex;
          align-items: center;

          margin-bottom: 22px;

          font-size: 12px;
          font-weight: 800;
          letter-spacing: .18em;
          text-transform: uppercase;

          color: var(--primary);
        }

        .aboutHero h1 {
          margin: 0;

          font-family: var(--font-heading), sans-serif;

          font-size: clamp(3.4rem, 5vw, 5.3rem);
          line-height: 1.08;
          letter-spacing: -2px;

          color: var(--ink);
        }

        .heroDescription {
          max-width: 650px;

          margin-top: 32px;

          font-size: 20px;
          line-height: 1.9;

          color: var(--text-secondary);
        }



        /* =====================================================
          HERO STATS
        ===================================================== */

        .aboutHeroStats {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;

          margin-top: 45px;
        }

        .aboutHeroStats div {
          flex: 1;
          min-width: 170px;

          padding: 26px;

          border-radius: 22px;

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


          border: 1px solid rgba(10,102,240,.12);

          box-shadow:
            0 18px 40px rgba(10,102,240,.12);

          border: 1px solid rgba(10,102,240,.12);

          box-shadow:
            0 18px 45px rgba(15,23,42,.08);

          transition:
            transform .35s ease,
            box-shadow .35s ease;
        }

        .aboutHeroStats div:hover {
          transform: translateY(-8px);

          box-shadow:
            0 24px 55px rgba(10,102,240,.18);
        }

        .aboutHeroStats strong {
          display: block;

          margin-bottom: 8px;

          font-size: 2rem;
          font-weight: 800;

          color: var(--primary);
        }

        .aboutHeroStats span {
          display: block;

          font-size: 15px;
          font-weight: 600;

          color: var(--text-secondary);
        }



        /* =====================================================
          HERO IMAGE
        ===================================================== */

        .aboutHeroImage {
          position: relative;
        }

        .aboutHeroImageFrame {
          position: relative;

          padding: 18px;

          border-radius: 34px;

          background:
            radial-gradient(circle at 100% 0%,
              rgba(10,102,240,.18),
              transparent 42%),
            linear-gradient(145deg,#ffffff,#dcecff);

          border: 1px solid rgba(10,102,240,.15);

          box-shadow:
            0 28px 70px rgba(10,102,240,.16);
        }

        .aboutHeroImageFrame::after {
          content: "";

          position: absolute;
          inset: -12px;

          border-radius: 42px;
          

          border: 2px solid rgba(10,102,240,.08);

          pointer-events: none;
        }

        .aboutHeroImageFrame img {
          display: block;

          width: 100%;
          height: 450px;

          object-fit: cover;

          border-radius: 24px;
        }



        /* =====================================================
          STORY
        ===================================================== */

        .storySection {
          width: 100%;
          max-width: 1280px;

          margin: 0 auto;

          padding: 130px 8%;

          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 90px;
          align-items: center;
        }



        /* =====================================================
          STORY IMAGE
        ===================================================== */

        .storyImage {
          position: relative;
          
          padding: 16px;

          border-radius: 30px;

          background:
            radial-gradient(circle at 100% 0%,
              rgba(10,102,240,.18),
              transparent 40%),
            linear-gradient(145deg,#ffffff,#edf6ff);

          border: 1px solid rgba(10,102,240,.14);

          box-shadow:
            0 24px 60px rgba(10,102,240,.12);
        }

        .storyImage::before {
          content: "";

          position: absolute;
          inset: -10px;

          border-radius: 36px;

          border: 1px solid rgba(10,102,240,.08);

          pointer-events: none;
        }

        .storyImage img {
          display: block;

          width: 100%;
          height: 720px;

          object-fit: cover;

          border-radius: 20px;
        }



        /* =====================================================
          STORY CONTENT
        ===================================================== */

        .storyContent {
          display: flex;
          flex-direction: column;
        }

        .storyContent .eyebrow {
          margin-bottom: 18px;

          font-size: 12px;
          font-weight: 800;
          letter-spacing: .18em;
          text-transform: uppercase;

          color: var(--primary);
        }

        .storyContent h2 {
          margin: 0 0 26px;

          font-family: var(--font-heading), sans-serif;

          font-size: clamp(2.6rem,4vw,3.8rem);
          line-height: 1.12;
          letter-spacing: -1px;

          color: var(--ink);
        }

        .storyContent p {
          margin: 0 0 22px;

          font-size: 18px;
          line-height: 1.9;

          color: var(--text-secondary);
        }



        /* =====================================================
          STORY POINTS
        ===================================================== */

        .storyPoints {
          display: grid;
          gap: 18px;

          margin-top: 20px;
        }

        .storyPoints span {
          display: flex;
          align-items: center;

          gap: 16px;

          padding: 18px 22px;

          border-radius: 18px;

          background:
            radial-gradient(circle at 50% -15%, rgba(10,102,240,.18), transparent 42%),
            radial-gradient(circle at 15% 10%, rgba(245,197,66,.08), transparent 30%),
            radial-gradient(circle at 85% 5%, rgba(255,255,255,.75), transparent 34%),
            linear-gradient(
              180deg,
              #fafdff 0%,
              #eaf4ff 10%,
              #d7ebff 100%
            );

          border: 1px solid rgba(10,102,240,.10);

          box-shadow:
            0 12px 30px rgba(15,23,42,.05);

          font-weight: 600;

          color: var(--ink);

          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        .storyPoints span:hover {
          transform: translateX(10px);

          box-shadow:
            0 18px 40px rgba(10,102,240,.14);
        }

        .storyPoints span::before {
          content: "";

          width: 12px;
          height: 12px;

          flex-shrink: 0;

          border-radius: 50%;

          background: var(--primary);

          box-shadow:
            0 0 0 6px rgba(10,102,240,.12);
        } 

        /* =====================================================
          VALUES SECTION
        ===================================================== */

        .valuesSection {
          padding: 130px 8%;
          background: #f8fbff;
        }

        .sectionContent {
          max-width: 760px;
          margin: 0 auto 70px;
          text-align: center;
        }

        .sectionContent .eyebrow {
          display: inline-block;

          margin-bottom: 18px;

          color: var(--primary);

          font-size: 12px;
          font-weight: 800;
          letter-spacing: .18em;
          text-transform: uppercase;
        }

        .sectionContent h2 {
          margin: 0 0 22px;

          font-family: var(--font-heading), sans-serif;

          font-size: clamp(2rem,4vw,3.8rem);
          line-height: 1.15;
          letter-spacing: -1px;

          color: var(--ink);
        }

        .sectionContent p {
          margin: 0 auto;

          max-width: 620px;

          font-size: 18px;
          line-height: 1.8;

          color: var(--text-secondary);
        }



        /* =====================================================
          VALUES GRID
        ===================================================== */

        .valuesGrid {
          width: 100%;
          max-width: 1280px;

          margin: 0 auto;

          display: grid;
          grid-template-columns: repeat(3, 1fr);

          gap: 28px;
        }



        /* =====================================================
          VALUE CARD
        ===================================================== */

        .valueCard {
          position: relative;

          display: flex;
          flex-direction: column;

          padding: 42px 34px;

          border-radius: 28px;

          background:
            radial-gradient(circle at 100% 0%,
              rgba(10,102,240,.12),
              transparent 42%),
            linear-gradient(145deg,#ffffff,#eef6ff);

          border: 1px solid rgba(10,102,240,.12);

          box-shadow:
            0 20px 50px rgba(15,23,42,.08);

          overflow: hidden;

          transition:
            transform .4s ease,
            box-shadow .4s ease,
            border-color .4s ease;
        }

        .valueCard:hover {
          transform: translateY(-10px);

          border-color: rgba(10,102,240,.28);

          box-shadow:
            0 30px 70px rgba(10,102,240,.18);
        }

        .valueCard::before {
          content: "";

          position: absolute;

          top: -80px;
          right: -80px;

          width: 180px;
          height: 180px;

          border-radius: 50%;

          background:
            rgba(10,102,240,.05);

          transition: transform .45s ease;
        }

        .valueCard:hover::before {
          transform: scale(1.25);
        }



        /* =====================================================
          VALUE ICON
        ===================================================== */

        .valueIcon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 74px;
          height: 74px;

          margin-bottom: 28px;

          border-radius: 22px;

          background:
            linear-gradient(
              135deg,
              var(--primary),
              var(--primary-dark)
            );

          color: white;

          box-shadow:
            0 18px 35px rgba(10,102,240,.22);

          transition:
            transform .35s ease;
        }

        .valueCard:hover .valueIcon {
          transform: rotate(-8deg) scale(1.08);
        }

        .valueCard h3 {
          margin: 0 0 16px;

          font-size: 24px;
          font-weight: 700;

          color: var(--ink);
        }

        .valueCard p {
          margin: 0;

          font-size: 17px;
          line-height: 1.9;

          color: var(--text-secondary);
        }



        /* =====================================================
          APPROACH SECTION
        ===================================================== */

        .approachSection {
          padding: 130px 8%;
        }

        .approachHeader {
          max-width: 760px;

          margin: 0 auto 70px;

          text-align: center;
        }

        .approachHeader .eyebrow {
          display: inline-block;

          margin-bottom: 18px;

          color: var(--primary);

          font-size: 12px;
          font-weight: 800;
          letter-spacing: .18em;
          text-transform: uppercase;
        }

        .approachHeader h2 {
          margin: 0;

          font-family: var(--font-heading), sans-serif;

          font-size: clamp(2.6rem,4vw,3.8rem);

          line-height: 1.15;

          color: var(--ink);
        }



        /* =====================================================
          APPROACH GRID
        ===================================================== */

        .approachGrid {
          width: 100%;
          max-width: 1280px;

          margin: 0 auto;

          display: grid;
          grid-template-columns: repeat(3,1fr);

          gap: 30px;
        }



        /* =====================================================
          APPROACH CARD
        ===================================================== */

        .approachCard {
          position: relative;

          padding: 42px 36px;

          border-radius: 30px;

           background:
          radial-gradient(circle at 50% -20%, rgba(10,102,240,.38), transparent 42%),
          radial-gradient(circle at 10% 15%, rgba(255,255,255,.55), transparent 28%),
          radial-gradient(circle at 100% 0%, rgba(245,197,66,.10), transparent 26%),
          linear-gradient(
            180deg,
            #edf6ff 0%,
            #d7ebff 35%,
            #bddfff 72%,
            #a6d4ff 100%
          );

          border: 1px solid rgba(10,102,240,.10);

          box-shadow:
            0 18px 45px rgba(15,23,42,.08);

          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .approachCard:hover {
          transform: translateY(-10px);

          border-color: rgba(10,102,240,.24);

          box-shadow:
            0 28px 60px rgba(10,102,240,.16);
        }

        .approachCard span {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          width: 72px;
          height: 72px;

          margin-bottom: 26px;

          border-radius: 50%;

          background:
            linear-gradient(
              135deg,
              var(--primary),
              var(--primary-dark)
            );

          color: white;

          font-size: 22px;
          font-weight: 800;

          box-shadow:
            0 16px 35px rgba(10,102,240,.22);
        }

        .approachCard h3 {
          margin: 0 0 18px;

          font-size: 25px;

          color: var(--ink);
        }

        .approachCard p {
          margin: 0;

          font-size: 17px;
          line-height: 1.9;

          color: var(--text-secondary);
        }



        /* =====================================================
          CTA
        ===================================================== */

        .aboutCta {
          width: min(1280px, calc(100% - 16%));

          margin: 130px auto;

          padding: 90px 70px;

          border-radius: 36px;

          text-align: center;

          color: white;

          background:
            radial-gradient(circle at 100% 0%,
              rgba(245,197,66,.30),
              transparent 28%),
            linear-gradient(
              135deg,
              var(--primary),
              var(--primary-dark)
            );

          box-shadow:
            0 30px 80px rgba(10,102,240,.25);
        }

        .aboutCta .eyebrow {
          color: rgba(255,255,255,.82);

          font-size: 12px;
          font-weight: 800;
          letter-spacing: .18em;
          text-transform: uppercase;

          margin-bottom: 20px;
        }

        .aboutCta h2 {
          margin: 0 auto 24px;

          max-width: 760px;

          font-family: var(--font-heading), sans-serif;

          font-size: clamp(2.8rem,4vw,4rem);
          color: #ffff;

          line-height: 1.15;
        }

        .aboutCta p {
          max-width: 640px;

          margin: 0 auto;

          font-size: 19px;
          line-height: 1.9;

          color: rgba(255,255,255,.88);
        }

        .aboutCta a {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          margin-top: 40px;

          padding: 18px 36px;

          border-radius: 14px;

          background: white;

          color: var(--primary);

          text-decoration: none;

          font-weight: 700;

          transition:
            transform .3s ease,
            box-shadow .3s ease,
            background .3s ease;
        }

        .aboutCta a:hover {
          transform: translateY(-4px);

          background: #f8fbff;

          box-shadow:
            0 20px 40px rgba(0,0,0,.18);
        }


        /* =====================================================
          TABLET
          769px – 1024px
        ===================================================== */

        @media (max-width:1024px){

          /* -------------------------
            HERO
          ------------------------- */

          .aboutHero{
            min-height:auto;
            padding:120px 6% 100px;
          }

          .aboutHeroContent{
            gap:60px;
            grid-template-columns:1fr 1fr;
          }

          .aboutHero h1{
            font-size:clamp(3rem,5vw,4.2rem);
          }

          .heroDescription{
            max-width:100%;
            font-size:18px;
            line-height:1.8;
          }


          /* -------------------------
            HERO STATS
          ------------------------- */

          .aboutHeroStats{
            gap:18px;
          }

          .aboutHeroStats div{
            min-width:140px;
            padding:22px;
          }

          .aboutHeroStats strong{
            font-size:1.75rem;
          }

          .aboutHeroStats span{
            font-size:14px;
          }


          /* -------------------------
            HERO IMAGE
          ------------------------- */

          .aboutHeroImageFrame{
            padding:14px;
            border-radius:28px;
          }

          .aboutHeroImageFrame img{
            height:560px;
            border-radius:20px;
          }


          /* -------------------------
            STORY
          ------------------------- */

          .storySection{
            padding:100px 6%;
            gap:60px;
            grid-template-columns:.95fr 1.05fr;
          }

          .storyImage img{
            height:520px;
          }

          .storyContent h2{
            font-size:clamp(2.2rem,4vw,3rem);
          }

          .storyContent p{
            font-size:17px;
          }

          .storyPoints{
            gap:14px;
          }

          .storyPoints span{
            padding:16px 18px;
            font-size:15px;
          }


          /* -------------------------
            VALUES
          ------------------------- */

          .valuesSection{
            padding:100px 6%;
          }

          .sectionContent{
            margin-bottom:55px;
          }

          .sectionContent h2{
            font-size:clamp(2.2rem,4vw,3rem);
          }

          .sectionContent p{
            font-size:17px;
          }

          .valuesGrid{
            grid-template-columns:repeat(2,1fr);
            gap:24px;
          }

          .valueCard{
            padding:34px 28px;
          }

          .valueIcon{
            width:68px;
            height:68px;
            margin-bottom:24px;
          }

          .valueCard h3{
            font-size:22px;
          }

          .valueCard p{
            font-size:16px;
          }


          /* -------------------------
            APPROACH
          ------------------------- */

          .approachSection{
            padding:100px 6%;
          }

          .approachHeader{
            margin-bottom:55px;
          }

          .approachHeader h2{
            font-size:clamp(2.2rem,4vw,3rem);
          }

          .approachGrid{
            grid-template-columns:repeat(3,1fr);
            gap:20px;
          }

          .approachCard{
            padding:32px 24px;
          }

          .approachCard span{
            width:64px;
            height:64px;
            font-size:20px;
            margin-bottom:20px;
          }

          .approachCard h3{
            font-size:21px;
          }

          .approachCard p{
            font-size:16px;
            line-height:1.8;
          }


          /* -------------------------
            CTA
          ------------------------- */

          .aboutCta{
            width:calc(100% - 12%);
            margin:100px auto;
            padding:70px 50px;
            border-radius:30px;
          }

          .aboutCta h2{
            font-size:clamp(2.4rem,4vw,3.3rem);
          }

          .aboutCta p{
            font-size:17px;
          }

          .aboutCta a{
            padding:16px 32px;
            font-size:15px;
          }

        }



       /* =====================================================
        MOBILE
        768px AND BELOW
      ===================================================== */

      @media (max-width:768px){

        /* ==========================
          HERO
        ========================== */

        .aboutHero{
          min-height:auto;
          padding:110px 40px 80px;
        }

        .aboutHero h1{
          width: 100% !important;

          text-align: justify !important;

          font-size: 35px !important;

          line-height: 1.1 !important;

          letter-spacing: -2px !important;

          margin: 0 !important;
        }

        .aboutHeroContent{
          grid-template-columns:1fr;
          gap:55px;
        }

        .aboutHeroCopy{
          order:1;
          text-align:justify;
          align-items:center;
        }

        .aboutHero h1{
          font-size:clamp(2.6rem,7vw,3.6rem);
          line-height:1.12;
          letter-spacing:-1px;
        }

        .heroDescription{
          max-width:100%;
          margin-top:24px;
          font-size:17px;
          line-height:1.8;
        }

        .aboutHeroImage{
          order:2;

          margin-left:0px;
          margin-right:0px;
          margin-bottom:-20px;
        }

        .aboutHeroImageFrame{
          padding:0;
          border-radius:30px;
        }

        .aboutHeroImageFrame img{
          width:100%;
          height:260px;
          border-radius:19px;
        }


        /* ==========================
          HERO STATS
        ========================== */

        .aboutHeroStats{
          width:100%;
          justify-content:center;
          gap:16px;
          margin-top:36px;
        }

        .aboutHeroStats div{
          flex:1 1 180px;
          min-width:160px;
          text-align:center;
          padding:20px;
        }

        .aboutHeroStats strong{
          font-size:1.6rem;
        }

        .aboutHeroStats span{
          font-size:14px;
        }


        /* ==========================
          STORY
        ========================== */

        .storySection{
          padding:90px 40px;
          grid-template-columns:1fr;
          gap:50px;
        }

        .storyImage{
          order:1;

          margin-left:-35px;
          margin-right:-35px;
          margin-Top:-35px;


          padding:0;
          border-radius:19px;
        }

        .storyImage::before{
          display:none;
        }

        .storyImage img{
          width:100%;
          height:230px;

          border-radius:19px;
        }
        .storyContent{
          order:2;
          text-align: left;
        }

        .storyContent h2{
          font-size:2.4rem;
          font-size:25px;
        }

        .storyContent p{
          font-size:15px;
          line-height:1.8;
          text-align: justify;
        }

        .storyPoints{
          gap:14px;
          margin-top:18px;
        }

        .storyPoints span{
          padding:18px;
          font-size:15px;
        }


        /* ==========================
          VALUES
        ========================== */

        .valuesSection{
          padding:10px 40px;
        }

        .sectionContent{
          margin-bottom:15px;
        }

        .sectionContent h2{
          font-size:27px;
          margin-top:14px;
        }

        .sectionContent p{
          font-size:17px;
        }

        .valuesGrid{
          grid-template-columns:1fr;
          gap:24px;
        }

        .valueCard{
          padding:34px 28px;
        }

        .valueIcon{
          width:68px;
          height:68px;
          margin-bottom:22px;
        }

        .valueCard h3{
          font-size:22px;
        }

        .valueCard p{
          font-size:16px;
          line-height:1.8;
        }


        /* ==========================
          APPROACH
        ========================== */

        .approachSection{
          padding:90px 40px;
        }

        .approachHeader{
          margin-bottom:45px;
        }

        .approachHeader h2{
          font-size:4px;
        }

        .approachGrid{
          grid-template-columns:1fr;
          gap:22px;
        }

        .approachCard{
          padding:32px 26px;
        }

        .approachCard span{
          width:62px;
          height:62px;
          margin-bottom:20px;
          font-size:20px;
        }

        .approachCard h3{
          font-size:22px;
        }

        .approachCard p{
          font-size:16px;
          line-height:1.8;
        }


        /* ==========================
          CTA
        ========================== */

        .aboutCta {
          width: 100% !important;

          margin-top: 0px!important;
          margin-right: 0 !important;
          margin-bottom: 90px;
          margin-left: 0 !important;

          border-radius: 0!important;

          padding: 60px 24px;
        }

        .aboutCta h2{
          font-size:39px;
        }

        .aboutCta p{
          font-size:17px;
          line-height:1.8;
        }

        .aboutCta a{
          width:100%;
          justify-content:center;
          padding:18px 24px;
          margin-top:32px;
        }

      }

      


        /* =====================================================
          MOBILE
          600px AND BELOW
        ===================================================== */

        @media (max-width:600px){

          /* ==========================
            HERO
          ========================== */

          .aboutHero{
            padding:95px 20px 60px;
          }

          .aboutHero h1{
            width:100% !important;

            font-size:30px !important;
            line-height:1.1 !important;
            letter-spacing:-1.5px !important;

            margin:0 !important;
          }

          .aboutHeroContent{
            gap:40px;
          }

          .heroDescription{
            margin-top:20px;
            font-size:15px;
            line-height:1.75;
            text-align:justify;
          }

          .aboutHeroStats{
            gap:12px;
            margin-top:30px;
          }

          .aboutHeroStats div{
            min-width:140px;
            padding:16px;
          }

          .aboutHeroStats strong{
            font-size:1.4rem;
          }

          .aboutHeroStats span{
            font-size:13px;
          }

          .aboutHeroImage{
            margin-bottom:-15px;
          }

          .aboutHeroImageFrame{
            border-radius:22px;
          }

          .aboutHeroImageFrame img{
            height:220px;
            border-radius:16px;
          }


          /* ==========================
            STORY
          ========================== */

          .storySection{
            padding:70px 20px;
            gap:40px;
          }

          .storyImage{
            margin-left:-18px;
            margin-right:-18px;
            margin-top:-20px;

            border-radius:16px;
          }

          .storyImage img{
            height:210px;
            border-radius:16px;
          }

          .storyContent h2{
            font-size:22px;
          }

          .storyContent p{
            font-size:14px;
            line-height:1.75;
          }

          .storyPoints{
            gap:12px;
          }

          .storyPoints span{
            padding:16px;
            font-size:14px;
          }


          /* ==========================
            VALUES
          ========================== */

          .valuesSection{
            padding:0 20px;
          }

          .sectionContent{
            margin-bottom:12px;
          }

          .sectionContent h2{
            font-size:24px;
            margin-top:12px;
          }

          .sectionContent p{
            font-size:15px;
          }

          .valuesGrid{
            gap:18px;
          }

          .valueCard{
            padding:28px 22px;
          }

          .valueIcon{
            width:60px;
            height:60px;
            margin-bottom:18px;
          }

          .valueCard h3{
            font-size:20px;
          }

          .valueCard p{
            font-size:15px;
          }


          /* ==========================
            APPROACH
          ========================== */

          .approachSection{
            padding:70px 20px;
          }

          .approachHeader{
            margin-bottom:35px;
          }

          .approachHeader h2{
            font-size:24px;
          }

          .approachCard{
            padding:28px 22px;
          }

          .approachCard span{
            width:56px;
            height:56px;
            font-size:18px;
          }

          .approachCard h3{
            font-size:20px;
          }

          .approachCard p{
            font-size:15px;
            line-height:1.75;
          }


          /* ==========================
            CTA
          ========================== */

          .aboutCta{
            margin-top:0 !important;
            margin-bottom:70px;

            padding:50px 20px;

            border-radius:0 !important;
          }

          .aboutCta h2{
            font-size:32px;
          }

          .aboutCta p{
            font-size:15px;
            line-height:1.75;
          }

          .aboutCta a{
            padding:16px 20px;
            font-size:15px;
          }

        }
      `}</style>

    </>
  );
}