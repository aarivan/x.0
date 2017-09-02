(function () {
    angular
        .module('XO')
        .controller('welcomeController', welcomeController);

    function welcomeController($location, currentUser, userServiceClient) {
        var model = this;
        model.userId = currentUser._id;
        model.logout = logout;

        function logout() {
            userServiceClient
                .logout()
                .then(function (status) {
                    $location.url('/login');
                }, function () {
                    model.error = "Sorry, Unable to Logout!";
                });
        }
    }
})();