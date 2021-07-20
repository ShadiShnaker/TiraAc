var express = require("express");
var router = express.Router();

const UserModel = require("../models/User");

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});

// router.options('/createMember', async (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.send();
// })

router.get("/allMembers", async (req, res) => {
    console.log("all members");
    res.send({
        allMembers: [
            {
                name: "jhon peter",
                _id: "123",
                phone: "456",
                email: "bigboy@gaming.com",
                password: "password",
                date: "1701-12-23",
                memberType: "manager",
            },
            {
                name: "mike mikenson",
                _id: "456",
                phone: "456",
                email: "bigboy@gaming.com",
                password: "password",
                date: "1701-12-23",
                memberType: "volunteer",
            },
            {
                name: "hello world",
                _id: "789",
                phone: "456",
                email: "bigboy@gaming.com",
                password: "password",
                date: "1701-12-23",
                memberType: "manager",
            },
        ],
    });
});

//router.options("/allMembers", cors())

router.post("/createMember", async (req, res) => {
    const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        Id: req.body.id,
        Phone: req.body.phone,
        DOB: req.body.date,
        MemberType: req.body.memberType,
    });
    // res.header("Access-Control-Allow-Origin", "*");
    // res.send('Hello World');
    console.log("got a user");
    res.status(200).send();
});

module.exports = router;
