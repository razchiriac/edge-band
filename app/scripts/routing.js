app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/collections");
    // States setup
    $stateProvider
        .state('collections', {
            url: "/collections",
            templateUrl: "/partials/views/collections.html",
            controller: "CollectionsCtrl"
        });
}]);