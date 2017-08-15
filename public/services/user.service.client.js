/**
 * Created by abhil on 8/13/2017.
 */

(function (){
    angular
        .module('XO')
        .service('userServiceClient',userServiceClient);

    function userServiceClient($http) {
        this.login = login;
        this.register = register;
        this.findUserByUsername = findUserByUsername;
        this.loggedIn = loggedIn;

        function login(username, password) {
            var url = "/api/login";
            var credentials = {
                username : username,
                password : password
            }
            return $http.post(url, credentials)
                .then(function(response){
                    return response.data;
                });
        }

        function findUserByUsername(username) {
            var url = "/api/user?username="+username;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function register(newUser) {
            var url = "/api/register";
            return $http.post(url, newUser)
                .then(function (response) {
                    return response.data;
                });
        }

        function loggedIn() {
            var url = "/api/loggedIn";
            return $http.get(url)
                .then(function (response) {
                    console.log(response.data);
                    return response.data;
                });
        }
    }


})();
