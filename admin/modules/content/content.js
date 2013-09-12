'use strict';

var ContentModule = angular.module('Content', []);

ContentModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('Content', {
                abstract: true,
                views: {
                    '@': { templateUrl: ContentModule.layout.main.main },
                    'left@Content': { templateUrl: ContentModule.layout.main.left, controller: 'LeftMenuCtrl' }
                }
            })
            .state('Content.list', {
                url: ContentModule.route.list,
                views: {
                    'main': {
                        templateUrl: ContentModule.views.list,
                        controller: 'ContentListCtrl'
                    }
                }
            })
            .state('Content.add', {
                url: ContentModule.route.add,
                views: {
                    'main': {
                        templateUrl: ContentModule.views.add,
                        controller: 'ContentAddCtrl'
                    },
                    'form@Content.add': {
                        templateUrl: ContentModule.views.form
                    }
                }
            })
            .state('Content.edit', {
                url: ContentModule.route.edit,
                resolve: {
                    content: ['$contentService', '$stateParams', function($contentService, $stateParams){
                        return $contentService.getData($stateParams.id);
                    }]
                },
                views: {
                    'main': {
                        templateUrl: ContentModule.views.edit,
                        controller: 'ContentEditCtrl'
                    },
                    'form@Content.edit': {
                        templateUrl: ContentModule.views.form
                    }
                }
            })
        ;
    }]);