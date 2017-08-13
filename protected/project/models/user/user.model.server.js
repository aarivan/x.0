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

function createUser() {
    return userModel.create(user);
}

function findUserById() {

}

function findUserByUsername() {
    return userModel.findOne({usermame: username});
}

function findUserByCredentials() {

}