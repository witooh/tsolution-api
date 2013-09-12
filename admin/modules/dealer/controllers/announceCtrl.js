'use strict';

DealerModule
    .controller('AnnounceListCtrl', ['$scope', '$http', '$jqGrid', '$announceService', function ($scope, $http, $jqGrid, $announceService) {
        $scope.confirmDelete = function () {
            $jqGrid.confirmRemove('#confirmModal');
        };

        $scope.remove = function () {
            $jqGrid.removeSelected(function () {
                $.gritter.add({
                    title: 'Remove announcement successful',
                    text: $jqGrid.countSelectedID() + ' announcement removed'
                });
            });
        };

        $scope.search = function () {
            $jqGrid.search($scope.find);
        };

        $jqGrid.make('#table', $announceService.gridConfig);
    }])

    .controller('AnnounceAddCtrl', ['$scope', '$location', '$announceService', function ($scope, $location, $announceService) {
        $scope.content = {};

        $scope.save = function(){

            $announceService.validator(function(){

                $announceService.save($scope.content).success(function(){
                    $.gritter.add({
                        title: 'Add new announcement',
                        text: $scope.content.title + ' is added'
                    });
                    $location.path(DealerModule.route.Announce.list);
                });
            });
        };
    }])

    .controller('AnnounceEditCtrl', ['$scope', '$location', '$stateParams', '$announceService', 'content', function ($scope, $location, $stateParams, $announceService, content) {
        $scope.content = content;

        $scope.save = function(){
            $announceService.validator(function(){
                $announceService.update($stateParams.id, $scope.content).success(function(){
                    $.gritter.add({
                        title: 'Edit announcement Successful',
                        text: $scope.content.title + ' is edited'
                    });
                    $location.path(DealerModule.route.Announce.list);
                });
            });
        };
    }])
;