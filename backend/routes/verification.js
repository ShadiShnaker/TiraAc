const jwt = require("jsonwebtoken");
const env = require("dotenv/config");
const UserModel = require("../models/User");

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401);
        return res.send("No Access Token!");
    }

    try {
        console.log("this first");
        const verify = jwt.verify(token, process.env.SECRET);
        let user = await UserModel.findById(verify);
        req.auth = user.authID;
        req._id = verify;
        next();
    } catch (err) {
        res.status(401).send("Invalid Access Token!");
    }
};

const verifyManager = async (req, res, next) => {
    try {
        console.log("this second");
        const user = await UserModel.findById(req._id);
        if (user.memberType === "manager") {
            next();
        } else {
            console.log("this not a manager");
            res.status(401).send("Invalid Permission!");
        }
    } catch (err) {
        res.status(401).send(err);
    }
};

module.exports = { verifyToken, verifyManager };
