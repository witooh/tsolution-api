'use strict';
App.
    factory('$menu', ['$rootScope', function ($rootScope) {
        var leftMenuService = {};
        leftMenuService.routeMatch = function (route) {
            return window.location.hash.match(route);
        }

        leftMenuService.broadcastItem = function () {
            $rootScope.$broadcast('handleBroadcast');
        };

        return leftMenuService;
    }]);