(function () {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();

(function () {
    angular
        .module('XO')
        .service('gameServiceClient', gameServiceClient);


    function gameServiceClient($http) {
        this.test = test;

        this.datamuseTest = datamuseTest;
        // this.createCategories = createCategories;
        this.renderCategories = renderCategories;
        this.renderWordFromCategory = renderWordFromCategory;

        function test(url) {
            console.log("GAME.SERVICE.CLIENT - URL:", url);
            return $http
                .get(url)
                .then(function (res) {
                    console.log("GAME.SERVICE.CLIENT:", res.data.results);

                    return res.data.results;
                });
        }

        function datamuseTest() {
            return $http
                .get('/api/datamuseTest')
                .then(function (res) {
                    return res.data;
                });
        }

        function renderCategories(){
            return $http.get('/api/renderCategories')
                .then(function (res){
                    return res.data;
                });
        }

        function renderWordFromCategory(category) {
            var url = '/api/renderWordFromCategory/'+category;
            console.log("SERVICE CLIENT :", url);
            return $http
                .get(url)
                .then(function (res){
                    console.log("<<<<<<res>>>>>", res);
                    return res.data;
                })
        }

        // used to create the list of categories using the OXFORD API
        /*        function createCategories(category) {
         return $http
         .post('/api/createCategories',category)
         .then(function(res){
         return res.data;
         });
         }*/
    }
})();