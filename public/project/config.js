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
                templateUrl: './views/game/templates/welcome.view.client.html',
                controller: 'welcomeController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/profile', {
                templateUrl: './views/user/templates/profile.view.client.html',
                controller: 'profileController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/newGame', {
                templateUrl: './views/game/templates/options/newgame.view.client.html',
                controller: 'welcomeController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/rules', {
                templateUrl: './views/general/templates/rules.view.client.html',
                controller: 'generalController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/contact', {
                templateUrl: './views/general/templates/contact.view.client.html',
                controller: 'generalController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            });
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