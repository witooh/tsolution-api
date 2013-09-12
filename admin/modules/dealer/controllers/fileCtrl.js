'use strict';

DealerModule
    .controller('FileListCtrl', ['$scope', '$http', '$jqGrid', '$fileService', function ($scope, $http, $jqGrid, $fileService) {
        $scope.confirmDelete = function () {
            $jqGrid.confirmRemove('#confirmModal');
        };

        $scope.remove = function () {
            $jqGrid.removeSelected(function () {
                $.gritter.add({
                    title: 'Remove download file successful',
                    text: $jqGrid.countSelectedID() + ' download file removed'
                });
            });
        };

        $scope.search = function () {
            $jqGrid.search($scope.find);
        };

        $jqGrid.make('#table', $fileService.gridConfig);
    }])

    .controller('FileAddCtrl', ['$scope', '$location', '$fileService', function ($scope, $location, $fileService) {
        $scope.content = {};

        $scope.save = function(){

            $fileService.validator(function(){

                $fileService.save($scope.content).success(function(){
                    $.gritter.add({
                        title: 'Add new download file',
                        text: $scope.content.title + ' is added'
                    });
                    $location.path(DealerModule.route.File.list);
                });
            });
        };
    }])

    .controller('FileEditCtrl', ['$scope', '$location', '$stateParams', '$fileService', 'content', function ($scope, $location, $stateParams, $fileService, content) {
        $scope.content = content;

        $scope.save = function(){
            $fileService.validator(function(){
                $fileService.update($stateParams.id, $scope.content).success(function(){
                    $.gritter.add({
                        title: 'Edit download file Successful',
                        text: $scope.content.title + ' is edited'
                    });
                    $location.path(DealerModule.route.File.list);
                });
            });
        };
    }])
;