(function () {
    app = angular.module('XO', ["ngRoute"]);

    app.config(['$httpProvider', function ($httpProvider){
        $httpProvider.defaults.headers.common['Accept']= 'application/json';
        $httpProvider.defaults.headers.common['app_id']= '6cea327c';
        $httpProvider.defaults.headers.common['app_key']= 'fb07fd4bf84fedebb9f4088900c4519f';
    }])
})();