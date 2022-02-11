const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        email: {
            unique:true,
            type:String,
            required:true,
            trim:true,
        },
        password: {
            type:String,
            required:true
        },
        username: {
            type:String,
            required:true
        },
        lastname: {
            type:String,
            required:false
        },
        nickname: {
            type:String,
            required:true
        },
        age: {
            type:Number,
            required:true
        },
        maxAge: {
            type:Number,
            required:true
        },
        minAge: {
            type:Number,
            required:true
        },
        ubi_longitude: {
            type:Number,
            required:false
        },
        ubi_latitude: {
            type:Number,
            required:false
        },
        location_range: {
            type:Number,
            required:false
        },
        bio: {
            type:String,
            required:true
        },
        tags: [{
            tagName:String
        }],
        photo: [{
            photo_url:String,
            photo_profile:Boolean,
            photo_order:Number,
            photo_title:String
        }],
        confirmedProfile: {
            type:Boolean
        },
        userSexSelection: {
            type:String,
            required:true
        },
        sexOrientation: {
            type:String,
            required:true
        },
        relation: {
            type:String
        },
        statusMember: {
            type:String
        },
        active: {
            type:Boolean
        },
        blovkUsers: [{
            userId:String,
            reason:String
        }],
    }
);

exports.User = mongoose.model('users', userSchema);











