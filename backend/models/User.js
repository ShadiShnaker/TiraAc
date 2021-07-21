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

    id: {
        type: String,
        require: true
    },

    phone:{
        type: String,
        require: true
    },

    date:{
        type: String,
        require: true
    },

    memberType:{
        type: String,
        require: true
    },
    authID:{
        type: String,
        required: true
    }
})

module.exports = mongoonse.model('User', User)