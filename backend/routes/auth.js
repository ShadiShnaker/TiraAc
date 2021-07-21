var express = require("express");
var router = express.Router();
const env = require("dotenv/config")
const Realm = require("realm");
const realmApp = new Realm.App({ id: process.env.AUTHDB });
const jwt = require('jsonwebtoken');
const verifyToken = require("./verification")


router.post("/logIn", async (req, res) => {
    try {
        const credentials = Realm.Credentials.emailPassword(
            req.body.email,
            req.body.password
          );
        let loggedUser = await realmApp.logIn(credentials);
        const customUserData = await loggedUser.refreshCustomData()
        const token = jwt.sign({_id: customUserData._id}, process.env.SECRET);
        res.status(200);
        res.json({
            token: token
        })
       
    } catch (err) {
        res.status(401).send("Invalid Credentials");
    }

})

router.post("/logOut", verifyToken, async (req, res) => {
    try{
        await realmApp.allUsers[req.user].logOut();
        res.status(200).send("logged out successfully!");
    } catch (err) {
        res.status(401).send(err);
    }
})

module.exports = router;