/**
 * Created by abhil on 8/13/2017.
 */

var app = require('../../../express');
var userModel = require('../models/user/user.model.server');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require("bcrypt-nodejs");

app.get('/api/user/:username', findUserByUsername);
app.post('/api/register', register);

function findUserByUsername(req, res) {
    var username = req.query['username'];
    userModel.findUserByUsername(username)
        .then(function (user) {
            res.json(user);
        }, function (err) {
            res.send(err);
        });
}

function register(req, res){
    var newUser = req.body;
    userModel.createUser(newUser)
        .then(function (user) {
            res.json(user);
        }, function (err){
            res.send(err);
        })
}