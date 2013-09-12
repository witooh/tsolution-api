'use strict';

ProductModule
    .controller('ProductListCtrl', ['$scope', '$jqGrid', '$productService', '_brandList', '_seriesList', function ($scope, $jqGrid, $productService, _brandList, _seriesList) {

        $scope.seriesList = _seriesList;
        $scope.brandList = _brandList;

        $scope.confirmDelete = function () {
            $jqGrid.confirmRemove('#confirmModal');
        };

        $scope.remove = function(){
            $jqGrid.removeSelected(function(){
                $.gritter.add({
                    title: 'Remove product successful',
                    text: $jqGrid.countSelectedID() + ' Product(s) removed'
                });
            });
        };

        $scope.search = function(){
            $jqGrid.search($scope.find)
        };

        $jqGrid.make('#table', $productService.gridConfig);

    }])

    .controller('ProductAddCtrl', ['$scope', '$location', '$validator', '_brandList', '_seriesList', '$productService', function ($scope, $location, $validator, _brandList, _seriesList, $productService) {

        $scope.brandList = _brandList;
        $scope.seriesList = _seriesList;
        $scope.product = {};

        $scope.removeImg = function(){
            $scope.product.img = "";
            $('#preview_img').attr('data-src', 'holder.js/200x150/text:No Image');
            Holder.run();
        };


        $scope.save = function(){
            $productService.validator(function(){
                $productService.save($scope.product).success(function(){
                    $.gritter.add({
                        title: 'Add new product',
                        text: $scope.product.name + ' is added'
                    });
                    $location.path(ProductModule.route.Product.list);
                });
            });
        };
    }])

    .controller('ProductEditCtrl', ['$scope', '$http', '$location', '$validator', '$stateParams', '_product', '$productService', function ($scope, $http, $location, $validator, $stateParams, _product, $productService) {

        $scope.brandList = _product[0];
        $scope.seriesList = _product[1];
        $scope.product = $productService.initialProductData(_product[0], _product[1], _product[2]);

        $scope.removeImg = function(){
            $scope.product.img = '';
            $('#preview_img').attr('data-src', 'holder.js/200x150/text:No Image');
            Holder.run();
        };

        $scope.save = function(){
            $productService.validator(function(){
                $productService.update($stateParams.id, $scope.product).success(function(){
                    $.gritter.add({
                        title: 'Edit product Successful',
                        text: $scope.product.name + ' is edited'
                    });
                    $location.path(ProductModule.route.Product.list);
                });
            });
        };
    }])
;
