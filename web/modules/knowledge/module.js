'use strict';

var KnowledgeModule = angular.module('Knowledge', []);

KnowledgeModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('Knowledge', {
                abstract: true,
                views: {
                    '@': { templateUrl: KnowledgeModule.layout.main.main }
                }
            })
            .state('Knowledge.list', {
                url: KnowledgeModule.route.list,
                views: {
                    'main': {
                        templateUrl: KnowledgeModule.views.list,
                        controller: 'KnowledgeListCtrl'
                    }
                }
            })
            .state('Knowledge.page', {
                url: KnowledgeModule.route.page,
                resolve: {
                    content: function($knowledgeService, $stateParams){
                        return $knowledgeService.getData($stateParams.id);
                    }
                },
                views: {
                    'main': {
                        templateUrl: KnowledgeModule.views.page,
                        controller: 'KnowledgePageCtrl'
                    }
                }
            })
        ;
    }]);