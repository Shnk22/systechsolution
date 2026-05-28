import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, phone, company, message } = req.body;

    await resend.emails.send({
      from: "Systech Website <onboarding@resend.dev>",

      to: ["systechsol@gmail.com"],

      subject: "🚀 New Systech Inquiry",

      html: `
        <h2>New Client Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Company:</strong> ${company}</p>

        <p><strong>Requirement:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}
