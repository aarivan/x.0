(function () {
    angular
        .module('XO')
        .service('feedbackServiceClient', feedbackServiceClient);

    function feedbackServiceClient($http) {
        this.submitFeedback = submitFeedback;

        function submitFeedback(feedback) {
            var url = "/api/feedback";
            return $http.post(url, feedback)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
