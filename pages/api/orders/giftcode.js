const nodemailer = require("nodemailer");
const fs = require("fs");

export default async (req, res) => {
  const {
    recipientEmail,
    senderName,
    recipientName,
    message,
    code,
    price,
    image,
  } = req.body;

  const projectRoot = path.resolve(process.cwd());

  let html = fs.readFileSync(
    path.join(projectRoot, "html/giftCode.html"),
    "utf8"
  );

  html = html.replace("{{recipientName}}", recipientName);
  html = html.replace("{{code}}", code);
  html = html.replace("{{price}}", price);
  html = html.replace("{{image}}", image);
  html = html.replace("{{message}}", message);
  while (html.indexOf("{{senderName}}") !== -1) {
    html = html.replace("{{senderName}}", senderName);
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
    to: recipientEmail,
    bcc: process.env.EMAIL_TO_BE_SENT_TO,
    subject: "You've received a Fun Factory Sensory Gym Gift Card!", // Subject line
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
