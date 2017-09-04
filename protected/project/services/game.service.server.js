var app = require('../../../express');
var categoriesModel = require('../models/game/categories.model.server');
var datamuse = require('datamuse');

app.get('/api/datamuseTest', datamuseTest);
// app.post('/api/createCategories', createCategories);
app.get('/api/renderCategories', renderCategories);
app.get('/api/renderWordFromCategory/:category',renderWordFromCategory);

function datamuseTest(req, res) {
    datamuse
        .request('words?ml=American Football')
        .then(function (result) {
            res.json(result);
        }, function (err) {
            res.send(err);
        });
}

function renderCategories(req, res) {
    categoriesModel.renderCategories()
        .then(function (result) {
            return res.json(result);
        }, function (err) {
            res.send(err);
        })

}

function renderWordFromCategory(req, res){
    var word_category = req.params['category'];
    var url = "words?ml="+word_category;
    datamuse
        .request(url)
        .then(function (result) {
            res.json(result);
        }, function (err) {
            res.send(err);
        });
}
// used to create the list of categories using the OXFORD API
/*function createCategories(req, res) {
 var category = req.body;
 categoriesModel.createCategories(category)
 .then(function (response){
 res.json(response);
 }, function (err) {
 res.send(err);
 });
 }*/

