import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: subject || "New Contact Form Message",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Error sending email:", err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
