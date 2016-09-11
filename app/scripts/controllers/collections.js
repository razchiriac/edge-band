app.controller('CollectionsCtrl', ['$rootScope', '$scope', '$firebaseObject', '$firebaseArray', '$mdDialog',
    function ($rootScope, $scope, $firebaseObject, $firebaseArray, $mdDialog) {

    $scope.init = init;

    var ref = new Firebase("https://raz-edge-band.firebaseio.com");
        $scope.collections = $firebaseArray(ref);

    $scope.addCollection = function() {
        // make a unique index for each collection
        $scope.collections.$add({
            name: $scope.newCollectionName
        });

    };

    $scope.removeCollection = function(event, collection) {
        var confirm = $mdDialog.confirm()
            .title('Are you sure to delete the record?')
            .textContent('Record will be deleted permanently.')
            .targetEvent(event)
            .ok('Yes')
            .cancel('No');
        $mdDialog.show(confirm).then(function() {
            $scope.collections.$remove(collection);
        }, function() {
            $scope.status = 'You decided to keep your record.';
        });
    };

    function init() {
        console.log('Hi Dashboard');
    }


}]);