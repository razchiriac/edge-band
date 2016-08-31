app.controller('CollectionsDetailCtrl', ['$rootScope', '$scope', '$firebaseObject', '$firebaseArray', '$stateParams',
    function ($rootScope, $scope, $firebaseObject, $firebaseArray, $stateParams) {

        var ref = new Firebase("https://raz-edge-band.firebaseio.com");

        $scope.collection = $firebaseObject(ref.child($stateParams.id));
        $scope.collectionBands = $firebaseArray(ref.child($stateParams.id).child('bands'));

        $scope.addBand = function() {
            // make a unique index for each collection
            $scope.collectionBands.$add({
                name: $scope.newBandName,
                knob1: $scope.nbKnob1,
                knob2: $scope.nbKnob2,
                knob3: $scope.nbKnob3
            });

        };

    }]);