var express = require('express');
var router = express.Router();

const UserModel = require("../models/User")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/createMember', async(req, res, next) => {
  const user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    Id: req.body.id,
    Phone: req.body.phone,
    DOB: req.body.date,
    MemberType: req.body.memberType
  })
  // res.header("Access-Control-Allow-Origin", "*");
  // res.send('Hello World');
  console.log("got a user")
})

module.exports = router;
