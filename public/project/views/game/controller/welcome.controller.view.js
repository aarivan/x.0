(function () {
    angular
        .module('XO')
        .controller('welcomeController', welcomeController);

    function welcomeController($location, currentUser, userServiceClient, gameServiceClient) {
        var model = this;
        model.userId = currentUser._id;
        // model.test = test;
        // model.datamuseTest = datamuseTest;
        model.logout = logout;
        model.renderCategories = renderCategories;
        model.renderWordFromCategory = renderWordFromCategory;

        function init() {
            renderCategories();
        }
        init();

        function renderCategories(){
            gameServiceClient
                .renderCategories()
                .then(function (response) {
                    model.categories = response;
                }, function () {
                    model.error = 'Categories are not available!';
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

        function renderWordFromCategory(category){
            console.log("controller category: ", category);
            gameServiceClient
                .renderWordFromCategory(category)
                .then(function (status) {
                    model.wordlist = status;
                    console.log("<<<<>>>>>", status);
                    $location.url('/newGame');
                }, function () {
                    model.error = "Sorry, unable to start game!!";
                });
        }

        function datamuseTest() {
            gameServiceClient
                .datamuseTest()
                .then(function (status) {
                    console.log('STATUS :', status)
                }, function () {
                    model.error = "Sorry, not working!!";
                });
        }

        // used to create the category list using the OXFORD API
        /*        function createCategories() {
         var url = "https://od-api.oxforddictionaries.com/api/v1/domains/en";
         gameServiceClient
         .test(url)
         .then(function (status) {
         for (str in status){
         var category = {
         categoryId: str,
         categoryName: status[str].en
         };
         gameServiceClient
         .createCategories(category)
         .then(function(status){
         console.log("Success");
         }, function(err){
         console.log('error:', err);
         })

         }
         }, function () {
         model.error = "Status is unavailable!!";
         });
         }*/
    }
})();