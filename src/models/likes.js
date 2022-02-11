const mongoose = require('mongoose');
const { Schema } = mongoose;

const likeSchema = new Schema(
    {
        like_from: String,
        like_to: String,
        like_type: String,
        like_date: Date,
        like_active: Boolean,
    }
);

exports.Like = mongoose.model('likes', likeSchema);




