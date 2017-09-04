var mongoose = require('mongoose');
var categoriesSchema = require('./categories.schema.server');
var categoriesModel = mongoose.model('CategoriesModel', categoriesSchema);

// categoriesModel.createCategories = createCategories;
categoriesModel.renderCategories = renderCategories;

module.exports = categoriesModel;

function renderCategories() {
    return categoriesModel.find();
}

// used to create the list of categories using the OXFORD API
/*
 function createCategories(category) {
 return categoriesModel.create(category);
 }*/

