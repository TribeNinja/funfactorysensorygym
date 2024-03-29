const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

async function postToWebhook(webhookURL, data) {
  try {
    const response = await axios.post(webhookURL, data);
  } catch (error) {
    console.error(error);
  }
}

export default async (req, res) => {
  const { email } = req.body;

  postToWebhook(process.env.ZAPIER_NEWSLETTER, {
    email,
  });

  const projectRoot = path.resolve(process.cwd());

  let html = fs.readFileSync(
    path.join(projectRoot, "html/newsletter.html"),
    "utf8"
  );

  html = html.replace("{{email}}", email);

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: process.env.SECURE_TRANSPORTER, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_SERVER_USER, // sender address
    to: email,
    bcc: process.env.EMAIL_TO_BE_SENT_TO,
    subject: "Thank you for subscribing!", // Subject line
    html: html, // html body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(400).json({ status: "fail" });
    }
    res.status(200).json({ status: "success" });
  });
};
