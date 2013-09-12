'use strict';

ProductModule
    .controller('SeriesListCtrl', ['$scope', '$jqGrid', '$seriesService', 'brandList', function ($scope, $jqGrid, $seriesService, brandList) {

        $scope.brandList = brandList;

        $scope.confirmDelete = function () {
            $jqGrid.confirmRemove('#confirmModal');
        };

        $scope.remove = function(){
            $jqGrid.removeSelected(function(){
                $.gritter.add({
                    title: 'Remove series successful',
                    text: $jqGrid.countSelectedID() + ' series removed'
                });
            });
        };

        $scope.search = function(){
            $jqGrid.search($scope.find)
        };

        $jqGrid.make('#table', $seriesService.gridConfig);

    }])

    .controller('SeriesAddCtrl', ['$scope', '$location', '$validator', '$seriesService', 'brandList', function ($scope, $location, $validator, $seriesService, brandList) {
        $scope.series = {};
        $scope.brandList = brandList;

        $scope.save = function(){
            $seriesService.validator(function (form) {
                $seriesService.save($scope.series).success(function(){
                    $.gritter.add({
                        title: 'Add new series',
                        text: $scope.series.name + ' is added'
                    });
                    $location.path(ProductModule.route.Series.list);
                });
            });
        };
    }])

    .controller('SeriesEditCtrl', ['$scope', '$location', '$validator', '$stateParams', '$seriesService', 'brandList', 'series', function ($scope, $location, $validator, $stateParams, $seriesService, brandList, series) {

        $scope.series = series;
        $scope.brandList = brandList;

        $scope.save = function(){
            $seriesService.validator(function(){
                $seriesService.update($stateParams.id, $scope.series).success(function(){
                    $.gritter.add({
                        title: 'Edit series Successful',
                        text: $scope.series.name + ' is edited'
                    });
                    $location.path(ProductModule.route.Series.list);
                });
            });
        };
    }])
;
