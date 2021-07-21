var express = require("express");
var router = express.Router();
const env = require("dotenv/config")
const Realm = require("realm");
const realmApp = new Realm.App({ id: process.env.AUTHDB });
const verifyToken = require("./verification")

const UserModel = require("../models/User");

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});

// router.options('/createMember', async (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send();
// })

router.get("/allMembers", verifyToken, async (req, res) => {
    console.log("all members");
    const users = await UserModel.find();
    var response = { allMembers : users};
    res.send(response);
});

//router.options("/allMembers", cors())

router.post("/createMember", async (req, res) => {
    try {
        await realmApp.emailPasswordAuth.registerUser(req.body.email, req.body.password);
        const credentials = Realm.Credentials.emailPassword(
            req.body.email,
            req.body.password
          );
        const authUser = await realmApp.logIn(credentials)
        console.log("created a user: " + authUser.id);
        const user = new UserModel({
            name: req.body.name,
            email: req.body.email,
            id: req.body.id,
            phone: req.body.phone,
            date: req.body.date,
            memberType: req.body.memberType,
            authID: authUser.id
        });
        await user.save();
        await authUser.logOut();
        res.status(200).send()
    }
    catch(err) {
        res.status(500);
        res.send(err);
    }
});

router.get("/memberContent", async (req, res) => {
    console.log("member id: " + req.query.memberId)
    try {
        const user = await UserModel.findById(req.query.memberId);
        res.status(200);
        res.send(user);
    } catch (err){
        res.status(500);
        res.send(err);
    }
})

router.patch("/editMember", async (req, res) => {
    console.log("member id: " + req.body._id)
    try {
        const update = await UserModel.updateOne({_id: req.body._id}, {
            $set: req.body
        });
        res.status(200);
        res.send(update);
    } catch (err) {
        res.status(500);
        res.send(err);
    }
})

module.exports = router;
