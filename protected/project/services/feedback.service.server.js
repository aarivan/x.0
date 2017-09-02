var app = require('../../../express');
var feedbackModel = require('../models/feedback/feedback.model.server');

app.post('/api/feedback', submitFeedback);

function submitFeedback(req, res) {
    var feedback = req.body;
    feedbackModel.submitFeedback(feedback)
        .then(function (response) {
            res.json(response);
        }, function (err) {
            res.send(err);
        })
}