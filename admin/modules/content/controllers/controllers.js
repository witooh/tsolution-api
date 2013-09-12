'use strict';

ContentModule
    .controller('ContentListCtrl', ['$scope', '$http', '$jqGrid', '$contentService', function ($scope, $http, $jqGrid, $contentService) {
        $scope.confirmDelete = function () {
            $jqGrid.confirmRemove('#confirmModal');
        };

        $scope.remove = function () {
            $jqGrid.removeSelected(function () {
                $.gritter.add({
                    title: 'Remove content successful',
                    text: $jqGrid.countSelectedID() + ' content(s) removed'
                });
            });
        };

        $scope.search = function () {
            $jqGrid.search($scope.find);
        };

        $jqGrid.make('#table', $contentService.gridConfig);
    }])

    .controller('ContentAddCtrl', ['$scope', '$location', '$contentService', function ($scope, $location, $contentService) {
        $scope.content = {};

        $scope.save = function(){

            $contentService.validator(function(){

                $contentService.save($scope.content).success(function(){
                    $.gritter.add({
                        title: 'Add new content',
                        text: $scope.content.title + ' is added'
                    });
                    $location.path(ContentModule.route.list);
                });
            });
        };
    }])

    .controller('ContentEditCtrl', ['$scope', '$location', '$stateParams', '$contentService', 'content', function ($scope, $location, $stateParams, $contentService, content) {
        $scope.content = content;

        if($scope.content.category_id > 2){
            $scope.showCategory = true;
        }

        $scope.save = function(){
            $contentService.validator(function(){
                $contentService.update($stateParams.id, $scope.content).success(function(){
                    $.gritter.add({
                        title: 'Edit content Successful',
                        text: $scope.content.title + ' is edited'
                    });
                    $location.path(ContentModule.route.list);
                });
            });
        };
    }])
;