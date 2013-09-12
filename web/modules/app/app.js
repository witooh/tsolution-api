'use strict';

var App = angular.module('App', ['ui.state', 'infinite-scroll', 'Contact', 'Reference', 'AboutUs', 'Event', 'News', 'Product', 'FAQ', 'Knowledge','Login', 'Dealer']).
    config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider
            .when('', '/')
            .otherwise(App.route.error404);

        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    '@': {templateUrl: App.layout.main.main}
                }
            })
            .state('app.home', {
                url: App.route.home,
                resolve: {
                    newsList: ['$newsService',function($newService){
                        return $newService.getList({
                            rows: 8,
                            page: 1,
                            sidx: 'updated_at',
                            sord: 'desc',
                            category_id: 1
                        });
                    }],
                    eventList: ['$eventService', function($eventService){
                        return $eventService.getList({
                            rows: 3,
                            page: 1,
                            sidx: 'updated_at',
                            sord: 'desc',
                            category_id: 2
                        });
                    }],
                    knowledgeList: ['$knowledgeService', function($knowledgeService){
                        return $knowledgeService.getList({
                            rows: 3,
                            page: 1,
                            sidx: 'updated_at',
                            sord: 'desc',
                            category_id: 3
                        });
                    }],
                    faqList: ['$faqService', function($faqService){
                        return $faqService.getList({
                            rows: 3,
                            page: 1,
                            sidx: 'updated_at',
                            sord: 'desc',
                            category_id: 4
                        });
                    }]
                },
                views: {
                    'main': {
                        templateUrl: App.views.home,
                        controller: 'HomeCtrl'
                    }
                }
            })
            .state('error404', {
                url: App.route.error404,
                views: {
                    '@': {
                        templateUrl: App.views.error404
                    }
                }
            }).state('error500', {
                url: App.route.error500,
                views: {
                    '@': {
                        templateUrl: App.views.error500
                    }
                }
            });

        $httpProvider.responseInterceptors.push(function($timeout, $q, $location) {
            return function(promise) {
                return promise.then(function(successResponse) {
                    return successResponse;
                }, function(errorResponse) {
                    switch (errorResponse.status) {
                        case 404:
                            $location.path(App.route.error404);
                            break;
                        case 500:
                            $location.path(App.route.error500);
                            break;
                    }
                    return $q.reject(errorResponse);
                });
            };
        });
//        $locationProvider.html5Mode(true);


    }]).
    run(['$rootScope', '$location', '$menu', function ($rootScope, $location, $menu) {
        $rootScope.routeMatch = $menu.routeMatch;

//        $rootScope.$broadcast('checkauth');
    }]);