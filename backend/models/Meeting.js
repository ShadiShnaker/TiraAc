const mongoonse = require("mongoose");

const Meeting = mongoonse.Schema({
    name: {
        type: String,
        require: true,
    },

    coordinator: {
        type: String,
        require: false,
    },

    date: {
        type: String,
        require: true,
    },

    meetingType: {
        type: String,
        require: true,
    },
});

module.exports = mongoonse.model("Meeting", Meeting);
