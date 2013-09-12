'use strict';

var ProductModule = angular.module('Product', []);

ProductModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('products', {
                abstract: true,
                views: {
                    '@': {templateUrl: ProductModule.layout.main.main},
                    'left@products': {templateUrl: ProductModule.layout.main.left, controller: 'LeftMenuCtrl'}
                }
            })
            .state('products.brand_list', {
                url: ProductModule.route.Brand.list,
                views: {
                    'main': {
                        templateUrl: ProductModule.views.Brand.list,
                        controller: 'BrandListCtrl'
                    }
                }
            })
            .state('products.brand_add', {
                url: ProductModule.route.Brand.add,
                views: {
                    'main': {
                        templateUrl: ProductModule.views.Brand.add,
                        controller: 'BrandAddCtrl'
                    },
                    'form@products.brand_add': {
                        templateUrl: ProductModule.views.Brand.form
                    }
                }
            })
            .state('products.brand_edit', {
                url: ProductModule.route.Brand.edit,
                resolve: {
                    brand: function($brandService, $stateParams){
                        return $brandService.getData($stateParams.id);
                    }
                },
                views: {
                    'main': {
                        templateUrl: ProductModule.views.Brand.edit,
                        controller: 'BrandEditCtrl'
                    },
                    'form@products.brand_edit': {
                        templateUrl: ProductModule.views.Brand.form
                    }
                }
            })

            .state('products.series_list', {
                url: ProductModule.route.Series.list,
                resolve: {
                    brandList: function($brandService){
                        return $brandService.getAll();
                    }
                },
                views: {
                    'main': {
                        templateUrl: ProductModule.views.Series.list,
                        controller: 'SeriesListCtrl'
                    }
                }
            })
            .state('products.series_add', {
                url: ProductModule.route.Series.add,
                resolve: {
                    brandList: function($brandService){
                        return $brandService.getAll();
                    }
                },
                views: {
                    'main': {
                        templateUrl: ProductModule.views.Series.add,
                        controller: 'SeriesAddCtrl'
                    },
                    'form@products.series_add': {
                        templateUrl: ProductModule.views.Series.form
                    }
                }
            })
            .state('products.series_edit', {
                url: ProductModule.route.Series.edit,
                resolve: {
                    brandList: function($brandService){
                        return $brandService.getAll();
                    },
                    series: function($seriesService, $stateParams){
                        return $seriesService.getData($stateParams.id);
                    }
                },
                views: {
                    'main': {
                        templateUrl: ProductModule.views.Series.edit,
                        controller: 'SeriesEditCtrl'
                    },
                    'form@products.series_edit': {
                        templateUrl: ProductModule.views.Series.form
                    }
                }
            })

            .state('products.product_list', {
                url: ProductModule.route.Product.list,
                resolve: {
                    _brandList: function($brandService){
                        return $brandService.getAll();
                    },
                    _seriesList: function($seriesService){
                        return $seriesService.getAll();
                    }
                },
                views: {
                    'main': {
                        templateUrl: ProductModule.views.Product.list,
                        controller: 'ProductListCtrl'
                    }
                }
            })
            .state('products.product_add', {
                url: ProductModule.route.Product.add,
                resolve: {
                    _brandList: function($brandService){
                        return $brandService.getAll();
                    },
                    _seriesList: function($seriesService){
                        return $seriesService.getAll();
                    }
                },
                views: {
                    'main': {
                        templateUrl: ProductModule.views.Product.add,
                        controller: 'ProductAddCtrl'
                    },
                    'form@products.product_add': {
                        templateUrl: ProductModule.views.Product.form
                    }
                }
            })
            .state('products.product_edit', {
                url: ProductModule.route.Product.edit,
                resolve: {
                    _product: function($productService, $stateParams){
                        return $productService.getData($stateParams.id);
                    }
                },
                views: {
                    'main': {
                        templateUrl: ProductModule.views.Product.edit,
                        controller: 'ProductEditCtrl'
                    },
                    'form@products.product_edit': {
                        templateUrl: ProductModule.views.Product.form
                    }
                }
            })
        ;
    }]);