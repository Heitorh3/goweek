const mongoose = require('mongoose');

const TweetSchema =  new mongoose.Schema({
    author: String,
    content: String,
    likes: {
        type: Number,
        defaul: 0,
    },
    createdAt: {
        type: Date,
        defaul: Date.now,
    },
});

module.exports = mongoose.model('Tweet', TweetSchema);