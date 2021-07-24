var express = require("express");
var router = express.Router();
const EventModel = require("../models/event");
const verification = require("./verification")
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var bodyPareser = require("body-parser")

router.use(bodyPareser.urlencoded({ extended: true }))
router.use(bodyPareser.json())

// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });

var storage = multer.memoryStorage()
 
var upload = multer({ storage: storage });

////// get all events //////////////////////////////
router.get("/allEvents", async (req, res) => {
    const events = await EventModel.find();
    var response = { allEvents : events};
    res.type("image/png").send(response);
})


//////////// get single event ///////////////////////////////

router.get("/eventContent", async (req, res) => {
    try {
        const event = await EventModel.findById(req.query.eventId);
        res.status(200).send(event);
    } catch (err){
        res.status(500).send(err);
    }
})

//////////// Delete Event ////////////////////////////////
router.delete("/deleteEvent", verification.verifyToken, verification.verifyManager, async (req, res) => {
    try{
        const deletedEvent = await EventModel.deleteOne({
            _id: req.query.eventId
        })
        res.status(200).send(deletedEvent);
    } catch (err) {
        res.status(500).send(err);
    }
})

router.post("/createEvent", verification.verifyToken, verification.verifyManager, upload.single('image') ,async (req, res) => {
    try {
        console.log(req.body.name)
        console.log(req.body.coordinator)
        console.log(req.body.date)
        console.log(req.body.summary)
        console.log(req.body.description)
        const Event = new EventModel({
            name: req.body.name,
            coordinator: req.body.coordinator,
            date: req.body.date,
            summary: req.body.summary,
            description: req.body.description,
            img: {
                data: req.file.buffer,
                contentType: 'image/png'
            }

        });
        console.log(req.body.name)
        console.log(req.body.date)
        await Event.save();
        res.status(200).send("Event created successfully!")
    }
    catch(err) {
        console.log("error 2")
        console.log(err)
        res.status(500).send(err);
    }
})

//////////// Edit Event //////////////////////////////////////////////////////////

router.patch("/editEvent", verification.verifyToken, verification.verifyManager, upload.single('image'), async (req, res) => {
    if(req.body.image === "not set") {
        const update = await EventModel.updateOne({_id: req.body._id}, {
            $set: {
                name: req.body.name,
                coordinator: req.body.coordinator,
                date: req.body.date,
                summary: req.body.summary,
                description: req.body.description,
            }
        });
    } else {
    const update = await EventModel.updateOne({_id: req.body._id}, {
        $set: {
            name: req.body.name,
            coordinator: req.body.coordinator,
            date: req.body.date,
            summary: req.body.summary,
            description: req.body.description,
            img: {
                data: req.file.buffer,
                contentType: 'image/png'
            }
        }
    });
}
    res.status(200).send("updated an event!");
})



module.exports = router;