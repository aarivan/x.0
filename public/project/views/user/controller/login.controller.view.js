/**
 * Created by abhil on 8/13/2017.
 */

(function () {
    angular
        .module('XO')
        .controller('loginController', loginController);

    function loginController(userServiceClient, $location) {
        // console.log('Hello from Login Controller');
        var model = this;
        model.login = login;

        function login(username, password) {
            if (username === null || username === '' || typeof username === 'undefined') {
                model.error = 'Username is required';
                return;
            }
            if (password === null || password === '' || typeof password === 'undefined') {
                model.error = 'Password is required';
                return;
            }

            userServiceClient
                .login(username, password)
                .then(function () {
                    $location.url('/register');
                }, function () {
                    model.error = "Incorrect Credentials, Please register again!";
                });

        }

    }
})();