app.controller('CollectionsCtrl', ['$rootScope', '$scope', '$firebaseObject', '$firebaseArray',
    function ($rootScope, $scope, $firebaseObject, $firebaseArray) {

    $scope.init = init;

    var ref = new Firebase("https://raz-edgeband.firebaseio.com");
    $scope.collections = $firebaseArray(ref);



    function init() {
        console.log('Hi Dashboard');
    }


}]);