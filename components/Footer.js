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

        <div className="footerGrid">


          {/* Brand Section */}
          <div className="brand">

            <Link href="/" aria-label="Percy Sparkle Cleaning Services home">
              <img
                src={logoUrl}
                alt="Percy Sparkle Cleaning Services"
                className="logo"
              />
            </Link>


            <p>
              Professional residential and commercial cleaning,
              delivered with care, consistency, and attention to every detail.
            </p>


            <div className="availability">
              <span></span>
              <strong>
                Available 24 hours, Monday–Sunday
              </strong>
            </div>

          </div>



         {/* Explore */}
          <div className="column">

            <h2>Explore</h2>

            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/aboutpage">About Us</Link>
              </li>

              <li>
                <Link href="/servicepage">Our Services</Link>
              </li>

              <li>
                <Link href="/gallerypage">Gallery</Link>
              </li>

              <li>
                <Link href="/contactpage">Contact Us</Link>
              </li>
            </ul>

          </div>




          {/* Contact */}
          <div className="column">

            <h2>
              Contact
            </h2>


            <div className="contactDetails">

              <a href="tel:07467139733">
                <small>Phone</small>
                <strong>07467 139733</strong>
              </a>

              <a href="mailto:Percysparklecleaningservices@gmail.com">
                <small>Email</small>
                <strong>Percysparklecleaningservices@gmail.com</strong>
              </a>

              <a
                href="https://maps.google.com/?q=11+Derby+Street,+Jarrow,+Northumbria,+England+NE32+3AT"
                target="_blank"
                rel="noopener noreferrer"
                className="address"
              >
                <small>Address</small>
                <strong className="addressText">
                  11 Derby Street, Jarrow, Northumbria,
                  <br />
                  England NE32 3AT
                </strong>
              </a>

              <a
                href="https://x.com/PercySparkles"
                target="_blank"
                rel="noopener noreferrer"
                className="social"
              >
                Follow @PercySparkles ↗
              </a>

            </div>

          </div>


        </div>



        <div className="bottom">

          <p>
            © {year} Percy Sparkle Cleaning Services. All rights reserved.
          </p>


         <p>
          Built by{" "}
          <strong>
            <a
              href="https://www.neohavilah.com/temitopesamuel"
              target="_blank"
              rel="noopener noreferrer"
              className="developerLink"
            >
              Temitope Samuel
            </a>
          </strong>
        </p>

        </div>


      </div>



      <style jsx>{`

        .footer {
          background: #071B3D;
          color: white;
          margin-top: 96px;
          overflow: hidden;
        }


        .topLine {
          height: 4px;
          background: #F5C542;
          width: 100%;
        }


        .footerContainer {
          width: 100%;
          max-width: 1200px;
          margin: auto;
          padding: 70px 6% 30px;
        }


        .footerGrid {
          display: grid;
          grid-template-columns: 1.35fr 0.8fr 0.95fr;
          gap: 60px;
        }



        /* Brand */

        .logo {
          height: 65px;
          width: auto;
          object-fit: contain;
          background: white;
          border-radius: 10px;
          padding: 5px 10px;
        }


        .brand p {
          margin-top: 28px;
          max-width: 420px;
          color: #cbd5e1;
          font-size: 15px;
          line-height: 1.8;
        }


        .availability {
          margin-top: 28px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 12px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.06);
          font-size: 14px;
        }


        .availability span {
          height: 10px;
          width: 10px;
          border-radius: 50%;
          background: #F5C542;
        }



        /* Columns */

        .column h2 {
          color: #F5C542;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }


        ul {
          list-style: none;
          padding: 0;
          margin-top: 25px;
        }


        li {
          margin-bottom: 16px;
        }


        li a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: .3s;
        }


        li a:hover {
          color: white;
        }




        /* Contact */

        .contactDetails {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }


        .contactDetails a {
          text-decoration: none;
          color: white;
        }


        small {
          display: block;
          color: #64748b;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 5px;
          letter-spacing: 1px;
        }


        .contactDetails strong {
          font-size: 14px;
        }


        .contactDetails a:hover{
          color: #F5C542;
        }

        .contactDetails a:hover strong{
          color: #F5C542;
        }



        /* Bottom */

        .bottom {
          margin-top: 50px;
          padding-top: 25px;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          color: #94a3b8;
          font-size: 12px;
        }


        .bottom strong {
          color: white;
        }

        .developerLink{
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: color .3s ease;
        }

        .developerLink:hover{
          color: #F5C542;
        }

        .address strong{
          display: block;
          white-space: nowrap;
          overflow-x: auto;
          overflow-y: hidden;
          scrollbar-width: none;
        }

        .address strong::-webkit-scrollbar{
          display: none;
        }

        .addressText{
          display:block;
        }

        @media (min-width: 601px){
          .addressText br{
            display:none;
          }
        }


        /* Tablet */

        @media (max-width: 1024px) {

          .footerGrid {
            grid-template-columns: 1fr 1fr;
            gap: 45px;
          }


          .brand {
            grid-column: span 2;
          }


          .footerContainer {
            padding: 60px 5% 30px;
          }

        }





        /* Mobile */

        @media (max-width: 600px) {


          .footer {
            margin-top: 70px;
          }


          .footerContainer {
            padding: 50px 20px 25px;
          }


          .footerGrid {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }


          .brand p {
            font-size: 14px;
          }


          .availability {
            font-size: 12px;
            padding: 10px 14px;
          }


          .bottom {
            flex-direction: column;
            text-align: center;
            margin-top: 35px;
          }


        }





        /* Small phones */

        @media (max-width: 380px) {


          .logo {
            height: 55px;
          }


          .availability {
            width: 100%;
            justify-content: center;
          }


          .contactDetails strong {
            font-size: 13px;
          }


        }


      `}</style>

    </footer>
  );
}