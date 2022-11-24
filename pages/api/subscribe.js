const nodemailer = require("nodemailer");

export default async (req, res) => {
  const { email } = req.body;

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: process.env.SECURE_TRANSPORTER, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  transporter
    .sendMail({
      from: process.env.EMAIL_SERVER_USER, // sender address
      to: process.env.EMAIL_TO_BE_SENT_TO,
      subject: "New newsletter subscription", // Subject line
      html: `
    <p>Email: ${email}</p>
    
    `, // html body
    })
    .catch((err) => {
      res.status(400).json({ status: "fail" });
    })
    .then((result) => {
      if (result) {
        res.status(200).json({ status: "success" });
      } else {
        res.status(200).json({ status: "fail" });
      }
    });
};
