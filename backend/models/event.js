const mongoonse = require("mongoose")

const event = mongoonse.Schema({
    name:{
        type: String,
        require: true
    },

    coordinator: {
        type: String,
        require: true
    },

    date: {
        type: String,
        require: true,
    },

    summary: {
        type: String,
        require: true,
    },

    description: {
        type: String,
        require: true
    },

    img: {
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoonse.model('event', event)