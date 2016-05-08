app.controller('Dashboard', ['$rootScope', '$scope', '$firebaseObject', function ($rootScope, $scope, $firebaseObject) {

    $scope.init = init;

    var ref = new Firebase("https://raz-garden.firebaseio.com");
    $scope.plants = $firebaseArray(ref);

    // add new items to the array
    // the object is automatically added to our Firebase database!
    $scope.addPlant = function() {
        $scope.plants.$add({
            Type: $scope.newPlantType,
            Edible: $scope.newPlantEdible,
            Title: $scope.newPlantTitle,
            Height: $scope.newPlantHeight
        });
    };




    function init() {
        console.log('Hi Dashboard');
    }

    $scope.plants = [
        {
            "Id": "0000",
            "Type": "Veggie",
            "Edible": true,
            "Data": {
                "Title": "Basil",
                "Image": "images/basil.png",
                "Height": "12" //inches
            }
        }
    ];


}]);