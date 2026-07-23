"use client";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
        
      <main className="home">

        <section className="hero">
          <div className="heroContent">

            <p className="tagline">
              Trusted cleaning across the UK
            </p>

            <h1 className="heroTitle">
              Percy Sparkle Cleaning Services
            </h1>

            <p className="description">
              Professional residential and commercial cleaning services,
              delivered with care, consistency, and attention to detail.
            </p>

            <a
              href="https://www.neohavilah.com/"
              target="_blank"
              rel="noreferrer"
              className="quoteButton"
            >
              Request a Free Quote
            </a>

          </div>
        </section>


        <section className="servicesPreview">

          <div className="sectionContent">

            <h2>
              Cleaning Solutions You Can Trust
            </h2>

            <p>
              From homes to commercial spaces, Percy Sparkle provides
              reliable cleaning solutions designed around your needs.
            </p>

          </div>

        </section>


      </main>

   
      <style jsx>{`

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
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 140px 8%;
          background:
            radial-gradient(circle at 88% 20%, rgba(10, 102, 240, 0.14), transparent 32%),
            radial-gradient(circle at 12% 88%, rgba(245, 197, 66, 0.1), transparent 28%),
            #ffffff;
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


        .description {
          max-width: 650px;
          margin-top: 30px;
          font-size: 20px;
          line-height: 1.8;
          color: #475569;
        }


        .quoteButton {
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


        .quoteButton:hover {
          background: #1d4ed8;
          transform: translateY(-3px);
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




        /* =========================
           TABLET
           601px - 1024px
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


        }




        /* =========================
           MOBILE
           600px and below
        ========================= */

        @media (max-width: 600px) {


          .home {
            background:
              radial-gradient(circle at 96% 7%, rgba(10, 102, 240, 0.14), transparent 34%),
              radial-gradient(circle at 5% 72%, rgba(245, 197, 66, 0.11), transparent 30%),
              #ffffff;
          }


          .hero {
            min-height: auto;
            padding: 100px 20px 80px;
            background:
              radial-gradient(circle at 92% 13%, rgba(10, 102, 240, 0.18), transparent 36%),
              radial-gradient(circle at 8% 88%, rgba(245, 197, 66, 0.12), transparent 32%),
              #ffffff;
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


          .quoteButton {
            width: 100%;
            justify-content: center;
            padding: 15px 20px;
          }


          .servicesPreview {
            padding: 70px 20px;
            background:
              radial-gradient(circle at 50% 0%, rgba(10, 102, 240, 0.15), transparent 46%),
              #f8fafc;
          }


          .sectionContent h2 {
            font-size: 30px;
          }


          .sectionContent p {
            font-size: 16px;
          }


        }




        /* =========================
           SMALL PHONES
           380px and below
        ========================= */

        @media (max-width: 380px) {


          .hero {
            padding-left: 16px;
            padding-right: 16px;
          }


          .heroTitle {
            font-size: 2rem;
          }


          .tagline {
            font-size: 10px;
          }


        }


      `}</style>
    </>
  );
}
