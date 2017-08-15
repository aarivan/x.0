/**
 * Created by abhil on 8/13/2017.
 */

var app = require('../../../express');
var userModel = require('../models/user/user.model.server');
var passport = require('passport');
// var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require("bcrypt-nodejs");
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(localStrategy));
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

app.get('/api/user/:username', findUserByUsername);
app.post('/api/register', register);
app.post('/api/login', login);
app.get('/api/loggedIn', loggedIn);

function findUserByUsername(req, res) {
    var username = req.query['username'];
    userModel.findUserByUsername(username)
        .then(function (user) {
            res.json(user);
        }, function (err) {
            res.send(err);
        });
}

function register(req, res) {
    var newUser = req.body;
    userModel.createUser(newUser)
        .then(function (user) {
            res.json(user);
        }, function (err) {
            res.send(err);
        })
}

function login(req, res) {
    var credentials = req.body;
    userModel.findUserByCredentials(credentials)
        .then(function (user) {
            res.json(user);
        }, function (err) {
            res.send(err);
        })
}

function loggedIn(req, res) {
    var user = req.user;
    console.log(user);
    if (req.isAuthenticated()) {
        res.json(user);
    } else {
        res.send('0');
    }
}

function localStrategy(username, password, done) {
    userModel
        .findUserByCredentials(username, password)
        .then(function (user) {
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        }, function (error) {
            done(error, false);
        });
}

function serializeUser(user, done) {
    done(null, user);
}

function deserializeUser(user, done) {
    userModel
        .findUserById(user._id)
        .then(
            function(user){
                done(null, user);
            },
            function(err){
                done(err, null);
            }
        );
}