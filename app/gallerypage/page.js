"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export default function GalleryPage() {
  const reduceMotion = useReducedMotion();

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGallery() {
      try {
        const response = await fetch("/api/gallery");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadGallery();
  }, []);

  const heroImage = images[0];
  const featuredImages = images.slice(1, 4);
  const galleryImages = images.slice(4);

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

        <div className="galleryPage">
        {/* =========================
              HERO
        ========================= */}

        {heroImage && (
          <section className="galleryHero">
            <div className="galleryHeroContent">
              <motion.div
                className="galleryHeroText"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: -50,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
               <p className="eyebrow">  OUR GALLERY</p>

                <h1>
                  Every clean
                  <br />
                  tells a story.
                </h1>

                <p>
                  Explore some of our recent cleaning projects and see the
                  care, attention to detail and sparkling results that Percy
                  Sparkle delivers across homes and businesses.
                </p>

                <Link
                  href="/contactpage#quote-form"
                  className="heroQuoteButton"
                >
                  Get a Free Quote
                </Link>
              </motion.div>

              <motion.div
                className="galleryHeroFrame"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.92,
                        x: 60,
                      }
                }
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
              >
                <img
                   src={heroImage.heroUrl}
                   alt={heroImage.public_id}
                />
              </motion.div>
            </div>
          </section>
        )}

        {/* =========================
            FEATURED
        ========================= */}

        {featuredImages.length > 0 && (
          <section className="featuredGallerySection">
            <div className="sectionHeading">
              <p className="eyebrow">
                Featured Projects
              </p>

              <h2>
                A closer look at
                our latest work.
              </h2>
            </div>

            <div className="featuredGalleryGrid">
              {featuredImages.map((image, index) => (
                <motion.article
                  key={image.id}
                  className="featuredGalleryCard"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 60,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12,
                  }}
                >
                  <div className="featuredGalleryImage">
                    <img
                        src={image.cardUrl}
                        alt={image.public_id}
                    />

                    <div className="galleryCardTitle">
                        Featured Project
                    </div>
                    </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* =========================
            RECENT WORK
        ========================= */}

        {galleryImages.length > 0 && (
          <section className="recentGallerySection">
            <div className="sectionHeading">
              <p className="eyebrow">
                Gallery
              </p>

              <h2>
                Our Recent Work
              </h2>

              <p>
                Every image represents another space restored to a spotless,
                refreshed and welcoming environment.
              </p>
            </div>

            <div className="galleryGrid">
              {galleryImages.map((image, index) => (
                <motion.article
                  key={image.id}
                  className="galleryCard"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 50,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.05,
                  }}
                >
                  <div className="galleryImageWrapper">
                    <img
                        src={image.cardUrl}
                        alt={image.public_id}
                    />

                    <div className="galleryCardTitle">
                        Our Recent Work
                    </div>
                    </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}

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
                    Contact us today for a free, no-obligation quote and let us make your home or workplace sparkle.
                </p>

                <a
                    href="/contactpage#quote-form"
                    className="quoteButton"
                >
                    Get a free quote
                </a>

                </section>

            </div>

            <style jsx global>{`

                  
       /* =====================================================
          ABOUT PAGE
        ===================================================== */

html,
body{
   overflow-x:hidden;
}

        .galleryPage{
            background:
                radial-gradient(circle at 90% 5%, rgba(10,102,240,.12), transparent 32%),
                radial-gradient(circle at 8% 70%, rgba(245,197,66,.08), transparent 28%),
                #fff;

                overflow:hidden;
                width:100%;
           }
                

            /* ===================================================
            HERO
            =================================================== */

            .galleryHero{
            padding:130px 8% 110px;
            }

            .galleryHeroContent{
            max-width:1280px;
            margin:auto;
            display:grid;
            grid-template-columns:1fr 1.1fr;
            gap:72px;
            align-items:center;
            }

            .galleryHeroText h1{
            font-family: var(--font-heading), sans-serif;
            font-size:69px;
            line-height:1.05;
            color:var(--ink);
            margin:18px 0 26px;
            }

            .galleryHeroText .eyebrow{
                display:inline-block;

                margin-bottom:22px;

                font-size:12px;
                font-weight:800;
                letter-spacing:.18em;
                text-transform:uppercase;

                color:var(--primary);
            }

            .galleryHeroText > p:not(.eyebrow){
            font-size:1.12rem;
            line-height:1.9;
            color:var(--text-secondary);
            max-width:640px;
            margin-bottom:42px;
            }
           
            .galleryHeroFrame{
            padding:18px;
            border-radius:36px;

            background:
            radial-gradient(circle at top right,rgba(255,255,255,.96),rgba(255,255,255,.62)),
            linear-gradient(145deg,#ffffff,#dcecff);

            border:1px solid rgba(10,102,240,.14);

            box-shadow:
            0 28px 70px rgba(10,102,240,.16);

            position:relative;
            }

            .galleryHeroFrame::after{
            content:"";
            position:absolute;
            inset:10px;
            border-radius:28px;
            border:2px solid rgba(10,102,240,.08);
            pointer-events:none;
            }

            .galleryHeroFrame img{
            display:block;
            width:100%;
            height:550px;
            object-fit:cover;
            border-radius:24px;
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



            /* ===================================================
            FEATURED
            =================================================== */

            .featuredGallerySection{
            padding:0 8% 110px;
            }

            .sectionHeading{
            max-width:820px;
            margin:0 auto 70px;
            text-align:center;
            }

            .sectionHeading .eyebrow{
                display:inline-block;

                margin-bottom:18px;

                color:var(--primary);

                font-size:12px;
                font-weight:800;
                letter-spacing:.18em;
                text-transform:uppercase;
            }

            .sectionHeading h2{
            font-family:var(--font-heading);
            font-size:59px;
            margin:18px 0;
            }
        
            .sectionHeading p:last-child{
            font-size:1.05rem;
            line-height:1.8;
            color:var(--text-secondary);
            }

            .featuredGalleryGrid{
            max-width:1280px;
            margin:auto;

            display:grid;
            grid-template-columns:repeat(3,1fr);
            gap:32px;
            }

            .featuredGalleryCard{
            border-radius:34px;

            padding:18px;

            background:
            radial-gradient(circle at top right,rgba(255,255,255,.96),rgba(255,255,255,.65)),
            linear-gradient(145deg,#ffffff,#dcecff);

            border:1px solid rgba(10,102,240,.14);

            box-shadow:
            0 24px 60px rgba(10,102,240,.14);

            transition:.45s;
            }

            .featuredGalleryCard:hover{
            transform:translateY(-10px);
            box-shadow:
            0 36px 80px rgba(10,102,240,.18);
            }

            .featuredGalleryImage{
            position:relative;
            overflow:hidden;
            border-radius:24px;
            }

            .featuredGalleryImage img{
            width:100%;
            height:340px;
            display:block;
            object-fit:cover;
            transition:1s;
            }

            .featuredGalleryCard:hover img{
            transform:scale(1.08);
            }



            /* ===================================================
            GALLERY GRID
            =================================================== */

            .recentGallerySection{
            padding:0 8% 130px;
            }

            .galleryGrid{
            max-width:1280px;
            margin:auto;

            display:grid;
            grid-template-columns:repeat(3,1fr);
            gap:36px;
            }

            .galleryCard{
            padding:18px;

            border-radius:34px;

            background:
            radial-gradient(circle at top right,rgba(255,255,255,.96),rgba(255,255,255,.65)),
            linear-gradient(145deg,#ffffff,#dcecff);

            border:1px solid rgba(10,102,240,.14);

            box-shadow:
            0 24px 60px rgba(10,102,240,.14);

            transition:.45s;
            }

            .galleryCard:hover{
            transform:translateY(-10px);
            box-shadow:
            0 36px 80px rgba(10,102,240,.18);
            }

            .galleryImageWrapper{
            position:relative;
            overflow:hidden;
            border-radius:24px;
            }

            .galleryImageWrapper img{
            width:100%;
            height:330px;
            display:block;
            object-fit:cover;
            transition:1s;
            }

            .galleryCard:hover img{
            transform:scale(1.08);
            }



            /* ===================================================
            TITLE STRIP
            =================================================== */

            .galleryCardTitle{
            position:absolute;

            left:0;
            right:0;
            bottom:0;

            padding:18px 22px;

            background:
            linear-gradient(
              to bottom,
              rgba(255,255,255,.96) 0%,
              rgba(238,246,255,.96) 55%,
              rgba(212,232,255,.96) 100%
            );
            backdrop-filter:blur(14px);

            font-size:1rem;
            font-weight:700;
            color:var(--brand);

            border-top:1px solid rgba(10,102,240,.08);
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


        /* ===================================================
        MOBILE TABLET
        768px and below
        =================================================== */

        @media (max-width: 768px) {


        .galleryHero {
            padding: 100px 40px 80px;
        }


        .galleryHeroContent {
            gap: 45px;
        }


        .galleryHeroText h1 {
            font-size: 3rem;
            line-height: 1.12;
        }
            


        .galleryHeroText > p:not(.eyebrow) {
            font-size: 17px;
            line-height: 1.75;
            margin-bottom: 35px;
        }


        .heroQuoteButton {

            width: 100%;

            justify-content: center;

            padding: 16px 24px;

            font-size: 16px;

        }


        .galleryHeroFrame {
            padding: 14px;
            border-radius: 28px;
        }


        .galleryHeroFrame img {

            height: 430px;

            border-radius: 20px;

        }


        }


        /* =====================================================
        MOBILE
        768px AND BELOW
        ===================================================== */

        @media (max-width:768px){

        /* ==========================
            GLOBAL
        ========================== */

        .galleryPage{
            width:100%;
            overflow:hidden;
        }


        /* ==========================
            HERO
        ========================== */

        .galleryHero{
            padding:110px 40px 80px;
        }


        .galleryHeroContent{
            grid-template-columns:1fr;
            gap:45px;
        }


        .galleryHeroText{
            text-align:left;
        }


        .galleryHeroText .eyebrow{

            font-size:11px;
            letter-spacing:.16em;
            margin-bottom:18px;

        }
            
        .galleryHeroText{
        order: 2;
        }

        .galleryHeroFrame{
        order: 1;
        }
        
        .galleryHeroText h1{

            font-size:40px !important;
            line-height:1.08;

            letter-spacing:-1.5px;

            margin:15px 0 22px;

        }


        .galleryHeroText > p:not(.eyebrow){

            font-size:16px !important;

            line-height:1.75;

            margin-bottom:2px;

        }


        .heroQuoteButton{

            width:100%;

            justify-content:center;

            padding:16px 20px;

            font-size:15px;

        }



        .galleryHeroFrame{

            padding:12px;

            border-radius:24px;

        }


        .galleryHeroFrame::after{

            inset:7px;

            border-radius:18px;

        }


        .galleryHeroFrame img{

            height:300px !important;

            border-radius:16px;

        }




        /* ==========================
            SECTION HEADINGS
        ========================== */


        .sectionHeading{

            margin-bottom:40px;

            padding:0;

        }


        .sectionHeading .eyebrow{

            font-size:11px;

        }


        .sectionHeading h2{

            font-size:28px;

            line-height:1.2;

            margin:14px 0;

        }


        .sectionHeading p:last-child{

            font-size:15px;

            line-height:1.7;

        }



        /* ==========================
            FEATURED PROJECTS
        ========================== */


        .featuredGallerySection{

            padding:0 20px 80px;

        }


        .featuredGalleryGrid{

            grid-template-columns:1fr;

            gap:22px;

        }


        .featuredGalleryCard{

            padding:12px;

            border-radius:24px;

        }


        .featuredGalleryImage{

            border-radius:18px;

        }


        .featuredGalleryImage img{

            height:280px;

        }



        /* ==========================
            RECENT GALLERY
        ========================== */


        .recentGallerySection{

            padding:0 20px 90px;

        }


        .galleryGrid{

            grid-template-columns:1fr;

            gap:22px;

        }


        .galleryCard{

            padding:12px;

            border-radius:24px;

        }


        .galleryImageWrapper{

            border-radius:18px;

        }


        .galleryImageWrapper img{

            height:280px;

        }



        .galleryCardTitle{

            padding:14px 16px;

            font-size:14px;

        }



        /* ==========================
            CTA
        ========================== */


        .aboutCta{

            width:100%;

            margin:0 0 70px;

            padding:55px 20px;

            border-radius:0;

        }


        .aboutCta h2{

            font-size:30px;

            line-height:1.2;

        }


        .aboutCta p{

            font-size:15px;

            line-height:1.75;

        }


        .aboutCta a{

            width:100%;

            padding:16px 20px;

            font-size:15px;

        }

        }



        /* =====================================================
        SMALL PHONES
        600px AND BELOW
        ===================================================== */


        @media(max-width:600px){


        /* HERO */

        .galleryHero{

            padding:95px 20px 60px;

        }


        .galleryHeroContent{

            gap:35px;

        }


        .galleryHeroText h1{

            font-size:30px;

            line-height:1.1;

            letter-spacing:-1px;

        }


        .galleryHeroText > p:not(.eyebrow){

            font-size:15px;

            line-height:1.75;

            text-align:justify;

        }


        .galleryHeroFrame img{

            height:230px;

        }


        /* FEATURED */


        .featuredGallerySection{

            padding:0 20px 70px;

        }


        .sectionHeading h2{

            font-size:24px;

        }


        .featuredGalleryCard{

            padding:10px;

        }


        .featuredGalleryImage img{

            height:220px;

        }



        /* RECENT */


        .recentGallerySection{

            padding:0 20px 70px;

        }


        .galleryCard{

            padding:10px;

        }


        .galleryImageWrapper img{

            height:220px;

        }


        .galleryCardTitle{

            padding:12px 14px;

            font-size:13px;

        }



        /* CTA */


        .aboutCta{

            padding:50px 20px;

            margin-top:0;

        }


        .aboutCta h2{

            font-size:28px;

        }


        }



        /* =====================================================
        VERY SMALL PHONES
        380px AND BELOW
        ===================================================== */


        @media(max-width:380px){


        /* HERO */


        .galleryHero{

            padding:85px 16px 55px;

        }


        .galleryHeroText h1{

            font-size:26px;

        }


        .galleryHeroText > p:not(.eyebrow){

            font-size:14px;

        }


        .galleryHeroFrame{

            padding:8px;

        }


        .galleryHeroFrame img{

            height:200px;

        }



        /* SECTIONS */


        .featuredGallerySection,
        .recentGallerySection{

            padding-left:16px;

            padding-right:16px;

        }


        .sectionHeading h2{

            font-size:22px;

        }


        .sectionHeading p:last-child{

            font-size:14px;

        }



        /* CARDS */


        .featuredGalleryImage img,
        .galleryImageWrapper img{

            height:190px;

        }


        .galleryCardTitle{

            font-size:12px;

            padding:10px 12px;

        }



        /* CTA */


        .aboutCta{

            padding:45px 16px;

        }


        .aboutCta h2{

            font-size:24px;

        }


        .aboutCta p{

            font-size:14px;

        }


        }

      `}</style>

    </>
  );
}