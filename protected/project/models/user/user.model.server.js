var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('UserModel', userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.findUserByCredentials = findUserByCredentials;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;

module.exports = userModel;

function deleteUser(userId) {
    return userModel.remove({_id: userId});
}

function updateUser(userId, newUser) {
    return userModel.update({_id: userId}, {$set: newUser})
}
function createUser(user) {
    return userModel.create(user);
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function findUserByUsername() {
    return userModel.findOne({usermame: username});
}

function findUserByCredentials(username, password) {
    return userModel.findOne({username: username, password: password});
}