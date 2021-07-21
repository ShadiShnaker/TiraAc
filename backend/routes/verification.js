const jwt = require('jsonwebtoken');
const env = require("dotenv/config");
const UserModel = require("../models/User");

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401);
        return res.send("No Access Token!");
    }

    try {
        const verify = jwt.verify(token, process.env.SECRET);
        let user = await UserModel.findById(verify);
        req.user = user.authID;
        next();
    }
    catch (err) {
        res.status(401).send('Invalid Access Token!');
    }
}

module.exports = verifyToken