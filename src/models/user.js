const mongoose = require('mongoose')
const {Schema} = mongoose;


const userSchema = new Schema({
    firstName: { 
        type: String,
        required: true
    },

    lastName: { 
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    password: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now,
        required:true
    },

    age: { 
        type: Number
    },

    birthday: {
        type: Date
    },

    descriptionUser: {
        type: String
    },

    rangeAge: {
        type: Array, "default" : []
    },


    photosUser: {
        type: Array, "default" : []
    },

    city: {
        type: String
    },

    localization: {
        type: Array, "default" : []
    },

    rangDistance: {
        type: Number    
    },

    descUser: {
        type: String
    },

    tagsUser: {
       type: [String]
    },

    profilePic: {
        type: String
    }





})

exports.User = mongoose.model('user', userSchema);