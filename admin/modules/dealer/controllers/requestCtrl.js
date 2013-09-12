'use strict';

DealerModule
    .controller('RequestListCtrl', ['$scope', '$http', '$jqGrid', '$requestService', function ($scope, $http, $jqGrid, $requestService) {

        $scope.search = function () {
            $jqGrid.search($scope.find);
        };

        $jqGrid.make('#table', $requestService.gridConfig);
    }])

    .controller('RequestViewCtrl', ['$scope', '$location', '$stateParams', '$requestService', 'content', function ($scope, $location, $stateParams, $requestService, content) {
        $scope.content = content;
    }])
;