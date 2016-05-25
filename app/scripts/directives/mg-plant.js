app.directive('mgPlant',[ function(){
    return {
        restrict: 'A',
        replace: 'true',
        link: link,
        templateUrl: '/partials/directives/mg-plant.html'
    };
    function link (scope, element, attrs) {
        
        attrs.$observe('plantObj', function(model) {
            if(model !== null){
                scope.plant = angular.fromJson(model);
            }
        });
    }
}]);