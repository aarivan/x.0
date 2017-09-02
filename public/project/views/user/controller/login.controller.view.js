(function () {
    angular
        .module('XO')
        .controller('loginController', loginController);

    function loginController(userServiceClient, $location) {

        var model = this;
        model.login = login;

        function login(username, password) {
            console.log("Inside Login Controller");
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
                .then(function (found) {
                    if(found !== null){
                        $location.url('/welcome');
                    }else{
                        model.error = "Sorry! Credentials are wrong";
                    }
                },function () {
                    model.error = "Sorry! You have entered the wrong credentials, Try again";
                });
        }
    }
})();