"use strict";
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require("dotenv").config();
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files (HTML/CSS/JS)

// Root route (required to fix "Cannot GET /")
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Replace with your HTML file
});

// Mailjet Transporter (keep your existing code)
const transporter = nodemailer.createTransport({
  host: 'in-v3.mailjet.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER_API,
    pass: process.env.PASS
  }
});

// Handle POST request from form (keep your existing code)
app.post('/send-email', (req, res) => {
  const { contact__name, contact__email, contact__message } = req.body;

  const mailOptions = {
    from: 'Juan-Linares-Portfolio@juan-linares.com',
    to: 'juanlinares821@yahoo.com',
    subject: 'New Contact Form Message',
    text: `Name: ${contact__name}\nEmail: ${contact__email}\nMessage: ${contact__message}`,
    html: `<p><strong>Name:</strong> ${contact__name}</p>
           <p><strong>Email:</strong> ${contact__email}</p>
           <p><strong>Message:</strong> ${contact__message}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Something went wrong.');
    } else {
      console.log('Email sent:', info.response);
      return res.redirect('/?success=true');
    }
  });
});

// Export for Vercel (critical change)
module.exports = app;