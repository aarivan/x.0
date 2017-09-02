var mongoose = require('mongoose');

var feedbackSchema = mongoose.Schema({
    _user: {type: mongoose.Schema.ObjectId, ref: "UserModel"},
    subject: String,
    review: String,
    dateCreated: {type: Date, default: Date.now()}
}, {collection: "project_feedback"});

module.exports = feedbackSchema;