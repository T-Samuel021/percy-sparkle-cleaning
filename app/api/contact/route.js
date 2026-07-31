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
        const transporter = nodemailer.createTransport({

      service: "gmail",

      auth: {

        user: process.env.GMAIL_USER,

        pass: process.env.GMAIL_APP_PASSWORD,

      },

    });

    const mailOptions = {

      from: `"${firstName} ${lastName} via Percy Sparkle" <${process.env.GMAIL_USER}>`,

      to: "Percysparklecleaningservices@gmail.com",

      replyTo: email,

      subject: `New Cleaning Quote Request - ${firstName} ${lastName}`,
            html: `

      <div style="font-family:Arial,sans-serif;background:#f4f7fb;padding:40px;">

        <div style="max-width:700px;margin:auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;">

          <div style="background:#0a66f0;padding:30px;text-align:center;">

            <h1 style="margin:0;color:#ffffff;font-size:28px;">

              Percy Sparkle Cleaning Services

            </h1>

            <p style="margin-top:10px;color:#dbeafe;font-size:15px;">

              New Cleaning Quote Request

            </p>

          </div>

          <div style="padding:35px;">

            <p style="font-size:17px;color:#111827;">

              A new quotation request has been submitted through the Percy Sparkle Cleaning Services website.

            </p>

            <table style="width:100%;border-collapse:collapse;margin-top:25px;">

              <tr>

                <td style="padding:14px;font-weight:bold;border:1px solid #e5e7eb;width:35%;">

                  Full Name

                </td>

                <td style="padding:14px;border:1px solid #e5e7eb;">

                  ${firstName} ${lastName}

                </td>

              </tr>

              <tr>

                <td style="padding:14px;font-weight:bold;border:1px solid #e5e7eb;">

                  Email Address

                </td>

                <td style="padding:14px;border:1px solid #e5e7eb;">

                  ${email}

                </td>

              </tr>

              <tr>

                <td style="padding:14px;font-weight:bold;border:1px solid #e5e7eb;">

                  Phone Number

                </td>

                <td style="padding:14px;border:1px solid #e5e7eb;">

                  ${phone}

                </td>

              </tr>

              <tr>

                <td style="padding:14px;font-weight:bold;border:1px solid #e5e7eb;">

                  Property Address

                </td>

                <td style="padding:14px;border:1px solid #e5e7eb;">

                  ${address}

                </td>

              </tr>

              <tr>

                <td style="padding:14px;font-weight:bold;border:1px solid #e5e7eb;">

                  Service Requested

                </td>

                <td style="padding:14px;border:1px solid #e5e7eb;">

                  ${service}

                </td>

              </tr>

              <tr>

                <td style="padding:14px;font-weight:bold;border:1px solid #e5e7eb;">

                  Preferred Cleaning Date

                </td>

                <td style="padding:14px;border:1px solid #e5e7eb;">

                  ${date}

                </td>

              </tr>

            </table>

            <h3 style="margin-top:35px;color:#0a66f0;">

              Cleaning Requirements

            </h3>

            <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:10px;padding:20px;line-height:1.8;color:#374151;white-space:pre-wrap;">

              ${message}

            </div>

            <hr style="margin:35px 0;border:none;border-top:1px solid #e5e7eb;">

            <p style="font-size:13px;color:#6b7280;">

              This email was automatically generated from the Percy Sparkle Cleaning Services website.

            </p>

          </div>

        </div>

      </div>

      `,
          };

    await transporter.sendMail(mailOptions);

    await transporter.sendMail(mailOptions);

// Send confirmation email to the customer
await transporter.sendMail({
  from: `"Percy Sparkle Cleaning Services" <${process.env.GMAIL_USER}>`,
  to: email,

  subject: "We've received your cleaning quote request",

  html: `
    <div style="font-family:Arial,sans-serif;background:#f4f7fb;padding:40px;">
      <div style="max-width:650px;margin:auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;">

        <div style="background:#0a66f0;padding:30px;text-align:center;">
          <h1 style="margin:0;color:#ffffff;">
            Percy Sparkle Cleaning Services
          </h1>
          <p style="color:#dbeafe;margin-top:10px;">
            Quote Request Received
          </p>
        </div>

        <div style="padding:35px;">

          <h2 style="color:#111827;">
            Hi ${firstName},
          </h2>

          <p style="font-size:16px;line-height:1.8;color:#374151;">
            Thank you for requesting a free cleaning quotation from
            <strong>Percy Sparkle Cleaning Services.</strong>
          </p>

          <p style="font-size:16px;line-height:1.8;color:#374151;">
            We have successfully received your request and one of our
            team members will review it and contact you as soon as possible.
          </p>

          <p style="font-size:16px;line-height:1.8;color:#374151;">
            We appreciate the opportunity to serve you.
          </p>

          <br>

          <p>
            Kind regards,<br>
            <strong>Percy Sparkle Cleaning Services</strong>
          </p>

        </div>

      </div>
    </div>
  `,
});

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