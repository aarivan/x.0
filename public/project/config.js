/**
 * Created by abhil on 8/13/2017.
 */

(function () {
    angular
        .module('XO')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../project/views/home/templates/home.html'
                // template : 'hello'
            })
            .when('/login', {
                templateUrl: './views/user/templates/login.view.client.html',
                controller: 'loginController',
                controllerAs: 'model'
            })
            .when('/register', {
                templateUrl: './views/user/templates/register.view.client.html',
                controller: 'registerController',
                controllerAs: 'model'
            })
            .when('/welcome', {
                templateUrl: './views/user/templates/welcome.view.client.html',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
        ;
    }

    function checkLoggedIn(userServiceClient, $q, $location) {
        var deferred = $q.defer();
        userServiceClient
            .loggedIn()
            .then(function (user) {
                if (user === '0') {
                    deferred.reject();
                    $location.url('/login');
                } else {
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }

})();