'use strict';

ProductModule
    .controller('BrandListCtrl', ['$scope', '$http', '$jqGrid', '$brandService', function ($scope, $http, $jqGrid, $brandService) {

        $scope.confirmDelete = function () {
            $jqGrid.confirmRemove('#confirmModal');
        };

        $scope.remove = function(){
            $jqGrid.removeSelected(function(){
                $.gritter.add({
                    title: 'Remove brand successful',
                    text: $jqGrid.countSelectedID() + ' brand(s) removed'
                });
            });
        };

        $scope.search = function(){
            $jqGrid.search($scope.find)
        };

        $jqGrid.make('#table', $brandService.gridConfig);

    }])

    .controller('BrandAddCtrl', ['$scope', '$location', '$brandService', function ($scope, $location, $brandService) {
        $scope.brand = {};

        $scope.save = function(){

            $brandService.validator(function(){

                $brandService.save($scope.brand).success(function(){
                    $.gritter.add({
                        title: 'Add new brand',
                        text: $scope.brand.name + ' is added'
                    });
                    $location.path(ProductModule.route.Brand.list);
                });
            });
        };
    }])

    .controller('BrandEditCtrl', ['$scope', '$location', '$stateParams', 'brand', '$brandService', function ($scope, $location, $stateParams, brand, $brandService) {

        $scope.brand = brand;

        $brandService.validator(function(){
            $brandService.update($stateParams.id, $scope.brand).success(function(){
                $.gritter.add({
                    title: 'Edit brand Successful',
                    text: $scope.brand.name + ' is edited'
                });
                $location.path(ProductModule.route.Brand.list);
            });
        });
    }])
;
