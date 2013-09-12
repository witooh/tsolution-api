'use strict';

var DealerModule = angular.module('Dealer', []);

DealerModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('Dealer', {
                abstract: true,
                views: {
                    '@': {templateUrl: DealerModule.layout.main.main},
                    'left@Dealer': {templateUrl: DealerModule.layout.main.left, controller: 'LeftMenuCtrl'}
                }
            })
            .state('Dealer.announce_list', {
                url: DealerModule.route.Announce.list,
                views: {
                    'main': {
                        templateUrl: DealerModule.views.Announce.list,
                        controller: 'AnnounceListCtrl'
                    }
                }
            })
            .state('Dealer.announce_add', {
                url: DealerModule.route.Announce.add,
                views: {
                    'main': {
                        templateUrl: DealerModule.views.Announce.add,
                        controller: 'AnnounceAddCtrl'
                    },
                    'form@Dealer.announce_add': {
                        templateUrl: DealerModule.views.Announce.form
                    }
                }
            })
            .state('Dealer.announce_edit', {
                url: DealerModule.route.Announce.edit,
                resolve: {
                    content: ['$announceService', '$stateParams', function($announceService, $stateParams){
                        return $announceService.getData($stateParams.id);
                    }]
                },
                views: {
                    'main': {
                        templateUrl: DealerModule.views.Announce.edit,
                        controller: 'AnnounceEditCtrl'
                    },
                    'form@Dealer.announce_edit': {
                        templateUrl: DealerModule.views.Announce.form
                    }
                }
            })

            .state('Dealer.file_list', {
                url: DealerModule.route.File.list,
                views: {
                    'main': {
                        templateUrl: DealerModule.views.File.list,
                        controller: 'FileListCtrl'
                    }
                }
            })
            .state('Dealer.file_add', {
                url: DealerModule.route.File.add,
                views: {
                    'main': {
                        templateUrl: DealerModule.views.File.add,
                        controller: 'FileAddCtrl'
                    },
                    'form@Dealer.file_add': {
                        templateUrl: DealerModule.views.File.form
                    }
                }
            })
            .state('Dealer.file_edit', {
                url: DealerModule.route.File.edit,
                resolve: {
                    content: ['$fileService', '$stateParams', function($fileService, $stateParams){
                        return $fileService.getData($stateParams.id);
                    }]
                },
                views: {
                    'main': {
                        templateUrl: DealerModule.views.File.edit,
                        controller: 'FileEditCtrl'
                    },
                    'form@Dealer.file_edit': {
                        templateUrl: DealerModule.views.File.form
                    }
                }
            })

            .state('Dealer.request_list', {
                url: DealerModule.route.Request.list,
                views: {
                    'main': {
                        templateUrl: DealerModule.views.Request.list,
                        controller: 'RequestListCtrl'
                    }
                }
            })
            .state('Dealer.request_view', {
                url: DealerModule.route.Request.view,
                resolve: {
                    content: ['$requestService', '$stateParams', function($requestService, $stateParams){
                        return $requestService.getData($stateParams.id);
                    }]
                },
                views: {
                    'main': {
                        templateUrl: DealerModule.views.Request.view,
                        controller: 'RequestViewCtrl'
                    }
                }
            })

        ;
    }]);