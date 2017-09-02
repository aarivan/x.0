(function () {
    angular
        .module('XO')
        .controller('profileController', profileController);

    function profileController($location, currentUser, userServiceClient) {
        var model = this;
        model.userId = currentUser._id;
        model.update = update;
        model.unregister = unregister;
        model.logout = logout;

        function init() {
            renderCurrentUser(currentUser);
        }init();

        function logout() {
            userServiceClient
                .logout()
                .then(function (status) {
                    $location.url('/login');
                }, function () {
                    model.error = "Sorry, Unable to Logout!";
                });
        }

        function renderCurrentUser(user) {
            model.user = user;
        }

        function update(user) {
            userServiceClient
                .update(user._id, user)
                .then(function () {
                    model.message = "Updated Successfully!";
                }, function () {
                    model.error = "Sorry! The update was unsuccessful";
                })
        }

        function unregister(user) {
            userServiceClient.unregister(user._id)
                .then(function (status) {
                    $location.url('/');
                }, function (err) {
                    model.error = "Sorry! Your profile could not be unregistered";
                });
        }
    }
})();