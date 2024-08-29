require('dotenv').config({ path: 'emil.env' });

const express = require("express");
const cors = require("cors");
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const homePageRouter = require("./routers/homePageRouter");
const aboutPageRouter = require("./routers/aboutPageRouter");
const skillsRouter = require("./routers/skillsRouter");
const projectsRouter=require('./routers/projectsRouter')
const { body, validationResult } = require('express-validator');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
  
);

app.use(express.json());
app.use(express.static(`./images`)); // Adjusted to a more common directory, if needed
app.use("/home", homePageRouter);
app.use("/about", aboutPageRouter);
app.use("/skills", skillsRouter);
app.use("/projects", projectsRouter);
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: 'hkop9530@gmail.com',
    subject: `Contact Form Submission: ${subject}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Error sending email', error });
    }
    res.status(200).send({ message: 'Email sent successfully', info });
  });
});

module.exports = app;
