'use strict';

App
    .controller('HomeCtrl', ['$basicAuth', function ($basicAuth) {

    }])
    .controller('UserCtrl', ['$basicAuth', function ($basicAuth) {

    }])
    .controller('LeftMenuCtrl', ['$scope', '$menu', function ($scope, $menu) {
        $scope.routeMatch = $menu.routeMatch;
    }])
;