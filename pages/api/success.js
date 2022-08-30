const nodemailer = require("nodemailer");

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

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: process.env.SECURE_TRANSPORTER, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  transporter.sendMail({
    from: process.env.EMAIL_SERVER_USER, // sender address
    to: process.env.EMAIL_TO_BE_SENT_TO,
    subject: "Fun Factory Sensory Gym website inquiry form", // Subject line
    html: `
    <p>First Name: ${firstName}</p>
    <p>Last Name: ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>City: ${city}</p>
    <p>State: ${state}</p><p>System: ${selectedSystem}</p>
    <p>Message: ${message}</p>
    
    `, // html body
  });
  res.redirect(301, "/contact");
};
