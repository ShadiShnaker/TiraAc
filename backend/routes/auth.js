var express = require("express");
var router = express.Router();
const env = require("dotenv/config");
const Realm = require("realm");
const realmApp = new Realm.App({ id: process.env.AUTHDB });
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");
const verification = require("./verification");

router.post("/logIn", async (req, res) => {
    try {
        const credentials = Realm.Credentials.emailPassword(
            req.body.email,
            req.body.password
        );
        let loggedUser = await realmApp.logIn(credentials);
        const customUserData = await loggedUser.refreshCustomData();
        const token = jwt.sign({ _id: customUserData._id }, process.env.SECRET);
        res.status(200);
        res.json({
            token: token,
        });
    } catch (err) {
        res.status(401).send("Invalid Credentials");
    }
});

router.post("/logOut", verification.verifyToken, async (req, res) => {
    try {
        await realmApp.allUsers[req.auth].logOut();
        res.status(200).send("logged out successfully!");
    } catch (err) {
        res.status(200).send(err);
    }
});

router.get("/permission", verification.verifyToken, async (req, res) => {
    const user = await UserModel.findById(req._id);
    if (user.memberType === "manager") {
        res.status(200).send("manager");
    } else {
        res.status(200).send("volunteer");
    }
});

router.post(
    "/sendPasswordReset",
    verification.verifyToken,
    async (req, res) => {
        try {
            const user = await UserModel.findById(req._id);
            console.log("this is the mail for pass reset: " + user.email);
            await realmApp.emailPasswordAuth.sendResetPasswordEmail(user.email);
            res.status(200).send();
        } catch (err) {
            res.status(500).send(err);
        }
    }
);

router.post("/resetPassword", verification.verifyToken, async (req, res) => {
    try {
        await realmApp.emailPasswordAuth.resetPassword(
            req.body.password,
            req.body.token,
            req.body.tokenId
        );
        res.status(200).send();
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
