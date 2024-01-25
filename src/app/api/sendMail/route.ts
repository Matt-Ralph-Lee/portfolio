import { NextRequest, NextResponse } from "next/server";
import nodeMailer from "nodemailer";

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { name, email, message } = reqBody;

  try {
    const transporter = nodeMailer.createTransport({
      host: "smtpv4.m.titech.ac.jp",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_AUTH_USER,
        pass: process.env.MAIL_AUTH_PASS,
      },
    });

    const mailOptions = {
      from: "ichikawa.m.an@m.titech.ac.jp",
      to: "ichikawa.m.an@m.titech.ac.jp",
      subject: `お問い合わせ - from ${name}`,
      text: `名前: ${name} \n\nメールアドレス: ${email} \n\nメッセージ: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "Sent successfully",
      info: info,
      result: true,
    });
  } catch (err) {
    return NextResponse.json({ message: "Failed to send.", result: err });
  }
}
