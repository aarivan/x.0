/**
 * Created by abhil on 8/13/2017.
 */

(function(){
    angular
        .module('XO')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '../project/views/home/templates/home.html'
                // template : 'hello'
            })
            .when('/login', {
                templateUrl : './views/user/templates/login.view.client.html',
                controller : 'loginController',
                controllerAs: 'model'
            })
            .when('/register', {
                templateUrl : './views/user/templates/register.view.client.html',
                controller : 'registerController',
                controllerAs: 'model'
            })
            .when('/profile', {
                templateUrl : './views/user/templates/profile.view.client.html'
            })
        ;
    }

})();