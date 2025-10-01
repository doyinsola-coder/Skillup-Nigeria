
import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";
// transporter
configDotenv();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // use 587 if TLS instead of SSL
  secure: true, // true for port 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// test connection
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection failed:", error);
  } else {
    console.log("✅ Server is ready to send emails");
  }
});
console.log("DEBUG email user:", `"${process.env.EMAIL_USER}"`);
console.log("DEBUG email pass length:", process.env.EMAIL_PASS?.length);


transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP error:", error);
  } else {
    console.log("✅ SMTP server is ready:", success);
  }
});
console.log(transporter.options.auth)

// function to send email
export const sendWelcomeEmail = async (to, name) => {
  try {
    const mailOptions = {
      from: `"SkillUp Nigeria" <${process.env.EMAIL_USER}>`,
      to,
      subject: "🎉 Welcome to SkillUp Nigeria!",
      html: `
        <h2>Hi ${name},</h2>
        <p>Welcome to <b>SkillUp Nigeria</b>! 🎓</p>
        <p>We’re excited to have you onboard. Start your learning journey today 🚀.</p>
        <br/>
        <p>Best regards,</p>
        <p>The SkillUp Nigeria Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Welcome email sent to:", to);
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
  }
};
