app.controller('CollectionsCtrl', ['$rootScope', '$scope', '$firebaseObject', '$firebaseArray',
    function ($rootScope, $scope, $firebaseObject, $firebaseArray) {

    $scope.init = init;

    var ref = new Firebase("https://raz-edge-band.firebaseio.com");
        $scope.collections = $firebaseArray(ref);

    $scope.addCollection = function() {
        // make a unique index for each collection
        $scope.collections.$add({
            name: $scope.newCollectionName
        });

    };

    function init() {
        console.log('Hi Dashboard');
    }


}]);