app.controller('CollectionsDetailCtrl', ['$rootScope', '$scope', '$firebaseObject', '$firebaseArray', '$stateParams', '$mdDialog',
    function ($rootScope, $scope, $firebaseObject, $firebaseArray, $stateParams, $mdDialog) {

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
        $scope.removeBand = function(event, band) {
            var confirm = $mdDialog.confirm()
                .title('Are you sure to delete the record?')
                .textContent('Record will be deleted permanently.')
                .targetEvent(event)
                .ok('Yes')
                .cancel('No');
            $mdDialog.show(confirm).then(function() {
                $scope.collectionBands.$remove(band);
            }, function() {
                $scope.status = 'You decided to keep your record.';
            });
        };

    }]);