app.controller('Dashboard', ['$rootScope', '$scope', '$firebaseObject', '$firebaseArray', '$mdDialog', function ($rootScope, $scope, $firebaseObject, $firebaseArray, $mdDialog) {

    $scope.init = init;

    var ref = new Firebase("https://raz-garden.firebaseio.com");
    $scope.plants = $firebaseArray(ref);

    $scope.removePlant = function(plant, ev) {
        var confirm = $mdDialog.confirm()
            .title('Would you like to delete this plant?')
            .textContent('This action CAN NOT be undone!')
            .ariaLabel('Are you sure?')
            .targetEvent(ev)
            .ok('Yep!')
            .cancel('Nooo!');
        $mdDialog.show(confirm).then(function() {
            $scope.plants.$remove(plant).then(function(ref) {
                ref.key() === plant.$id; // true
            });
        }, function() {
            return;
        });
    };

    $scope.showAdd = function (ev) {
        $mdDialog.show({
            controller: AddDialogController,
            templateUrl: '/partials/templates/addDialog.tmpl.html',
            targetEvent: ev,
            clickOutsideToClose: true,
            locals: {
                plants: $scope.plants
            }
        });
        function AddDialogController($timeout, $q, $scope, plants) {

            // list of `state` value/display objects
            $scope.states        = loadAll();
            $scope.querySearch   = querySearch;

            // ******************************
            // Internal methods
            // ******************************

            /**
             * Search for states... use $timeout to simulate
             * remote dataservice call.
             */
            function querySearch (query) {
                return query ? $scope.states.filter( createFilterFor(query) ) : $scope.states;
            }

            /**
             * Build `states` list of key/value pairs
             */
            function loadAll() {
                var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

                return allStates.split(/, +/g).map( function (state) {
                    return {
                        value: state.toLowerCase(),
                        display: state
                    };
                });
            }

            /**
             * Create filter function for a query string
             */
            function createFilterFor(query) {
                var lowercaseQuery = angular.lowercase(query);

                return function filterFn(state) {
                    return (state.value.indexOf(lowercaseQuery) === 0);
                };

            }

            $scope.plants = plants;
            // add new items to the array
            // the object is automatically added to our Firebase database!
            $scope.addPlant = function() {
                $scope.plants.$add({
                    Type: $scope.newPlantType,
                    Edible: $scope.newPlantEdible,
                    Title: $scope.newPlantTitle,
                    Height: $scope.newPlantHeight,
                    ImageUrl: '../../images/basil.png'
                });
                $scope.hide();
            };
            $scope.hide = function () {
                $mdDialog.hide();
            };
        }
    };


    function init() {
        console.log('Hi Dashboard');
    }


}]);