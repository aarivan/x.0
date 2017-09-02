(function () {
    angular
        .module('XO')
        .controller('generalController', generalController);

    function generalController($location, userServiceClient, currentUser, feedbackServiceClient) {
        var model = this;
        model.userId = currentUser._id;
        model.logout = logout;
        model.submitFeedback = submitFeedback;

        function init() {
            renderCurrentUser(currentUser);
        }

        init();

        function renderCurrentUser(user) {
            model.user = user;
        }

        function submitFeedback(feedback) {
            feedbackServiceClient
                .submitFeedback(feedback)
                .then(function (status) {
                    model.message = "Thank You for your feedback !";
                }, function () {
                    model.error = "Sorry! Your feedback was not recorded";
                });
        }

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