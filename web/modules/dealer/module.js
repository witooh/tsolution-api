'use strict';

var DealerModule = angular.module('Dealer', []);

DealerModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('Dealer', {
                abstract: true,
                views: {
                    '@': { templateUrl: DealerModule.layout.main.main }
                }
            })
            .state('Dealer.main', {
                url: DealerModule.route.announce,
                resolve: {
                    annouceList: ['$dealerService', function($dealerService){
                        return $dealerService.getList(DealerModule.announceListConfig);
                    }]
                },
                views: {
                    'main': {
                        templateUrl: DealerModule.views.main,
                        controller: 'DealerMainCtrl'
                    }
                }
            })
            .state('Dealer.view', {
                url: DealerModule.route.announceView,
                resolve: {
                    content: ['$dealerService', '$stateParams', function($dealerService, $stateParams){
                        return $dealerService.getData($stateParams.id);
                    }]
                },
                views: {
                    'main': {
                        templateUrl: DealerModule.views.view,
                        controller: 'DealerViewCtrl'
                    }
                }
            })
            .state('Dealer.support', {
                url: DealerModule.route.support,
                views: {
                    'main': {
                        templateUrl: DealerModule.views.support,
                        controller: 'DealerSupportCtrl'
                    }
                }
            })
            .state('Dealer.file', {
                url: DealerModule.route.download,
                resolve: {
                    fileList: ['$dealerService', function($dealerService){
                        return $dealerService.getFileList(DealerModule.fileListConfig);
                    }]
                },
                views: {
                    'main': {
                        templateUrl: DealerModule.views.download,
                        controller: 'DealerDownloadCtrl'
                    }
                }
            })
        ;
    }]);