(function () {
    angular
        .module('XO')
        .service('userServiceClient', userServiceClient);

    function userServiceClient($http) {
        this.login = login;
        this.register = register;
        this.findUserByUsername = findUserByUsername;
        this.loggedIn = loggedIn;
        this.update = update;
        this.unregister = unregister;
        this.logout = logout;

        function logout() {
            var url = "/api/logout";
            return $http.post(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function unregister(userId) {
            var url = "/api/unregister/" + userId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function update(userId, user) {
            var url = "/api/user/" + userId;
            return $http.post(url, user)
                .then(function (response) {
                    return response.data;
                });
        }

        function login(username, password) {
            var url = "/api/login";
            var credentials = {
                username: username,
                password: password
            };
            return $http.post(url, credentials)
                .then(function (response) {
                    console.log(response);
                    return response.data;
                });
        }

        function findUserByUsername(username) {
            var url = "/api/user?username=" + username;
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
                    console.log(response);
                    return response.data;
                });
        }
    }


})();
