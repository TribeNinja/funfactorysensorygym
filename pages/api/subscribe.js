const nodemailer = require("nodemailer");
const fs = require("fs-extra");

export default async (req, res) => {
  const { email } = req.body;

  fs.readFile("./html/successOrder.html", "utf8")
    .then((data) => {
      let html = data;

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
    })
    .catch((err) => {
      console.error(err);
    });
};
