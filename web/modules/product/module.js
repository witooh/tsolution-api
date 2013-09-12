'use strict';

var ProductModule = angular.module('Product', []);

ProductModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('Product', {
                abstract: true,
                views: {
                    '@': { templateUrl: ProductModule.layout.main.main }
                }
            })
            .state('Product.Security_list', {
                url: ProductModule.route.Security.list,
                resolve: {
                    brandList: function($securityService){
                        return $securityService.getAllBrand('Security');
                    }
                },
                views: {
                    'main': {
                        templateUrl: ProductModule.views.Security.list,
                        controller: 'SecurityListCtrl'
                    }
                }
            })
            .state('Product.Security_list_brand', {
                url: ProductModule.route.Security.list + '/{brand}',
                resolve: {
                    brandList: function($securityService){
                        return $securityService.getAllBrand('Security');
                    }
                },
                views: {
                    'main': {
                        templateUrl: ProductModule.views.Security.list,
                        controller: 'SecurityListCtrl'
                    }
                }
            })
            .state('Product.Security_page', {
                url: ProductModule.route.Security.page,
                resolve: {
                    content: function($securityService, $stateParams){
                        return $securityService.getData($stateParams.id);
                    }
                },
                views: {
                    'main': {
                        templateUrl: ProductModule.views.Security.page,
                        controller: 'SecurityPageCtrl'
                    }
                }
            })


            //Communication
            .state('Product.Communication_list', {
                url: ProductModule.route.Communication.list,
                resolve: {
                    brandList: function($communicationService){
                        return $communicationService.getAllBrand('Communication');
                    }
                },
                views: {
                    'main': {
                        templateUrl: ProductModule.views.Communication.list,
                        controller: 'CommunicationListCtrl'
                    }
                }
            })
            .state('Product.Communication_list_brand', {
                url: ProductModule.route.Communication.list + '/{brand}',
                resolve: {
                    brandList: function($communicationService){
                        return $communicationService.getAllBrand('Communication');
                    }
                },
                views: {
                    'main': {
                        templateUrl: ProductModule.views.Communication.list,
                        controller: 'CommunicationListCtrl'
                    }
                }
            })
            .state('Product.Communication_page', {
                url: ProductModule.route.Communication.page,
                resolve: {
                    content: function($communicationService, $stateParams){
                        return $communicationService.getData($stateParams.id);
                    }
                },
                views: {
                    'main': {
                        templateUrl: ProductModule.views.Communication.page,
                        controller: 'CommunicationPageCtrl'
                    }
                }
            })
        ;
    }]);