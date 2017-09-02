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
app.post('/api/login', passport.authenticate('local'), login);
app.get('/api/loggedIn', loggedIn);
app.post('/api/user/:userId', update);
app.delete('/api/unregister/:userId',unregister);
app.post('/api/logout',logout);

function logout(req, res) {
    req.logout();
    res.sendStatus(200);
}

function unregister (req, res) {
    console.log(req);
    var userId = req.params.userId;
    userModel
        .deleteUser(userId)
        .then(function (user) {
            req.logout();
            res.sendStatus(200);
        });
}

function update(req, res) {
    var userId = req.params['userId'];
    var user = req.body;
    userModel.updateUser(userId, user)
        .then(function (response) {
            res.json(response);
        },function (err) {
            res.send(err);
        });
}

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
    var user = req.user;
    res.json(user);
}

function loggedIn(req, res) {
    var user = req.user;
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