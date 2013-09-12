'use strict';

var NewsModule = angular.module('News', []);

NewsModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('News', {
                abstract: true,
                views: {
                    '@': { templateUrl: NewsModule.layout.main.main }
                }
            })
            .state('News.list', {
                url: NewsModule.route.list,
                views: {
                    'main': {
                        templateUrl: NewsModule.views.list,
                        controller: 'NewsListCtrl'
                    }
                }
            })
            .state('News.page', {
                url: NewsModule.route.page,
                resolve: {
                    content: function($newsService, $stateParams){
                        return $newsService.getData($stateParams.id);
                    }
                },
                views: {
                    'main': {
                        templateUrl: NewsModule.views.page,
                        controller: 'NewsPageCtrl'
                    }
                }
            })
        ;
    }]);