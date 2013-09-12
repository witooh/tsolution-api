'use strict';

var FAQModule = angular.module('FAQ', []);

FAQModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('FAQ', {
                abstract: true,
                views: {
                    '@': { templateUrl: FAQModule.layout.main.main },
                    'left@FAQ': { templateUrl: FAQModule.layout.main.left, controller: 'LeftMenuCtrl' }
                }
            })
            .state('FAQ.edit', {
                url: FAQModule.route.edit,
                resolve: {
                    content: function($contentService){
                        return $contentService.getData(FAQModule.id);
                    }
                },
                views: {
                    'main': {
                        templateUrl: FAQModule.views.edit,
                        controller: 'FAQEditCtrl'
                    },
                    'form@FAQ.edit': {
                        templateUrl: FAQModule.views.form
                    }
                }
            })
        ;
    }]);