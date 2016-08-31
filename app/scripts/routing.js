app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/");
    // States setup
    $stateProvider
        .state('collections', {
            url: "/",
            templateUrl: "/partials/views/collections.html",
            controller: "CollectionsCtrl"
        })
        .state('collections.detail', {
            url: 'collections/:id',
            views: {
                'detail': {
                    templateUrl: '/partials/views/collections.detail.html',
                    controller: 'CollectionsDetailCtrl'
                }
            }
        })
}]);