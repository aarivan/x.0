/**
 * Created by abhil on 8/13/2017.
 */

var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('UserModel',userSchema);

userModel.createUser = createUser;

userModel.findUserById = findUserById;
// userModel.findAllUser = findAllUser;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;

// userModel.updateUser = updateUser;
// userModel.deleteUser = deleteUser;
// userModel.updateProfile = updateProfile;
// userModel.findUserByFacebookId = findUserByFacebookId;

module.exports = userModel;

function createUser(user) {
    return userModel.create(user);
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function findUserByUsername() {
    return userModel.findOne({usermame: username});
}

function findUserByCredentials(credentials) {
    var username = credentials.username;
    var password = credentials.password;
    return userModel.findOne({username: username, password: password});
}