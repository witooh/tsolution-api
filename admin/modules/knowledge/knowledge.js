'use strict';

var KnowledgeModule = angular.module('Knowledge', []);

KnowledgeModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('Knowledge', {
                abstract: true,
                views: {
                    '@': { templateUrl: KnowledgeModule.layout.main.main },
                    'left@Knowledge': { templateUrl: KnowledgeModule.layout.main.left, controller: 'LeftMenuCtrl' }
                }
            })
            .state('Knowledge.edit', {
                url: KnowledgeModule.route.edit,
                resolve: {
                    content: function($contentService){
                        return $contentService.getData(KnowledgeModule.id);
                    }
                },
                views: {
                    'main': {
                        templateUrl: KnowledgeModule.views.edit,
                        controller: 'KnowledgeEditCtrl'
                    },
                    'form@Knowledge.edit': {
                        templateUrl: KnowledgeModule.views.form
                    }
                }
            })
        ;
    }]);