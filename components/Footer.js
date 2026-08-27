"use client";

import Link from "next/link";

const logoUrl =
  "https://res.cloudinary.com/wt1k8kgj/image/upload/v1784651760/183BF762-869E-4233-9228-EE9D3F7210E7_f6wfus.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="topLine"></div>

      <div className="footerContainer">
        {/* =========================
            MAIN FOOTER
        ========================= */}

        <div className="footerMain">
          {/* =========================
              BRAND
          ========================= */}

          <div className="brand">
            <Link
              href="/"
              aria-label="Percy Sparkle Cleaning Services home"
              className="logoLink"
            >
              <img
                src={logoUrl}
                alt="Percy Sparkle Cleaning Services"
                className="logo"
              />
            </Link>

            <p className="brandDescription">
              Professional residential and commercial cleaning,
              delivered with care, consistency, and attention to every detail.
            </p>

            <div className="availability">
              <span></span>

              <strong>
                Monday - Saturday: 9am – 6pm
                <br />
                Sunday: 10am – 4pm
              </strong>
            </div>
          </div>

          {/* =========================
              OUR STORY
          ========================= */}

          <div className="story">
            <h2>Our Story</h2>

            <p>
              We’re a local cleaning business based in Newcastle and South
              Tyneside, focused on providing reliable, friendly and
              detail-focused cleaning for homes and businesses across the local
              area.
            </p>
          </div>

          {/* =========================
              EXPLORE
          ========================= */}

          <div className="explore">
            <h2>Explore</h2>

            <div className="exploreLinks">
              <Link href="/">Home</Link>

              <Link href="/aboutpage">About Us</Link>

              <Link href="/servicepage">Our Services</Link>

              <Link href="/gallerypage">Gallery</Link>

              <Link href="/contactpage">Contact Us</Link>
            </div>
          </div>

          {/* =========================
              CONNECT
          ========================= */}

          <div className="connect">
            <h2>Connect</h2>

            {/* Contact Icons */}

            <div className="iconRow">
              {/* Phone */}

              <a
                href="tel:07467139733"
                aria-label="Call Percy Sparkle Cleaning Services"
                className="iconLink"
              >
                <img
                  src="/footer-logos/phone.png"
                  alt="Phone"
                />
              </a>

              {/* Gmail */}

              <a
                href="mailto:Percysparklecleaningservices@gmail.com"
                aria-label="Email Percy Sparkle Cleaning Services"
                className="iconLink"
              >
                <img
                  src="/footer-logos/gmail.png"
                  alt="Email"
                />
              </a>

              {/* Location */}

              <a
                href="https://maps.google.com/?q=11+Derby+Street,+Jarrow,+Northumbria,+England+NE32+3AT"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find Percy Sparkle Cleaning Services"
                className="iconLink"
              >
                <img
                  src="/footer-logos/location.png"
                  alt="Location"
                />
              </a>
            </div>

            {/* Social Icons */}

            <div className="iconRow socialRow">
              {/* Facebook */}

              <a
                href="https://www.facebook.com/share/19P64Ee52N/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Percy Sparkle on Facebook"
                className="iconLink"
              >
                <img
                  src="/footer-logos/facebook.png"
                  alt="Facebook"
                />
              </a>

              {/* Instagram */}

              <a
                href="https://www.instagram.com/percysparkl_?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Percy Sparkle on Instagram"
                className="iconLink"
              >
                <img
                  src="/footer-logos/instagram.png"
                  alt="Instagram"
                />
              </a>

              {/* X */}

              <a
                href="https://x.com/PercySparkles"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Percy Sparkle on X"
                className="iconLink"
              >
                <img
                  src="/footer-logos/x.png"
                  alt="X"
                />
              </a>
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM
        ========================= */}

        <div className="bottom">
          <div className="copyright">
            <p>
              © {year} Percy Sparkle Cleaning Services. All rights reserved.
            </p>
          </div>

          <div className="companyInfo">
            <p>
              Registered in the UK · Company No. 17387681
            </p>

            <p className="insuranceInfo">
              Public & Product Liability cover
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`

        /* =====================================================
           FOOTER
        ===================================================== */

        .footer {
          width: 100%;
          background: #071B3D;
          color: white;
          margin-top: 96px;
          overflow: hidden;
        }


        .topLine {
          width: 100%;
          height: 4px;
          background: #F5C542;
        }


        .footerContainer {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 70px 6% 28px;
        }


        /* =====================================================
           MAIN FOOTER
        ===================================================== */

        .footerMain {
          display: grid;

          grid-template-columns:
            1.4fr
            1fr
            0.8fr
            0.9fr;

          gap: 45px;

          align-items: start;
        }


        /* =====================================================
           BRAND
        ===================================================== */

        .logoLink {
          display: inline-block;
          text-decoration: none;
        }


        .logo {
          width: auto;
          height: 65px;
          display: block;
          object-fit: contain;

          background: white;
          border-radius: 10px;

          padding: 5px 10px;
        }


        .brandDescription {
          max-width: 430px;
          margin: 28px 0 0;

          color: #cbd5e1;

          font-size: 15px;
          line-height: 1.8;
        }


        .availability {
          display: inline-flex;
          align-items: flex-start;

          gap: 12px;

          margin-top: 28px;
          padding: 12px 18px;

          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 999px;

          background: rgba(255,255,255,0.05);

          font-size: 13px;
        }


        .availability span {
          width: 4px;
          height: 30px;

          flex-shrink: 0;

          border-radius: 999px;

          background: #F5C542;
        }


        /* =====================================================
           HEADINGS
        ===================================================== */

        .story h2,
        .explore h2,
        .connect h2 {
          margin: 0 0 25px;

          color: #F5C542;

          font-size: 14px;
          font-weight: 800;

          letter-spacing: 2px;
          text-transform: uppercase;
        }


        /* =====================================================
           OUR STORY
        ===================================================== */

        .story p {
          margin: 0;

          color: #cbd5e1;

          font-size: 14px;
          line-height: 1.8;
        }


        /* =====================================================
           EXPLORE
        ===================================================== */

        .exploreLinks {
          display: flex;
          flex-direction: column;

          gap: 16px;
        }


        .exploreLinks a {
          width: fit-content;

          color: #e2e8f0;

          text-decoration: none;

          font-size: 15px;
          font-weight: 500;

          transition:
            color .3s ease,
            transform .3s ease;
        }


        .exploreLinks a:hover {
          color: #F5C542;
          transform: translateX(4px);
        }


        /* =====================================================
           CONNECT
        ===================================================== */

        .iconRow {
          display: flex;
          align-items: center;

          gap: 18px;
        }


        .socialRow {
          margin-top: 20px;
        }


        .iconLink {
          width: 50px;
          height: 50px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 10px;

          background: rgba(255,255,255,0.045);

          transition:
            background .3s ease,
            transform .3s ease;
        }


        .iconLink:hover {
          background: rgba(245,197,66,0.12);
          transform: translateY(-3px);
        }


        .iconLink img {
          width: 22px;
          height: 22px;

          display: block;

          object-fit: contain;
        }


        /* =====================================================
           BOTTOM
        ===================================================== */

        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          margin-top: 58px;
          padding-top: 25px;

          border-top: 1px solid rgba(255,255,255,0.10);

          color: #64748b;
        }


        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 30px;

          margin-top: 58px;
          padding-top: 25px;

          border-top: 1px solid rgba(255,255,255,0.10);

          color: #64748b;
        }


        .copyright {
          flex: 1;
        }


        .bottom p {
          margin: 0;
          font-size: 14px;
        }


        .companyInfo {
          text-align: right;
        }


        .companyNumber {
          font-size: 13px !important;
          color: #64748b;
        }


        .insuranceInfo {
          margin-top: 6px !important;

          font-size: 13px !important;

          color: #64748b;
        }

        
        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1024px) {

          .footerContainer {
            padding: 60px 5% 28px;
          }


          .footerMain {
            grid-template-columns:
              1.2fr
              1fr
              0.8fr
              0.8fr;

            gap: 30px;
          }


          .brandDescription {
            font-size: 14px;
          }


          .story p {
            font-size: 13px;
          }


          .iconRow {
            gap: 12px;
          }


          .iconLink {
            width: 46px;
            height: 46px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .footer {
            margin-top: 70px;
          }


          .footerContainer {
            padding: 50px 22px 25px;
          }


          .footerMain {
            display: grid;

            grid-template-columns: 1fr 1fr;

            gap: 45px 30px;
          }


          .brand,
          .story {
            grid-column: 1 / -1;
          }


          .brandDescription {
            max-width: 500px;
            font-size: 14px;
          }


          .story p {
            max-width: 500px;
            font-size: 14px;
          }


          .availability {
            font-size: 12px;
            padding: 10px 14px;
          }


          .iconRow {
            gap: 12px;
          }


          .iconLink {
            width: 50px;
            height: 50px;
          }


          .iconLink img {
            width: 21px !important;
            height: 21px !important;
          }


          .bottom {
            flex-direction: column;

            text-align: center;

            margin-top: 40px;

            gap: 10px;
          }


          .bottom p {
            font-size: 11px;
            font-weight: 700 !important;

            color: #adadad;
          }


          .companyNumber {
            margin-top: 6px !important;

            font-size: 10px !important;

            font-weight: 500 !important;
          }

          .insuranceInfo {
            margin-top: 6px !important;

            font-size: 10px !important;

            font-weight: 500 !important;
            text-align: center;
          }          
        }


        /* =====================================================
           SMALL PHONES
        ===================================================== */

        @media (max-width: 380px) {

          .footerContainer {
            padding-left: 18px;
            padding-right: 18px;
          }


          .logo {
            height: 58px;
          }


          .availability {
            width: 100%;
            justify-content: center;
          }


          .story h2,
          .explore h2,
          .connect h2 {
            font-size: 12px;
          }


          .exploreLinks a {
            font-size: 14px;
          }


          .story p {
            font-size: 13px;
          }


          .iconRow {
            gap: 9px;
          }


          .iconLink {
            width: 36px;
            height: 36px;
          }


          .iconLink img {
            width: 19px;
            height: 19px;
          }

        }

      `}</style>
    </footer>
  );
}