app.directive('grNavbar',['$mdSidenav', function($mdSidenav){
    return {
        restrict: 'A',
        replace: 'true',
        link: link,
        templateUrl: '/partials/directives/gr-navbar.html'
    };
    function link ($scope, element, attrs) {
        console.log('grNavbar');
    }
}]);