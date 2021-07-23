var express = require("express");
var router = express.Router();
const env = require("dotenv/config")
const verification = require("./verification")
const nodemailer = require('nodemailer');
const UserModel = require("../models/User");


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAILPASS
  },
});

router.post("/", verification.verifyToken, verification.verifyManager, async (req, res) => {
    try {
        const emails = await UserModel.find({}, 'email').exec();
        transporter.sendMail({
            from: process.env.EMAIL, // sender address
            to: emails, // list of receivers
            subject: req.body.title, // Subject line
            text: req.body.content, // plain text body
            html: "<b>" + req.body.content + "</b>", // html body
          })
        res.status(200).send("Mail sent!")
    }
    catch(err) {
        res.status(500).send(err);
    }
})

module.exports = router;