const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

export default async (req, res) => {
  const { senderEmail, recipientEmail, orderId, date, title, price, image } =
    req.body;

  const projectRoot = path.resolve(process.cwd());
  let html = fs.readFileSync(
    path.join(projectRoot, "html/successOrder.html"),
    "utf8"
  );

  html = html.replace("{{recipientEmail}}", recipientEmail);
  html = html.replace("{{orderId}}", orderId);
  html = html.replace("{{date}}", date);
  html = html.replace("{{title}}", title);
  html = html.replace("{{image}}", image);
  while (html.indexOf("{{price}}") !== -1) {
    html = html.replace("{{price}}", price);
  }

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
    to: senderEmail,
    bcc: process.env.EMAIL_TO_BE_SENT_TO,
    subject: "Order placed!", // Subject line
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
