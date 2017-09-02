var mongoose = require('mongoose');
var feedbackSchema = require('./feedback.schema.server');
var feedbackModel = mongoose.model('FeedbackModel', feedbackSchema);

feedbackModel.submitFeedback = submitFeedback;

module.exports = feedbackModel;

function submitFeedback(feedback) {
    return feedbackModel.create(feedback);
}