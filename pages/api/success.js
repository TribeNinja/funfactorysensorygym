const nodemailer = require("nodemailer");
const fs = require("fs");

export default async (req, res) => {
  const {
    firstName,
    lastName,
    phone,
    email,
    city,
    state,
    message,
    selectedSystem,
  } = req.body;

  const projectRoot = path.resolve(process.cwd());

  let userHTML = fs.readFileSync(
    path.join(projectRoot, "html/contactUsUser.html"),
    "utf8"
  );
  let ownerHTML = fs.readFileSync(
    path.join(projectRoot, "html/contactUsOwner.html"),
    "utf8"
  );

  userHTML = userHTML.replace("{{firstName}}", firstName);
  userHTML = userHTML.replace("{{lastName}}", lastName);
  ownerHTML = ownerHTML.replace("{{firstName}}", firstName);
  ownerHTML = ownerHTML.replace("{{lastName}}", lastName);
  ownerHTML = ownerHTML.replace("{{email}}", email);
  ownerHTML = ownerHTML.replace("{{phone}}", phone);
  ownerHTML = ownerHTML.replace("{{city}}", city);
  ownerHTML = ownerHTML.replace("{{state}}", state);
  ownerHTML = ownerHTML.replace("{{system}}", selectedSystem);
  ownerHTML = ownerHTML.replace("{{message}}", message);

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: process.env.SECURE_TRANSPORTER, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  // Define the email options
  let toOwnerMailOptions = {
    from: process.env.EMAIL_SERVER_USER, // sender address
    to: process.env.EMAIL_TO_BE_SENT_TO,
    subject: "Fun Factory Sensory Gym website inquiry form", // Subject line
    html: ownerHTML,
  };

  let toUserMailOptions = {
    from: process.env.EMAIL_SERVER_USER, // sender address
    to: email,
    subject: "Fun Factory Sensory Gym website inquiry form", // Subject line
    html: userHTML, // html body
  };

  // Send the email
  transporter.sendMail(toOwnerMailOptions, (error, info) => {
    if (error) {
      return res.status(400).json({ status: "fail" });
    }
    res.status(200).json({ status: "success" });
  });

  transporter.sendMail(toUserMailOptions, (error, info) => {
    if (error) {
      return res.status(400).json({ status: "fail" });
    }
    res.status(200).json({ status: "success" });
  });
};
