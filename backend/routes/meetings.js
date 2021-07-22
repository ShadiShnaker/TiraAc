var express = require("express");
var router = express.Router();
const MeetingModel = require("../models/Meeting");
const verification = require("./verification")


router.get("/allMeetings", verification.verifyToken, async (req, res) => {
    const meetings = await MeetingModel.find();
    var response = { allMeetings : meetings};
    res.send(response);
})

router.post("/createMeeting", verification.verifyToken, verification.verifyManager, async (req, res) => {
    try {
        const meeting = new MeetingModel({
            name: req.body.name,
            coordinator: req.body.coordinator,
            date: req.body.date,
            meetingType: req.body.meetingType
        });
        await meeting.save();
        res.status(200).send("Meeting created successfully!")
    }
    catch(err) {
        res.status(500).send(err);
    }
})

router.get("/meetingContent", verification.verifyToken, async (req, res) => {
    try {
        const meeting = await MeetingModel.findById(req.query.meetingId);
        res.status(200).send(meeting);
    } catch (err){
        res.status(500).send(err);
    }
})

router.patch("/editMeeting", verification.verifyToken, verification.verifyManager, async (req, res) => {
    const update = await MeetingModel.updateOne({_id: req.body._id}, {
        $set: req.body
    });
    res.status(200).send(update);
})

router.delete("/deleteMeeting", verification.verifyToken, verification.verifyManager, async (req, res) => {
    try{
        const deletedMeeting = await MeetingModel.remove({
            _id: req.query.id
        })
        res.status(200).send(deletedMeeting);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;