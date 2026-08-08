"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
  Sparkles,
  Home,
  Building2,
  ShieldCheck,
  CalendarDays,
  Clock3,
  MapPin,
  Send,
  CircleHelp,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {

  const reduceMotion = useReducedMotion();

   useEffect(() => {

  const hash = window.location.hash;

  if (hash === "#quote-form") {

    const section = document.getElementById("quote-form");

    if (section) {

      setTimeout(() => {

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }, 300);

    }

  } else {

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

  }

}, []);

  const [loading,setLoading]=useState(false);

  const [success,setSuccess]=useState("");

  const [error,setError]=useState("");

  const [formData,setFormData]=useState({

    firstName:"",

    lastName:"",

    email:"",

    phone:"",

    address:"",

    service:"",

    date:"",

    message:"",

  });

  function handleChange(e){

    const {name,value}=e.target;

    setFormData((prev)=>({

      ...prev,

      [name]:value,

    }));

  }

  async function handleSubmit(e){

    e.preventDefault();

    setLoading(true);

    setSuccess("");

    setError("");

    try{

      const response=await fetch("/api/contact",{

        method:"POST",

        headers:{
          "Content-Type":"application/json",
        },

        body:JSON.stringify(formData),

      });

      const result=await response.json();

      if(!response.ok){

        throw new Error(
          result.error || "Unable to submit request."
        );

      }

      setSuccess(
        "Thank you. Your cleaning request has been received. Our team will contact you shortly."
      );

      setFormData({

        firstName:"",

        lastName:"",

        email:"",

        phone:"",

        address:"",

        service:"",

        date:"",

        message:"",

      });

    }

    catch(err){

      setError(err.message);

    }

    finally{

      setLoading(false);

    }

  }

  return(

    <>

      {/*==================================
              OPENING LOGO
      ==================================*/}

      <div
        className="homeSiteOpening"
        aria-hidden="true"
      >

        <div className="homeOpeningLogoAnchor">

          <span className="homeOpeningLogo"/>

        </div>

        <div className="homeOpeningCopy">

          <p>

            Percy Sparkle

          </p>

          <span>

            Cleaning Services

          </span>

        </div>

      </div>



      <main className="quotePage">




        {/*==================================
                  HERO
        ==================================*/}

        <section className="quoteHero">

          <div className="quoteHeroContent">

            <motion.div

              className="quoteHeroCopy"

              initial={
                reduceMotion
                ? false
                :{
                    opacity:0,
                    x:-70,
                  }
              }

              whileInView={{
                opacity:1,
                x:0,
              }}

              viewport={{
                once:true,
              }}

              transition={{
                duration:1.2,
              }}

            >

              <p className="eyebrow">

                REQUEST A FREE QUOTE

              </p>

              <h1>

                Professional cleaning
                tailored to your
                home or business.

              </h1>

              <p className="heroDescription">

                Whether you need a one-time deep clean,
                regular maintenance, or commercial
                cleaning services, Percy Sparkle delivers
                reliable, high-quality cleaning with
                exceptional attention to detail.

              </p>



              <div className="heroHighlights">

                <span>

                  <CheckCircle2 size={18}/>

                  Residential Cleaning

                </span>

                <span>

                  <CheckCircle2 size={18}/>

                  Commercial Cleaning

                </span>

                <span>

                  <CheckCircle2 size={18}/>

                  Free Quotations

                </span>

              </div>

            </motion.div>





            <motion.div

              className="quoteHeroImage"

              initial={
                reduceMotion
                ? false
                :{
                    opacity:0,
                    x:70,
                    scale:.92,
                  }
              }

              whileInView={{
                opacity:1,
                x:0,
                scale:1,
              }}

              viewport={{
                once:true,
              }}

              transition={{
                duration:1.2,
              }}

            >

              <div className="quoteHeroImageFrame">

                <img

                  src="https://res.cloudinary.com/wt1k8kgj/image/upload/f_auto,q_auto:good,w_1200/v1785840327/Consultant_answering_customer_call_202608041140_uwvtob.jpg"

                  alt="Percy Sparkle Cleaning Services"

                />

              </div>

            </motion.div>

          </div>

        </section>
               
        {/*==================================
              REQUEST FORM
        ==================================*/}

        <section id="quote-form" className="quoteFormSection">

          <motion.div

            className="quoteFormCard"

            initial={
              reduceMotion
                ? false
                :{
                    opacity:0,
                    y:70,
                  }
            }

            whileInView={{
              opacity:1,
              y:0,
            }}

            viewport={{
              once:true,
              amount:.3,
            }}

            transition={{
              duration:1.2,
            }}

          >

            <div className="quoteFormHeader">

              <p className="eyebrow">

                REQUEST A FREE QUOTE

              </p>

              <h2>

                Tell us about your cleaning requirements.

              </h2>

              <p>

                Complete the form below and our team will review your
                request before contacting you with a personalised quote.

              </p>

            </div>

            <form

              className="quoteForm"

              onSubmit={handleSubmit}

            >

              <div className="formGrid"> 
                              <div className="formGroup">

                  <label>

                    First Name

                  </label>

                  <input

                    type="text"

                    name="firstName"

                    value={formData.firstName}

                    onChange={handleChange}

                    required

                    placeholder="John"

                  />

                </div>

                <div className="formGroup">

                  <label>

                    Last Name

                  </label>

                  <input

                    type="text"

                    name="lastName"

                    value={formData.lastName}

                    onChange={handleChange}

                    required

                    placeholder="Smith"

                  />

                </div>

                <div className="formGroup">

                  <label>

                    Email Address

                  </label>

                  <input

                    type="email"

                    name="email"

                    value={formData.email}

                    onChange={handleChange}

                    required

                    placeholder="john@email.com"

                  />

                </div>

                <div className="formGroup">

                  <label>

                    Phone Number

                  </label>

                  <input

                    type="tel"

                    name="phone"

                    value={formData.phone}

                    onChange={handleChange}

                    required

                    placeholder="+44..."

                  />

                </div>

                <div className="formGroup fullWidth">

                  <label>

                    Property Address

                  </label>

                  <input

                    type="text"

                    name="address"

                    value={formData.address}

                    onChange={handleChange}

                    required

                    placeholder="Property address"

                  />

                </div>

                <div className="formGroup">

                  <label>

                    Service Required

                  </label>

                  <select

                    name="service"

                    value={formData.service}

                    onChange={handleChange}

                    required

                  >

                    <option value="">

                      Select Service

                    </option>

                    <option value="Residential Cleaning">

                      Residential Cleaning

                    </option>

                    <option value="Commercial Cleaning">

                      Commercial Cleaning

                    </option>

                  </select>

                </div>

                <div className="formGroup">

                  <label>

                    Preferred Cleaning Date

                  </label>

                  <input

                    type="date"

                    name="date"

                    value={formData.date}

                    onChange={handleChange}

                    required

                  />

                </div>
                  
              
                  <div className="formGroup fullWidth">

                  <label>

                    Tell Us About Your Cleaning Requirements

                  </label>

                  <textarea

                    name="message"

                    value={formData.message}

                    onChange={handleChange}

                    required

                    rows={7}

                    placeholder="Tell us about your property, the type of cleaning you require, the number of rooms, any special requests, or any other information that will help us prepare your quotation."

                  />

                </div>

                <div className="formGroup fullWidth">

                  <button

                    type="submit"

                    className="submitButton"

                    disabled={loading}

                  >

                    <Send size={18} />

                    {

                      loading

                        ? "Submitting..."

                        : "Request Free Quote"

                    }

                  </button>

                </div>

                {

                  success && (

                    <p className="successMessage">

                      {success}

                    </p>

                  )

                }

                {

                  error && (

                    <p className="errorMessage">

                      {error}

                    </p>

                  )

                }

              </div>

            </form>

          </motion.div>

        </section>
                {/*==================================
                OUR PROMISE
        ==================================*/}

        <section className="promiseSection">

          <div className="promiseHeader">

            <p className="eyebrow">

              OUR PROMISE

            </p>

            <h2>

              From your enquiry to the final sparkle.

            </h2>

            <p>

              We make the process simple, transparent and professional
              from the moment you contact us.

            </p>

          </div>

          <div className="promiseGrid">

            <motion.article
              className="promiseCard"
              initial={
                reduceMotion
                  ? false
                  :{
                      opacity:0,
                      y:50,
                    }
              }
              whileInView={{
                opacity:1,
                y:0,
              }}
              viewport={{
                once:true,
                amount:.3,
              }}
              transition={{
                duration:1.1,
              }}
            >

              <div className="promiseIcon">

                <Send size={30}/>

              </div>

              <h3>

                Submit Your Request

              </h3>

              <p>

                Complete our quotation form with your cleaning
                requirements.

              </p>

            </motion.article>

            <motion.article
              className="promiseCard"
              initial={
                reduceMotion
                  ? false
                  :{
                      opacity:0,
                      y:50,
                    }
              }
              whileInView={{
                opacity:1,
                y:0,
              }}
              viewport={{
                once:true,
                amount:.3,
              }}
              transition={{
                duration:1.1,
                delay:.15,
              }}
            >

              <div className="promiseIcon">

                <CalendarDays size={30}/>

              </div>

              <h3>

                Receive Your Quote

              </h3>

              <p>

                Our team will review your request and contact you with a
                personalised quotation.

              </p>

            </motion.article>

            <motion.article
              className="promiseCard"
              initial={
                reduceMotion
                  ? false
                  :{
                      opacity:0,
                      y:50,
                    }
              }
              whileInView={{
                opacity:1,
                y:0,
              }}
              viewport={{
                once:true,
                amount:.3,
              }}
              transition={{
                duration:1.1,
                delay:.3,
              }}
            >

              <div className="promiseIcon">

                <Sparkles size={30}/>

              </div>

              <h3>

                Enjoy A Sparkling Space

              </h3>

              <p>

                Sit back while Percy Sparkle delivers a professional,
                reliable and spotless cleaning service.

              </p>

            </motion.article>

          </div>

        </section>

        {/*==================================
                  FAQ
        ==================================*/}

        <section className="faqSection">

          <div className="faqHeader">

            <p className="eyebrow">

              FREQUENTLY ASKED QUESTIONS

            </p>

            <h2>

              Everything you may want to know.

            </h2>

          </div>

          <div className="faqGrid">

            <div className="faqCard">

              <CircleHelp size={24}/>

              <h3>

                Do you provide cleaning supplies?

              </h3>

              <p>

                Yes. Our team arrives with professional cleaning products
                and equipment unless you request otherwise.

              </p>

            </div>

            <div className="faqCard">

              <CircleHelp size={24}/>

              <h3>

                Can I book recurring cleaning?

              </h3>

              <p>

                Absolutely. Weekly, fortnightly and monthly cleaning
                schedules are available.

              </p>

            </div>

            <div className="faqCard">

              <CircleHelp size={24}/>

              <h3>

                How quickly will I receive a response?

              </h3>

              <p>

                We aim to respond to every enquiry as quickly as possible
                during business hours.

              </p>

            </div>

            <div className="faqCard">

              <CircleHelp size={24}/>

              <h3>

                Which areas do you cover?

              </h3>

              <p>

                Contact us with your address and we'll confirm service
                availability in your location.

              </p>

            </div>

          </div>

        </section>

        {/*==================================
                    CTA
        ==================================*/}

        <section className="quoteCta">

          <p className="eyebrow">

            READY TO GET STARTED?

          </p>

          <h2>

            Let Percy Sparkle transform your space.

          </h2>

          <p>

            Complete your quotation request today and we'll get back to
            you with a professional cleaning solution tailored to your
            needs.

          </p>

          <a href="#quote-form">

            Request Free Quote

          </a>

        </section>

      </main>

      <style jsx global>{`

        /* =====================================================
   QUOTE PAGE
===================================================== */

.quotePage{
  width:100%;
  overflow:hidden;

  background:
    radial-gradient(circle at 92% 8%,rgba(10,102,240,.10),transparent 30%),
    radial-gradient(circle at 8% 75%,rgba(245,197,66,.08),transparent 25%),
    #fff;
}



/* =====================================================
   HERO
===================================================== */

.quoteHero{
  position:relative;

  display:flex;
  align-items:center;

  min-height:92vh;

  padding:140px 8%;

  overflow:hidden;
}

.quoteHero::before{

  content:"";

  position:absolute;

  inset:0;

  pointer-events:none;

  background:
    radial-gradient(circle at 50% -25%,rgba(10,102,240,.18),transparent 45%),
    radial-gradient(circle at 5% 10%,rgba(255,255,255,.9),transparent 30%);
}

.quoteHeroContent{

  position:relative;

  z-index:2;

  width:100%;
  max-width:1280px;

  margin:0 auto;

  display:grid;
  grid-template-columns:1.05fr .95fr;

  gap:90px;

  align-items:center;
}



/* =====================================================
   HERO COPY
===================================================== */

.quoteHeroCopy{

  display:flex;

  flex-direction:column;
}

.eyebrow{

  display:inline-flex;

  align-items:center;

  margin-bottom:22px;

  color:var(--primary);

  font-size:12px;

  font-weight:800;

  letter-spacing:.18em;

  text-transform:uppercase;
}

.quoteHeroCopy h1{

  margin:0;

  font-family:var(--font-heading),sans-serif;

  font-size:58px;

  line-height:1.05;

  letter-spacing:-2px;

  color:var(--ink);
}

.heroDescription{

  margin-top:32px;

  max-width:650px;

  font-size:20px;

  line-height:1.9;

  color:var(--text-secondary);
}



/* =====================================================
   HERO HIGHLIGHTS
===================================================== */

.heroHighlights{

  display:grid;

  gap:18px;

  margin-top:42px;
}

.heroHighlights span{

  display:flex;

  align-items:center;

  gap:14px;

  font-weight:600;

  color:var(--ink);
}

.heroHighlights svg{

  color:var(--primary);
}



/* =====================================================
   HERO IMAGE
===================================================== */

.quoteHeroImageFrame{

  position:relative;

  padding:18px;

  border-radius:34px;

  background:
    radial-gradient(circle at 100% 0%,rgba(10,102,240,.18),transparent 42%),
    linear-gradient(145deg,#fff,#dcebff);

  border:1px solid rgba(10,102,240,.15);

  box-shadow:
    0 28px 70px rgba(10,102,240,.16);
}

.quoteHeroImageFrame img{

  display:block;

  width:100%;

  height:560px;

  object-fit:cover;

  border-radius:24px;
}


/* =====================================================
   REQUEST FORM
===================================================== */

.quoteFormSection{
  padding:140px 8%;
  margin-Top: -70px;
}

.quoteFormCard{

  width:100%;
  max-width:1180px;

  margin:0 auto;

  padding:70px;

  border-radius:36px;

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

  border:1px solid rgba(10,102,240,.10);

  box-shadow:
    0 30px 80px rgba(15,23,42,.08);
}



/* =====================================================
   FORM HEADER
===================================================== */

.quoteFormHeader{

  max-width:760px;

  margin:0 auto 55px;

  text-align:center;
}

.quoteFormHeader h2{

  margin:0 0 18px;

  font-family:var(--font-heading),sans-serif;

  font-size:49px;

  line-height:1.15;

  color:var(--ink);
}

.quoteFormHeader p{

  font-size:18px;

  line-height:1.8;

  color:var(--text-secondary);
}



/* =====================================================
   FORM GRID
===================================================== */

.quoteForm{

  width:100%;
}

.formGrid{

  display:grid;

  grid-template-columns:repeat(2,1fr);

  gap:26px;
}

.fullWidth{

  grid-column:1 / -1;
}



/* =====================================================
   FORM GROUP
===================================================== */

.formGroup{

  display:flex;

  flex-direction:column;
}

.formGroup label{

  margin-bottom:10px;

  font-size:14px;

  font-weight:700;

  color:var(--ink);
}



/* =====================================================
   INPUTS
===================================================== */

.formGroup input,
.formGroup select,
.formGroup textarea{

  width:100%;

  padding:18px 20px;

  border-radius:16px;

  border:1px solid rgba(10,102,240,.12);

  background:#fff;

  font-size:16px;

  color:var(--ink);

  transition:
    border-color .3s ease,
    box-shadow .3s ease,
    transform .3s ease;

  outline:none;
}

.formGroup textarea{

  resize:vertical;

  min-height:180px;
}

.formGroup input::placeholder,
.formGroup textarea::placeholder{

  color:#8c98ab;
}



/* =====================================================
   INPUT FOCUS
===================================================== */

.formGroup input:focus,
.formGroup select:focus,
.formGroup textarea:focus{

  border-color:var(--primary);

  transform:translateY(-2px);

  box-shadow:
    0 0 0 5px rgba(10,102,240,.10);
}



/* =====================================================
   SELECT
===================================================== */

.formGroup select{

  cursor:pointer;

  appearance:none;

  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' stroke='%230a66f0' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");

  background-repeat:no-repeat;

  background-position:right 18px center;

  background-size:18px;
}



/* =====================================================
   SUBMIT BUTTON
===================================================== */

.submitButton{

  display:inline-flex;

  align-items:center;

  justify-content:center;

  gap:12px;

  width:100%;

  padding:20px;

  margin-top:10px;

  border:none;

  border-radius:16px;

  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--primary-dark)
    );

  color:#fff;

  font-size:17px;

  font-weight:700;

  cursor:pointer;

  transition:
    transform .35s ease,
    box-shadow .35s ease;
}

.submitButton:hover{

  transform:translateY(-4px);

  box-shadow:
    0 22px 50px rgba(10,102,240,.24);
}

.submitButton:disabled{

  opacity:.7;

  cursor:not-allowed;

  transform:none;
}



/* =====================================================
   SUCCESS & ERROR
===================================================== */

.successMessage{

  grid-column:1/-1;

  margin-top:12px;

  padding:18px 22px;

  border-radius:14px;

  background:#eafaf0;

  color:#0f7a37;

  font-weight:600;

  border:1px solid rgba(15,122,55,.15);
}

.errorMessage{

  grid-column:1/-1;

  margin-top:12px;

  padding:18px 22px;

  border-radius:14px;

  background:#fff2f2;

  color:#b42318;

  font-weight:600;

  border:1px solid rgba(180,35,24,.18);
}

/* =====================================================
   OUR PROMISE
===================================================== */

.promiseSection{
  padding:130px 8%;

  background:#f8fbff;
}

.promiseHeader{

  max-width:760px;

  margin:0 auto 70px;

  text-align:center;
}

.promiseHeader h2{

  margin:0 0 22px;

  font-family:var(--font-heading),sans-serif;

  font-size:49px;

  line-height:1.15;

  color:var(--ink);
}

.promiseHeader p{

  max-width:650px;

  margin:0 auto;

  font-size:18px;

  line-height:1.9;

  color:var(--text-secondary);
}

.promiseGrid{

  width:100%;

  max-width:1280px;

  margin:0 auto;

  display:grid;

  grid-template-columns:repeat(3,1fr);

  gap:30px;
}



/* =====================================================
   PROMISE CARD
===================================================== */

.promiseCard{

  padding:42px 36px;

  border-radius:28px;

  background:
    radial-gradient(circle at 100% 0%,rgba(10,102,240,.12),transparent 42%),
    linear-gradient(145deg,#ffffff,#eef6ff);

  border:1px solid rgba(10,102,240,.10);

  box-shadow:
    0 20px 55px rgba(15,23,42,.08);

  transition:
    transform .35s ease,
    box-shadow .35s ease;
}

.promiseCard:hover{

  transform:translateY(-10px);

  box-shadow:
    0 28px 65px rgba(10,102,240,.18);
}

.promiseIcon{

  display:flex;

  align-items:center;

  justify-content:center;

  width:72px;

  height:72px;

  margin-bottom:26px;

  border-radius:22px;

  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--primary-dark)
    );

  color:#fff;

  box-shadow:
    0 18px 40px rgba(10,102,240,.22);
}

.promiseCard h3{

  margin:0 0 16px;

  font-size:24px;

  color:var(--ink);
}

.promiseCard p{

  margin:0;

  font-size:17px;

  line-height:1.9;

  color:var(--text-secondary);
}



/* =====================================================
   FAQ
===================================================== */

.faqSection{

  padding:130px 8%;
}

.faqHeader{

  max-width:760px;

  margin:0 auto 70px;

  text-align:center;
}

.faqHeader h2{

  margin:0;

  font-family:var(--font-heading),sans-serif;

  font-size:49px;
  line-height:1.15;

  color:var(--ink);
}

.faqGrid{

  width:100%;

  max-width:1280px;

  margin:0 auto;

  display:grid;

  grid-template-columns:repeat(2,1fr);

  gap:28px;
}



/* =====================================================
   FAQ CARD
===================================================== */

.faqCard{

  padding:34px;

  border-radius:24px;

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

  border:1px solid rgba(10,102,240,.10);

  box-shadow:
    0 18px 45px rgba(15,23,42,.06);

  transition:
    transform .35s ease,
    box-shadow .35s ease;
}

.faqCard:hover{

  transform:translateY(-8px);

  box-shadow:
    0 24px 60px rgba(10,102,240,.14);
}

.faqCard svg{

  color:var(--primary);

  margin-bottom:18px;
}

.faqCard h3{

  margin:0 0 14px;

  font-size:22px;

  color:var(--ink);
}

.faqCard p{

  margin:0;

  font-size:16px;

  line-height:1.85;

  color:var(--text-secondary);
}



/* =====================================================
   FINAL CTA
===================================================== */

.quoteCta{

  width:min(1280px,calc(100% - 16%));

  margin:130px auto;

  padding:90px 70px;

  border-radius:36px;

  text-align:center;

  color:#fff;

  background:
    radial-gradient(circle at 100% 0%,rgba(245,197,66,.30),transparent 28%),
    linear-gradient(
      135deg,
      var(--primary),
      var(--primary-dark)
    );

  box-shadow:
    0 30px 80px rgba(10,102,240,.25);
}

.quoteCta h2{

  margin:0 auto 24px;

  max-width:760px;

  font-family:var(--font-heading),sans-serif;

  font-size:60px;
  color: #ffff;

  line-height:1.15;
}

.quoteCta p{

  max-width:700px;

  margin:0 auto;

  font-size:19px;

  line-height:1.9;

  color:rgba(255,255,255,.90);
}

.quoteCta a{

  display:inline-flex;

  align-items:center;

  justify-content:center;

  margin-top:40px;

  padding:18px 38px;

  border-radius:14px;

  background:#fff;

  color:var(--primary);

  text-decoration:none;

  font-weight:700;

  transition:
    transform .35s ease,
    box-shadow .35s ease;
}

.quoteCta a:hover{

  transform:translateY(-5px);

  box-shadow:
    0 20px 40px rgba(0,0,0,.18);
}

/* =====================================================
   TABLET
   769px - 1024px
===================================================== */

@media (max-width:1024px){

  /* ==========================
     HERO
  ========================== */

  .quoteHero{
    min-height:auto;
    padding:120px 6% 100px;
  }

  .quoteHeroContent{
    grid-template-columns:1fr 1fr;
    gap:60px;
  }

  .quoteHeroCopy h1{
    font-size:clamp(3rem,5vw,4.3rem);
  }

  .heroDescription{
    max-width:100%;
    font-size:18px;
    line-height:1.8;
  }

  .heroHighlights{
    gap:16px;
    margin-top:34px;
  }

  .quoteHeroImageFrame{
    padding:14px;
    border-radius:28px;
  }

  .quoteHeroImageFrame img{
    height:500px;
    border-radius:20px;
  }



  /* ==========================
     QUOTE FORM
  ========================== */

  .quoteFormSection{
    padding:100px 6%;
  }

  .quoteFormCard{
    padding:55px 45px;
    border-radius:30px;
  }

  .quoteFormHeader{
    margin-bottom:45px;
  }

  .quoteFormHeader h2{
    font-size:clamp(2.3rem,4vw,3rem);
  }

  .quoteFormHeader p{
    font-size:17px;
  }

  .formGrid{
    gap:22px;
  }

  .formGroup input,
  .formGroup select,
  .formGroup textarea{
    padding:16px 18px;
    font-size:15px;
  }

  .submitButton{
    padding:18px;
    font-size:16px;
  }



  /* ==========================
     PROMISE
  ========================== */

  .promiseSection{
    padding:100px 6%;
  }

  .promiseHeader{
    margin-bottom:55px;
  }

  .promiseHeader h2{
    font-size:clamp(2.3rem,4vw,3rem);
  }

  .promiseGrid{
    grid-template-columns:repeat(3,1fr);
    gap:20px;
  }

  .promiseCard{
    padding:30px 24px;
  }

  .promiseIcon{
    width:64px;
    height:64px;
    margin-bottom:22px;
  }

  .promiseCard h3{
    font-size:21px;
  }

  .promiseCard p{
    font-size:16px;
    line-height:1.8;
  }



  /* ==========================
     FAQ
  ========================== */

  .faqSection{
    padding:100px 6%;
  }

  .faqHeader{
    margin-bottom:55px;
  }

  .faqHeader h2{
    font-size:clamp(2.3rem,4vw,3rem);
  }

  .faqGrid{
    gap:22px;
  }

  .faqCard{
    padding:28px;
  }

  .faqCard h3{
    font-size:20px;
  }

  .faqCard p{
    font-size:15px;
  }



  /* ==========================
     CTA
  ========================== */

  .quoteCta{
    width:calc(100% - 12%);
    margin:100px auto;
    padding:70px 50px;
    border-radius:30px;
  }

  .quoteCta h2{
    font-size:clamp(2.5rem,4vw,3.3rem);
  }

  .quoteCta p{
    font-size:17px;
  }

  .quoteCta a{
    padding:16px 32px;
    font-size:15px;
  }

}

/* =====================================================
   MOBILE
   768px and below
===================================================== */

@media (max-width:768px){

  /* ==========================
     HERO
  ========================== */

  .quoteHero{

    padding:110px 20px 70px;

  }

  .quoteHeroContent{

    grid-template-columns:1fr;

    gap:50px;

  }

  .quoteHeroCopy{

    text-align:left;

  }

  .quoteHeroCopy h1{

    font-size:clamp(2.4rem,10vw,3.4rem);

  }

  .heroDescription{

    font-size:16px;

    max-width:100%;

    margin:24px auto 0;
    text-align:justify;

  }

  .heroHighlights{

    justify-content:left;

    gap:14px;

    margin-top:30px;

  }

  .heroHighlights span{

    font-size:14px;
    justify-content:flex-start;

  }

  .quoteHeroImage{

    order:-1;

  }

  .quoteHeroImageFrame{

    padding:12px;

    border-radius:24px;

  }

  .quoteHeroImageFrame img{

    height:400px;

    border-radius:18px;

  }



  /* ==========================
     QUOTE FORM
  ========================== */

  .quoteFormSection{

    padding:70px 20px;

  }

  .quoteFormCard{

    padding:35px 24px;

    border-radius:24px;

  }

  .quoteFormHeader{

    text-align:center;

    margin-bottom:35px;

  }

  .quoteFormHeader h2{

    font-size:2rem;

  }

  .quoteFormHeader p{

    font-size:15px;
    text-align:centre;

  }

  .formGrid{

    grid-template-columns:1fr;

    gap:18px;

  }

  .formGroup textarea::placeholder{

    text-align:justify;

  }

  .formGroup,

  .fullWidth{

    grid-column:span 1;
    text-align:justify;

  }

  .formGroup input,

  .formGroup select,

  .formGroup textarea{

    font-size:15px;

    padding:15px 16px;

  }

  .submitButton{

    width:100%;

  }

  /* ==========================
     PROMISE
  ========================== */

  .promiseSection{

    padding:70px 20px;

  }

  .promiseHeader{

    text-align:center;

    margin-bottom:40px;

  }

  .promiseHeader h2{

    font-size:2rem;

  }

  .promiseGrid{

    grid-template-columns:1fr;

    gap:24px;

  }

  .promiseCard{

    padding:28px 24px;

    text-align:center;

  }

  .promiseIcon{

    margin:0 auto 20px;

  }



  /* ==========================
     FAQ
  ========================== */

  .faqSection{

    padding:70px 20px;

  }

  .faqHeader{

    text-align:center;

    margin-bottom:40px;

  }

  .faqHeader h2{

    font-size:2rem;

  }

  .faqGrid{

    grid-template-columns:1fr;

    gap:20px;

  }

  .faqCard{

    padding:24px;

  }

  .faqCard h3{

    font-size:18px;

  }

  .faqCard p{

    font-size:15px;

    line-height:1.7;

  }



  /* ==========================
     CTA
  ========================== */

  .quoteCta{

    width:calc(100% - 40px);

    margin:70px auto;

    padding:50px 24px;

    border-radius:24px;

  }

  .quoteCta h2{

    font-size:2rem;

  }

  .quoteCta p{

    font-size:15px;

  }

  .quoteCta a{

    width:100%;

    justify-content:center;

    padding:16px 24px;

  }

}  

/* =====================================================
   SMALL MOBILE
   480px and below
===================================================== */

@media (max-width:480px){

  /* ==========================
     HERO
  ========================== */

  .quoteHero{

    padding:95px 16px 55px;

  }

  .quoteHeroContent{

    gap:35px;

  }

  .quoteHeroCopy h1{

    font-size:2rem;

    line-height:1.15;

  }

  .heroDescription{

    font-size:15px;

    line-height:1.8;

  }

  .heroHighlights{

    flex-direction:column;

    align-items:flex-start;

    gap:12px;

  }

  .heroHighlights span{

    font-size:14px;

  }

  .quoteHeroImageFrame{

    padding:10px;

    border-radius:20px;

  }

  .quoteHeroImageFrame img{

    height:300px;

    border-radius:16px;

  }



  /* ==========================
     FORM
  ========================== */

  .quoteFormSection{

    padding:55px 16px;

  }

  .quoteFormCard{

    padding:28px 18px;

    border-radius:20px;

  }

  .quoteFormHeader h2{

    font-size:1.8rem;

  }

  .formGroup label{

    font-size:14px;

  }

  .formGroup input,

  .formGroup select,

  .formGroup textarea{

    padding:14px;

    font-size:14px;

  }

  .submitButton{

    font-size:15px;

    padding:16px;

  }



  /* ==========================
     PROMISE
  ========================== */

  .promiseSection{

    padding:55px 16px;

  }

  .promiseHeader h2{

    font-size:1.8rem;

  }

  .promiseCard{

    padding:24px 18px;

  }

  .promiseCard h3{

    font-size:1.2rem;

  }

  .promiseCard p{

    font-size:14px;

  }



  /* ==========================
     FAQ
  ========================== */

  .faqSection{

    padding:55px 16px;

  }

  .faqHeader h2{

    font-size:1.8rem;

  }

  .faqCard{

    padding:20px;

  }

  .faqCard h3{

    font-size:1.1rem;

  }

  .faqCard p{

    font-size:14px;

  }



  /* ==========================
     CTA
  ========================== */

  .quoteCta{

    width:calc(100% - 32px);

    margin:55px auto;

    padding:40px 20px;

    border-radius:20px;

  }

  .quoteCta h2{

    font-size:1.8rem;

  }

  .quoteCta p{

    font-size:14px;

  }

  .quoteCta a{

    width:100%;

    padding:15px;

    font-size:14px;

  }

}
      `}</style>

    </>

  );

}