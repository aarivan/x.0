var mongoose = require('mongoose');

var categoriesSchema = mongoose.Schema({
    categoryId: {type: String, unique: true},
    categoryName: {type: String, unique: true},
    dateCreated: {type: Date, default: Date.now()}
}, {collection: "project_categories"});

module.exports = categoriesSchema ;