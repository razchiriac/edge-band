app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/dashboard");
    // States setup
    $stateProvider
    // logged out states
        .state('home', {
            url: "/",
            templateUrl: "../partials/views/home.html"
        })
        // end of logged out states
        // logged in states
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "../partials/views/dashboard.html",
            controller: "Dashboard"
        });
    // end of logged in states
}]);