const mongoonse = require("mongoose")

const User = mongoonse.Schema({
    name:{
        type: String,
        require: true
    },

    email:{
        type: String,
        require: true
    },

    Id: {
        type: String,
        require: true
    },

    Phone:{
        type: String,
        require: true
    },

    DOB:{
        type: String,
        require: true
    },

    MemberType:{
        type: String,
        require: true
    }
})

module.exports = mongoonse.model('User', User)