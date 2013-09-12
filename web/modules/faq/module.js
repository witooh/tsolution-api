'use strict';

var FAQModule = angular.module('FAQ', []);

FAQModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('FAQ', {
                abstract: true,
                views: {
                    '@': { templateUrl: FAQModule.layout.main.main }
                }
            })
            .state('FAQ.list', {
                url: FAQModule.route.list,

                views: {
                    'main': {
                        templateUrl: FAQModule.views.list,
                        controller: 'FAQListCtrl'
                    }
                }
            })
            .state('FAQ.page', {
                url: FAQModule.route.page,
                resolve: {
                    content: function($faqService, $stateParams){
                        return $faqService.getData($stateParams.id);
                    }
                },
                views: {
                    'main': {
                        templateUrl: FAQModule.views.page,
                        controller: 'FAQPageCtrl'
                    }
                }
            })
        ;
    }]);