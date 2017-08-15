/**
 * Created by abhil on 8/13/2017.
 */

(function () {
    angular
        .module('XO')
        .controller('registerController', registerController);

    function registerController(userServiceClient, $location) {
        var model = this;
        model.register = register;

        function register(username, type, firstName, lastName, password, password2, email, phone) {
            if (username === null || username === '' || typeof username === 'undefined') {
                model.error = 'Username is required';
                return;
            }

            if (password !== password2 || password === null || typeof password === 'undefined') {
                model.error = "Passwords must match";
                return;
            }

            userServiceClient
                .findUserByUsername(username)
                .then(function () {
                    model.error = "Sorry, Username has been taken";
                }, function () {
                    var newUser = {
                        username: username,
                        type: type,
                        firstName: firstName,
                        lastName: lastName,
                        password: password,
                        email: email,
                        phone: phone
                    };
                    return userServiceClient
                        .register(newUser)
                        .then(function () {
                            $location.url('/login');
                        }, function () {
                            model.error = "Sorry, unsuccessful registration. Please register again!";
                        });
                });
        }
    }
})();