"use client";

    import { motion, useReducedMotion } from "framer-motion";

    import {
    Home,
    Building2,
    Sparkles,
    KeyRound,
    ArrowRight,
    } from "lucide-react";

    export default function ServicesPage() {

    const reduceMotion = useReducedMotion();

    return (

        <>

        {/*==================================
        SITE OPENING
        ===================================*/}

        <div className="homeSiteOpening">

        <div className="homeOpeningLogoAnchor">

            <span className="homeOpeningLogo" />

        </div>

        <div className="homeOpeningCopy">

            <p>

            Percy Sparkle

            </p>

            <span>

            CLEANING SERVICES

            </span>

        </div>

        </div>



      {/*==================================
              HERO
        ===================================*/}

        <section className="servicesHero">

        <div className="servicesHeroContent">

            <motion.div

            className="servicesHeroCopy"

            initial={
                reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 40,
                    }
            }

            animate={{
                opacity: 1,
                y: 0,
            }}

            transition={{
                duration: 1,
            }}

            >

            <p className="eyebrow">

                OUR SERVICES

            </p>

            <h1>

                Professional
                cleaning services
                for every space.

            </h1>

            <p className="heroDescription">

                From family homes and apartments to offices and commercial
                properties, Percy Sparkle Cleaning Services delivers reliable,
                high-quality cleaning tailored to your schedule, your standards,
                and your lifestyle.

            </p>

            <div className="heroActions">

                <a

                href="/contactpage#quote-form"

                className="heroQuoteButton"

                >

                Request a Free Quote

                </a>

            </div>

            </motion.div>



            <motion.div

            className="servicesHeroImage"

            initial={
                reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 60,
                    }
            }

            animate={{
                opacity: 1,
                x: 0,
            }}

            transition={{
                duration: 1,
            }}

            >

            <div className="servicesHeroImageFrame">

                <img
                src="https://res.cloudinary.com/wt1k8kgj/image/upload/f_auto,q_auto:good,w_1500/A_luxury__ultra-realistic_professional_cleaning_SP_c77kj8.jpg"
                alt="Professional Cleaning Services"
                />

            </div>

            </motion.div>

        </div>

        </section>



      {/*==================================
      RESIDENTIAL CLEANING
        ===================================*/}

        <section className="serviceFeature">

        <div className="serviceFeatureContent">

            <motion.div

            className="serviceFeatureImage"

            initial={
                reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -60,
                    }
            }

            whileInView={{
                opacity: 1,
                x: 0,
            }}

            viewport={{
                once: true,
                amount: .3,
            }}

            transition={{
                duration: 1,
            }}

            >

            <div className="serviceFeatureImageFrame">

                <img
                src="https://res.cloudinary.com/wt1k8kgj/image/upload/f_auto,q_auto:good,w_1500/v1785836602/Cleaners_preparing_luxury_apartment_SP_rzzljn.jpg"
                alt="Residential Cleaning"
                />

            </div>

            </motion.div>



            <motion.div

            className="serviceFeatureCopy"

            initial={
                reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 60,
                    }
            }

            whileInView={{
                opacity: 1,
                x: 0,
            }}

            viewport={{
                once: true,
                amount: .3,
            }}

            transition={{
                duration: 1,
            }}

            >

            <p className="eyebrow">

                RESIDENTIAL CLEANING

            </p>

            <h2>

                Creating cleaner,
                healthier homes
                every day.

            </h2>

            <p>

                Your home deserves the highest standard of care. Whether you
                need a one-time clean or regular housekeeping, we deliver
                meticulous cleaning that leaves every room fresh, hygienic,
                and beautifully presented.

            </p>

            <h3>

                What's Included

            </h3>

            <ul className="serviceList">

                <li>General House Cleaning</li>

                <li>Kitchen Cleaning</li>

                <li>Bathroom Sanitisation</li>

                <li>Bedroom & Living Area Cleaning</li>

                <li>Dusting & Vacuuming</li>

                <li>Mopping & Floor Care</li>

            </ul>

            <a

                href="/contactpage?service=Residential%20Cleaning#quote-form"

                className="serviceButton"

            >

                Request This Service

            </a>

            </motion.div>

        </div>

        </section>



      {/*==================================
        COMMERCIAL CLEANING
        ===================================*/}

    <section className="serviceFeature alternate">

    <div className="serviceFeatureContent">

        <motion.div

        className="serviceFeatureCopy"

        initial={
            reduceMotion
            ? false
            : {
                opacity: 0,
                x: -60,
                }
        }

        whileInView={{
            opacity: 1,
            x: 0,
        }}

        viewport={{
            once: true,
            amount: .3,
        }}

        transition={{
            duration: 1,
        }}

        >

        <p className="eyebrow">

            COMMERCIAL CLEANING

        </p>

        <h2>

            Professional cleaning
            that reflects your
            business standards.

        </h2>

        <p>

            A clean workplace creates a positive impression and promotes a
            healthier environment for employees and visitors alike. We
            provide dependable commercial cleaning tailored to offices,
            retail spaces and business premises of every size.

        </p>

        <h3>

            What's Included

        </h3>

        <ul className="serviceList">

            <li>Office Cleaning</li>

            <li>Reception & Waiting Areas</li>

            <li>Washroom Sanitisation</li>

            <li>Workstation & Desk Cleaning</li>

            <li>Floor Care & Vacuuming</li>

            <li>Scheduled Cleaning Plans</li>

        </ul>

        <a

            href="/contactpage?service=Commercial%20Cleaning#quote-form"

            className="serviceButton"

        >

            Request This Service

        </a>

        </motion.div>



        <motion.div

        className="serviceFeatureImage"

        initial={
            reduceMotion
            ? false
            : {
                opacity: 0,
                x: 60,
                }
        }

        whileInView={{
            opacity: 1,
            x: 0,
        }}

        viewport={{
            once: true,
            amount: .3,
        }}

        transition={{
            duration: 1,
        }}

        >

        <div className="serviceFeatureImageFrame">

            <img
            src="https://res.cloudinary.com/wt1k8kgj/image/upload/f_auto,q_auto:good,w_1500/v1785836599/Cleaners_working_in_office_SP_qccswy.jpg"
            alt="Commercial Cleaning"
            />

        </div>

        </motion.div>

    </div>

    </section>



      {/*==================================
                DEEP CLEANING
        ===================================*/}

        <section className="serviceFeature">

        <div className="serviceFeatureContent">

            <motion.div

            className="serviceFeatureImage"

            initial={
                reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -60,
                    }
            }

            whileInView={{
                opacity: 1,
                x: 0,
            }}

            viewport={{
                once: true,
                amount: .3,
            }}

            transition={{
                duration: 1,
            }}

            >

            <div className="serviceFeatureImageFrame">

                <img
                src="https://res.cloudinary.com/wt1k8kgj/image/upload/f_auto,q_auto:good,w_1500/v1785836501/Cleaners_performing_deep_clean_SP_p0pmga.jpg"
                alt="Deep Cleaning"
                />

            </div>

            </motion.div>



            <motion.div

            className="serviceFeatureCopy"

            initial={
                reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 60,
                    }
            }

            whileInView={{
                opacity: 1,
                x: 0,
            }}

            viewport={{
                once: true,
                amount: .3,
            }}

            transition={{
                duration: 1,
            }}

            >

            <p className="eyebrow">

                DEEP CLEANING

            </p>

            <h2>

                A complete reset
                for every room
                and every surface.

            </h2>

            <p>

                When your property needs more than a routine clean, our deep
                cleaning service reaches the areas often overlooked. We focus
                on built-up dirt, hidden dust and stubborn grime, restoring
                freshness, hygiene and comfort throughout your space.

            </p>

            <h3>

                What's Included

            </h3>

            <ul className="serviceList">

                <li>Detailed Kitchen Deep Cleaning</li>

                <li>Bathroom Descaling & Sanitisation</li>

                <li>Skirting Boards & Door Frames</li>

                <li>Inside Cabinets & Storage Areas</li>

                <li>High & Hard-to-Reach Areas</li>

                <li>Comprehensive Dust & Dirt Removal</li>

            </ul>

            <a

                href="/contactpage?service=Deep%20Cleaning#quote-form"

                className="serviceButton"

            >

                Request This Service

            </a>

            </motion.div>

        </div>

        </section>



      {/*==================================
        END OF TENANCY CLEANING
       ===================================*/}

        <section className="serviceFeature alternate">

        <div className="serviceFeatureContent">

            <motion.div

            className="serviceFeatureCopy"

            initial={
                reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -60,
                    }
            }

            whileInView={{
                opacity: 1,
                x: 0,
            }}

            viewport={{
                once: true,
                amount: .3,
            }}

            transition={{
                duration: 1,
            }}

            >

            <p className="eyebrow">

                END OF TENANCY CLEANING

            </p>

            <h2>

                Leave every
                property spotless
                and move-in ready.

            </h2>

            <p>

                Whether you're moving out, preparing a property for new
                tenants or managing a rental property, our end of tenancy
                cleaning service provides the detailed finish needed to leave
                every room fresh, hygienic and ready for its next occupants.

            </p>

            <h3>

                What's Included

            </h3>

            <ul className="serviceList">

                <li>Complete Property Cleaning</li>

                <li>Kitchen & Appliance Cleaning</li>

                <li>Bathroom Deep Sanitisation</li>

                <li>Interior Window Cleaning</li>

                <li>Cupboards & Wardrobes</li>

                <li>Move-In & Move-Out Preparation</li>

            </ul>

            <a

                href="/contactpage?service=End%20of%20Tenancy%20Cleaning#quote-form"

                className="serviceButton"

            >

                Request This Service

            </a>

            </motion.div>



            <motion.div

            className="serviceFeatureImage"

            initial={
                reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 60,
                    }
            }

            whileInView={{
                opacity: 1,
                x: 0,
            }}

            viewport={{
                once: true,
                amount: .3,
            }}

            transition={{
                duration: 1,
            }}

            >

            <div className="serviceFeatureImageFrame">

                <img
                src="https://res.cloudinary.com/wt1k8kgj/image/upload/f_auto,q_auto:good,w_1500/v1785836501/Cleaners_performing_deep_clean_SP_p0pmga.jpg"
                alt="End of Tenancy Cleaning"
                />

            </div>

            </motion.div>

        </div>

        </section>



      

      <style jsx global>{`

        /* =====================================================
        HERO
        ===================================================== */

        html,
        body{
            overflow-x:hidden;
        }
            

        .servicesHero {

        min-height: 100vh;

        display: flex;

        align-items: center;

        padding: 145px 8% 110px;

        background:
            radial-gradient(circle at 100% 0%,
            rgba(24, 119, 242, .16),
            transparent 38%),
            radial-gradient(circle at 0% 100%,
            rgba(58, 142, 255, .10),
            transparent 35%),
            linear-gradient(180deg,
            #F4F9FE 0%,
            #EDF5FD 50%,
            #E7F1FC 100%);

        }

        .servicesHeroContent {

        width: 100%;

        max-width: 1280px;

        margin: 0 auto;

        display: grid;

        grid-template-columns: 1.05fr .95fr;

        gap: clamp(60px,8vw,110px);

        align-items: center;

        }

        .servicesHeroCopy {

        max-width: 620px;

        }

        .servicesHeroCopy .eyebrow{

        display:inline-block;

        margin-bottom:18px;

        color:var(--primary);

        font-size:12px;

        font-weight:800;

        letter-spacing:.18em;

        text-transform:uppercase;

        }

        .servicesHeroCopy h1{

        margin:0 0 28px;

        font-family:var(--font-heading),sans-serif;

        font-size:clamp(3.4rem,5vw,5.3rem);

        line-height:1.08;

        letter-spacing:-2px;

        color:var(--ink);

        }

        .heroDescription {

        max-width: 580px;

        font-size: 18px;

        line-height: 1.9;
         text-align: justify;


        }

        .heroActions {

        display: flex;

        align-items: center;

        gap: 20px;

        margin-top: 42px;

        }

        .heroQuoteButton {

        display: inline-flex;

        align-items: center;

        justify-content: center;

        padding: 17px 34px;

        border-radius: 999px;

        background: var(--primary);

        color: #fff;

        font-weight: 700;

        transition: .35s;

        }

        .heroQuoteButton:hover {

        background: var(--primary-dark);

        transform: translateY(-3px);

        }

        .servicesHeroImage {

        position: relative;

        }

        .servicesHeroImageFrame {

        position: relative;

        overflow: hidden;

        padding: 16px;

        border-radius: 30px;

        background:
            linear-gradient(145deg,#ffffff,#eef6ff);

        border: 1px solid rgba(10,102,240,.10);

        box-shadow: 0 24px 60px rgba(15,23,42,.10);

        }

        .servicesHeroImageFrame img {

        width: 100%;

        height: 650px;

        display: block;

        object-fit: cover;

        border-radius: 20px;

        }



       /* =====================================================
        FEATURED SERVICES
        ===================================================== */

        .serviceFeature {

        padding: 120px 8%;

        background: linear-gradient(
            180deg,
            #F5FAFF 0%,
            #EDF5FD 100%
        );

        }

        .serviceFeature:nth-of-type(even) {

        background: linear-gradient(
            180deg,
            #EEF6FF 0%,
            #E4F0FC 100%
        );

        }

        .serviceFeatureContent {

        max-width: 1280px;

        margin: 0 auto;

        display: grid;

        grid-template-columns: repeat(2, minmax(0, 1fr));

        gap: clamp(60px, 8vw, 110px);

        align-items: center;

        }



        .serviceFeature.alternate .serviceFeatureContent {

        direction: rtl;

        }

        .serviceFeature.alternate .serviceFeatureCopy,
        .serviceFeature.alternate .serviceFeatureImage {

        direction: ltr;

        }
        .serviceFeatureCopy .eyebrow{

        display:inline-block;

        margin-bottom:18px;

        color:var(--primary);

        font-size:12px;

        font-weight:800;

        letter-spacing:.18em;

        text-transform:uppercase;

        }


        /* ==========================
        IMAGE
        ========================== */

        .serviceFeatureImageFrame {

        position: relative;

        overflow: hidden;

        padding: 16px;

        border-radius: 28px;

        background:
            linear-gradient(145deg, #ffffff, #eef6ff);

        border: 1px solid rgba(10,102,240,.10);

        box-shadow: 0 22px 55px rgba(15,23,42,.10);
        transition:
        transform .4s ease,
        box-shadow .4s ease;

        }

        .serviceFeatureImageFrame img {

        width: 100%;

        height: 560px;

        display: block;

        object-fit: cover;

        border-radius: 18px;

        }



        /* ==========================
        COPY
        ========================== */

        .serviceFeatureCopy {

        max-width: 580px;

        }

        .serviceFeatureCopy h2 {

        margin: 18px 0 24px;

        }

        .serviceFeatureCopy p {

        margin-bottom: 30px;

        font-size: 17px;

        line-height: 1.9;
        text-align: justify;

        }

        .serviceFeatureCopy h3 {

        margin-bottom: 18px;

        color: var(--ink);

        font-size: 1.3rem;

        font-weight: 700;

        }



        /* ==========================
        LIST
        ========================== */

        .serviceList {

        display: grid;

        gap: 16px;

        margin-bottom: 40px;

        list-style: none;

        }

        .serviceList li {

        position: relative;

        padding-left: 34px;

        color: var(--text-primary);

        font-size: 17px;

        }

        .serviceList li::before {

        content: "";

        position: absolute;

        left: 0;

        top: 9px;

        width: 10px;

        height: 10px;

        border-radius: 50%;

        background: var(--primary);

        }



        /* ==========================
        BUTTON
        ========================== */

        .serviceButton {

        display: inline-flex;

        align-items: center;

        justify-content: center;

        padding: 16px 34px;

        border-radius: 999px;

        background: var(--primary);

        color: #ffffff;

        font-weight: 700;

        transition: .35s ease;

        }

        .serviceButton:hover {

        background: var(--primary-dark);

        transform: translateY(-3px);

        }


        /* =====================================================
        CTA
        ===================================================== */

        .servicesCta {

        padding: 120px 8%;

        background:
            radial-gradient(circle at top right, rgba(10,102,240,.12), transparent 34%),
            linear-gradient(145deg,#0a66f0,#064bb5);

        }

        .servicesCtaContent {

        max-width: 900px;

        margin: 0 auto;

        text-align: center;

        }

        .servicesCta .eyebrow {

        color: rgba(255,255,255,.85);

        }

        .servicesCta h2 {

        margin: 20px 0 28px;

        color: #ffffff;

        font-size: clamp(2.5rem,5vw,4rem);

        line-height: 1.1;

        }

        .servicesCta p {

        max-width: 720px;

        margin: 0 auto;

        color: rgba(255,255,255,.88);

        font-size: 18px;

        line-height: 1.9;
        text-align: justify;

        }

        .servicesCtaButtons {

        display: flex;

        justify-content: center;

        margin-top: 42px;

        }

        .servicesCtaButton {

        display: inline-flex;

        align-items: center;

        justify-content: center;

        padding: 18px 38px;

        border-radius: 999px;

        background: #ffffff;

        color: var(--primary);

        font-weight: 700;

        transition: .35s ease;

        box-shadow: 0 16px 40px rgba(0,0,0,.15);

        }

        .servicesCtaButton:hover {

        transform: translateY(-4px);

        box-shadow: 0 24px 55px rgba(0,0,0,.20);

        }



                @media (max-width:1024px){

        /* =========================
            HERO
        ========================= */

        .servicesHero{

            min-height:auto;

            padding:130px 40px 90px;

        }

        .servicesHeroContent{

            gap:60px;

        }

        .servicesHeroImageFrame img{

            height:520px;

        }

        .heroDescription{

        max-width:620px;

        margin-top:30px;

        font-size:20px;

        line-height:1.9;

        color:var(--text-secondary);

        }

        .heroActions{

            margin-top:36px;

        }



        /* =========================
            SERVICES
        ========================= */

        .serviceFeature{

            padding:90px 40px;

        }

        .serviceFeatureContent{

            gap:50px;

        }

        .serviceFeatureImageFrame img{

            height:450px;

        }

        .serviceFeatureCopy p{

            font-size:16px;

        }

        .serviceList{

            gap:14px;

        }

        .serviceButton{

            padding:15px 30px;

        }



        /* =========================
            CTA
        ========================= */

        .servicesCta{

            padding:90px 40px;

        }

        .servicesCta h2{

            font-size:3rem;

        }

        .servicesCta p{

            font-size:17px;

        }

        }



        @media (max-width:768px){

        /* =========================
            HERO
        ========================= */

        .servicesHero{

            min-height:auto;

            padding:110px 20px 80px;

        }

        .servicesHeroContent{

            grid-template-columns:1fr;

            gap:42px;

        }

        .servicesHeroCopy{

            max-width:100%;

            text-align:center;

        }

        .servicesHeroCopy h1{

            margin:16px 0 22px;

            font-size:2.5rem;

            line-height:1.15;

        }

        .heroDescription{

            max-width:100%;

            font-size:16px;

        }

        .heroActions{

            justify-content:center;

            margin-top:30px;

        }

        .heroQuoteButton{

            width:100%;

            padding:16px 20px;

        }

        .servicesHeroImageFrame{

            padding:10px;

            border-radius:22px;
            background:
            radial-gradient(circle at 100% 0%,
            rgba(10,102,240,.18),
            transparent 42%),
            linear-gradient(145deg,#ffffff,#dcecff); 

            border:1px solid rgba(10,102,240,.15);

            box-shadow:
            0 28px 70px rgba(10,102,240,.16);

        }

        .servicesHeroImageFrame::after{

        content:"";

        position:absolute;

        inset:-12px;

        border-radius:42px;

        border:2px solid rgba(10,102,240,.08);

        pointer-events:none;

        }

        .servicesHeroImageFrame img{

            height:300px;

            border-radius:16px;

        background:
            radial-gradient(circle at 100% 0%,
            rgba(10,102,240,.18),
            transparent 40%),
            linear-gradient(145deg,#ffffff,#edf6ff);

        border:1px solid rgba(10,102,240,.14);

        box-shadow:
            0 24px 60px rgba(10,102,240,.12);

        }

        .serviceFeatureImageFrame::before{

        content:"";

        position:absolute;

        inset:-10px;

        border-radius:36px;

        border:1px solid rgba(10,102,240,.08);

        pointer-events:none;

        }


        /* =========================
            SERVICES
        ========================= */

        .serviceFeature{

            padding:70px 20px;

        }

        .serviceFeatureContent{

            grid-template-columns:1fr;

            gap:34px;

        }


        /* Mobile image order */

        
        .serviceFeatureImage{
            order: 1;
        }

        .serviceFeatureCopy{
            order: 2;
        }

        .serviceFeature.alternate .serviceFeatureContent{

            direction:ltr;

        }

        .serviceFeatureCopy{

            max-width:100%;

        }

        .serviceFeatureCopy h2{

        margin:0 0 24px;

        font-family:var(--font-heading),sans-serif;

        font-size:clamp(2.8rem,4vw,3.9rem);

        line-height:1.12;

        letter-spacing:-1px;

        color:var(--ink);

        }

        .serviceFeatureCopy p{

        margin-bottom:30px;

        font-size:18px;

        line-height:1.9;

        color:var(--text-secondary);

        }

        .serviceFeatureCopy h3{

        margin:40px 0 18px;

        color:var(--primary);

        font-size:15px;

        font-weight:800;

        letter-spacing:.12em;

        text-transform:uppercase;

        }

        .serviceFeatureImageFrame{

            padding:10px;

            border-radius:22px;
            

        }

        .serviceFeatureImageFrame img{

            height:280px;

            border-radius:16px;

        }

        .serviceList{

            gap:12px;

            margin-bottom:30px;

        }

        .serviceList li{

            font-size:15px;

            padding-left:28px;

        }

        .serviceList li::before{

            width:8px;

            height:8px;

            top:8px;

        }

        .serviceButton{

            width:100%;

            padding:15px 20px;

        }



        /* =========================
            CTA
        ========================= */

        .servicesCta{

            padding:70px 20px;

        }

        .servicesCta h2{

            font-size:2.3rem;

            margin:18px 0 22px;

        }

        .servicesCta p{

            font-size:16px;

        }

        .servicesCtaButtons{

            margin-top:30px;

        }

        .servicesCtaButton{

            width:100%;

            padding:16px 20px;

        }

        }



        @media (max-width:380px){

        /* =========================
            HERO
        ========================= */

        .servicesHero{

            padding:95px 16px 70px;

        }

        .servicesHeroCopy h1{

            font-size:2rem;

            line-height:1.15;

        }

        .heroDescription{

            font-size:15px;

            line-height:1.7;

        }

        .heroQuoteButton{

            padding:15px 18px;

            font-size:15px;

        }

        .servicesHeroImageFrame img{

            height:240px;

        }



        /* =========================
            SERVICES
        ========================= */

        .serviceFeature{

            padding:60px 16px;

        }

        .serviceFeatureContent{

            gap:28px;

        }

        .serviceFeatureCopy h2{

            font-size:1.8rem;

            line-height:1.2;

        }

        .serviceFeatureCopy p{

            font-size:15px;

            line-height:1.7;

        }

        .serviceFeatureCopy h3{

            font-size:1.15rem;

        }

        .serviceFeatureImageFrame{

            padding:8px;

            border-radius:18px;

        }

        .serviceFeatureImageFrame img{

            height:220px;

            border-radius:14px;

        }

        .serviceList{

            gap:10px;

            margin-bottom:26px;

        }

        .serviceList li{

            font-size:14px;

            padding-left:24px;

        }

        .serviceList li::before{

            width:7px;

            height:7px;

            top:8px;

        }

        .serviceButton{

            padding:14px 18px;

            font-size:15px;

        }



        /* =========================
            CTA
        ========================= */

        .servicesCta{

            padding:60px 16px;

        }

        .servicesCta h2{

            font-size:2rem;

            line-height:1.15;

        }

        .servicesCta p{

            font-size:15px;

            line-height:1.7;

        }

        .servicesCtaButtons{

            margin-top:26px;

        }

        .servicesCtaButton{

            padding:15px 18px;

            font-size:15px;

        }

        }

      `}</style>

    </>

  );

}