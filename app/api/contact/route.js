import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      service,
      date,
      message,
    } = body;

    /* =========================================
       NAMECHEAP PRIVATE EMAIL TRANSPORTER
    ========================================= */
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "465", 10),
      secure: true,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    /* =========================================
       COMPANY EMAIL
    ========================================= */

    const companyMailOptions = {
      from: `"${firstName} ${lastName} via Percy Sparkle Cleaning Services Ltd" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `New Cleaning Quote Request - ${firstName} ${lastName}`,

      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>New Cleaning Quote Request</title>

  <style>

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      width: 100% !important;
      min-width: 100%;
      background: #f4f7fb;
      font-family: Arial, Helvetica, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table {
      border-spacing: 0;
      border-collapse: collapse;
    }

    img {
      border: 0;
      display: block;
      max-width: 100%;
    }

    .email-wrapper {
      width: 100%;
      background: #f4f7fb;
      padding: 30px 15px;
    }

    .email-container {
      width: 100%;
      max-width: 700px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      overflow: hidden;
    }

    .email-header {
      background: #0a66f0;
      padding: 30px 25px;
      text-align: center;
    }

    .email-header h1 {
      margin: 0;
      color: #ffffff;
      font-size: 28px;
      line-height: 1.3;
    }

    .email-header p {
      margin: 10px 0 0;
      color: #dbeafe;
      font-size: 15px;
      line-height: 1.5;
    }

    .email-content {
      padding: 35px;
    }

    .intro {
      margin: 0;
      color: #111827;
      font-size: 17px;
      line-height: 1.7;
    }

    .quote-table {
      width: 100%;
      margin-top: 25px;
      border-collapse: collapse;
      table-layout: fixed;
    }

    .quote-table td {
      padding: 14px;
      border: 1px solid #e5e7eb;
      color: #374151;
      font-size: 15px;
      line-height: 1.5;
      vertical-align: top;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .quote-table td:first-child {
      width: 35%;
      font-weight: bold;
      color: #111827;
    }

    .section-title {
      margin: 35px 0 12px;
      color: #0a66f0;
      font-size: 18px;
      line-height: 1.4;
    }

    .requirements {
      background: #f8fafc;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      padding: 20px;
      color: #374151;
      font-size: 15px;
      line-height: 1.8;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
      word-break: break-word;
      text-align: justify;
    }

    .footer {
      margin-top: 35px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      color: #6b7280;
      font-size: 13px;
      line-height: 1.6;
    }

    @media only screen and (max-width: 600px) {

      .email-wrapper {
        padding: 12px 8px !important;
      }

      .email-container {
        width: 100% !important;
        max-width: 100% !important;
        border-radius: 10px !important;
      }

      .email-header {
        padding: 24px 18px !important;
      }

      .email-header h1 {
        font-size: 22px !important;
      }

      .email-header p {
        font-size: 14px !important;
      }

      .email-content {
        padding: 20px 15px !important;
      }

      .intro {
        font-size: 15px !important;
      }

      .quote-table td {
        padding: 11px 9px !important;
        font-size: 13px !important;
      }

      .quote-table td:first-child {
        width: 36% !important;
      }

      .section-title {
        margin-top: 25px !important;
        font-size: 17px !important;
      }

      .requirements {
        padding: 15px !important;
        font-size: 14px !important;
        line-height: 1.7 !important;
      }

      .footer {
        margin-top: 25px !important;
      }

    }

  </style>
</head>

<body>

  <div class="email-wrapper">

    <div class="email-container">

      <!-- HEADER -->

      <div class="email-header">

        <h1>
          Percy Sparkle Cleaning Services Ltd.
        </h1>

        <p>
          New Cleaning Quote Request
        </p>

      </div>


      <!-- CONTENT -->

      <div class="email-content">

        <p class="intro">
          A new quotation request has been submitted through the
          Percy Sparkle Cleaning Services Ltd website.
        </p>


        <!-- QUOTE DETAILS -->

        <table
          class="quote-table"
          role="presentation"
        >

          <tr>
            <td>
              Full Name
            </td>

            <td>
              ${firstName} ${lastName}
            </td>
          </tr>


          <tr>
            <td>
              Email Address
            </td>

            <td>
              ${email}
            </td>
          </tr>


          <tr>
            <td>
              Phone Number
            </td>

            <td>
              ${phone}
            </td>
          </tr>


          <tr>
            <td>
              Property Address
            </td>

            <td>
              ${address}
            </td>
          </tr>


          <tr>
            <td>
              Service Requested
            </td>

            <td>
              ${service}
            </td>
          </tr>


          <tr>
            <td>
              Preferred Cleaning Date
            </td>

            <td>
              ${date}
            </td>
          </tr>

        </table>


        <!-- CLEANING REQUIREMENTS -->

        <h3 class="section-title">
          Cleaning Requirements
        </h3>

        <div class="requirements">
          ${message || "No additional cleaning requirements were provided."}
        </div>


        <!-- FOOTER -->

        <div class="footer">

          This email was automatically generated from the
          Percy Sparkle Cleaning Services Ltd website.

        </div>

      </div>

    </div>

  </div>

</body>
</html>
      `,
    };


    /* =========================================
       CUSTOMER CONFIRMATION EMAIL
    ========================================= */

    const customerMailOptions = {
      from: `"Percy Sparkle Cleaning Services Ltd." <${process.env.EMAIL_USER}>`,

      to: email,

      subject: "We've received your cleaning quote request",

      html: `
<!DOCTYPE html>
<html>
<head>

  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>Quote Request Received</title>

  <style>

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      width: 100% !important;
      min-width: 100%;
      background: #f4f7fb;
      font-family: Arial, Helvetica, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table {
      border-spacing: 0;
      border-collapse: collapse;
    }

    .email-wrapper {
      width: 100%;
      background: #f4f7fb;
      padding: 30px 15px;
    }

    .email-container {
      width: 100%;
      max-width: 700px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      overflow: hidden;
    }

    .email-header {
      background: #0a66f0;
      padding: 30px 25px;
      text-align: center;
    }

    .email-header h1 {
      margin: 0;
      color: #ffffff;
      font-size: 28px;
      line-height: 1.3;
    }

    .email-header p {
      margin: 10px 0 0;
      color: #dbeafe;
      font-size: 15px;
      line-height: 1.5;
    }

    .email-content {
      padding: 35px;
    }

    .greeting {
      margin: 0 0 18px;
      color: #111827;
      font-size: 22px;
      line-height: 1.4;
    }

    .paragraph {
      margin: 0 0 18px;
      color: #374151;
      font-size: 16px;
      line-height: 1.8;
    }

    .divider {
      border: 0;
      border-top: 1px solid #e5e7eb;
      margin: 30px 0;
    }

    .quote-heading {
      margin: 0 0 15px;
      color: #0a66f0;
      font-size: 20px;
      line-height: 1.4;
    }

    .quote-table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
    }

    .quote-table td {
      padding: 14px;
      border: 1px solid #e5e7eb;
      color: #374151;
      font-size: 15px;
      line-height: 1.5;
      vertical-align: top;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .quote-table td:first-child {
      width: 35%;
      font-weight: bold;
      color: #111827;
    }

    .section-title {
      margin: 30px 0 12px;
      color: #0a66f0;
      font-size: 18px;
      line-height: 1.4;
    }

    .requirements {
      background: #f8fafc;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      padding: 20px;
      color: #374151;
      font-size: 15px;
      line-height: 1.8;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
      word-break: break-word;
      text-align: justify;
    }

    .closing {
      margin-top: 30px;
      color: #374151;
      font-size: 15px;
      line-height: 1.7;
    }

    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      color: #6b7280;
      font-size: 13px;
      line-height: 1.6;
    }

    @media only screen and (max-width: 600px) {

      .email-wrapper {
        padding: 12px 8px !important;
      }

      .email-container {
        width: 100% !important;
        max-width: 100% !important;
        border-radius: 10px !important;
      }

      .email-header {
        padding: 24px 18px !important;
      }

      .email-header h1 {
        font-size: 22px !important;
      }

      .email-header p {
        font-size: 14px !important;
      }

      .email-content {
        padding: 20px 15px !important;
      }

      .greeting {
        font-size: 20px !important;
      }

      .paragraph {
        font-size: 15px !important;
        line-height: 1.7 !important;
      }

      .quote-heading {
        font-size: 18px !important;
      }

      .quote-table td {
        padding: 11px 9px !important;
        font-size: 13px !important;
      }

      .quote-table td:first-child {
        width: 36% !important;
      }

      .section-title {
        margin-top: 25px !important;
        font-size: 17px !important;
      }

      .requirements {
        padding: 15px !important;
        font-size: 14px !important;
        line-height: 1.7 !important;
      }

      .closing {
        font-size: 14px !important;
      }

      .footer {
        margin-top: 25px !important;
      }

    }

  </style>
</head>

<body>

  <div class="email-wrapper">

    <div class="email-container">

      <!-- HEADER -->

      <div class="email-header">

        <h1>
          Percy Sparkle Cleaning Services Ltd.
        </h1>

        <p>
          Quote Request Received
        </p>

      </div>


      <!-- CONTENT -->

      <div class="email-content">

        <!-- CONFIRMATION MESSAGE -->

        <h2 class="greeting">
          Hi ${firstName},
        </h2>


        <p class="paragraph">
          Thank you for requesting a free cleaning quotation from
          <strong>Percy Sparkle Cleaning Services Ltd.</strong>
        </p>


        <p class="paragraph">
          We have successfully received your request and one of our
          team members will review it and contact you as soon as possible.
        </p>


        <p class="paragraph">
          We appreciate the opportunity to serve you.
        </p>


        <!-- DIVIDER -->

        <hr class="divider">


        <!-- COPY OF QUOTE -->

        <h2 class="quote-heading">
          Your Quote Request
        </h2>


        <table
          class="quote-table"
          role="presentation"
        >

          <tr>
            <td>
              Full Name
            </td>

            <td>
              ${firstName} ${lastName}
            </td>
          </tr>


          <tr>
            <td>
              Email Address
            </td>

            <td>
              ${email}
            </td>
          </tr>


          <tr>
            <td>
              Phone Number
            </td>

            <td>
              ${phone}
            </td>
          </tr>


          <tr>
            <td>
              Property Address
            </td>

            <td>
              ${address}
            </td>
          </tr>


          <tr>
            <td>
              Service Requested
            </td>

            <td>
              ${service}
            </td>
          </tr>


          <tr>
            <td>
              Preferred Cleaning Date
            </td>

            <td>
              ${date}
            </td>
          </tr>

        </table>


        <!-- CLEANING REQUIREMENTS -->

        <h3 class="section-title">
          Cleaning Requirements
        </h3>


        <div class="requirements">
          ${message || "No additional cleaning requirements were provided."}
        </div>


        <!-- CLOSING -->

        <div class="closing">

          Kind regards,<br>

          <strong>
            Percy Sparkle Cleaning Services Ltd.
          </strong>

        </div>


        <!-- FOOTER -->

        <div class="footer">

          This email is a confirmation of the quote request
          submitted through the Percy Sparkle Cleaning Services Ltd website.

        </div>

      </div>

    </div>

  </div>

</body>
</html>
      `,
    };


    /* =========================================
       SEND COMPANY EMAIL ONCE
    ========================================= */

    await transporter.sendMail(companyMailOptions);


    /* =========================================
       SEND CUSTOMER EMAIL ONCE
    ========================================= */

    await transporter.sendMail(customerMailOptions);


    /* =========================================
       SUCCESS RESPONSE
    ========================================= */

    return NextResponse.json(
      {
        success: true,
        message: "Quote request submitted successfully.",
      },
      {
        status: 200,
      }
    );

  } catch (error) {

    console.error("Email Error:", error);

    return NextResponse.json(
      {
        error: "Unable to send your request at this time.",
      },
      {
        status: 500,
      }
    );
  }
}