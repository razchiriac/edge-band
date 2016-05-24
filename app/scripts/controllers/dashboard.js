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
            autoWrap: false,
            hasBackdrop: false,
            locals: {
                plants: $scope.plants
            }
        });
        function AddDialogController($scope, plants) {
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