'use strict';

var App = angular.module('App', ['ui.state', 'Login', 'User', 'Product', 'File', 'Content', 'Knowledge', 'FAQ', 'Reference', 'AboutUs', 'Dealer']).
    config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider
            .otherwise(App.route.error404);

        $stateProvider
            .state('start', {
                url: ''
            })
            .state('app', {
                abstract: true,
                views: {
                    '@': {templateUrl: App.layout.main.main},
                    'left@app': {templateUrl: App.layout.main.left, controller: 'LeftMenuCtrl'}
                }
            })
            .state('app.home', {
                url: App.route.home,
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


        $.extend($.gritter.options, {
            //position: 'bottom-left', // defaults to 'top-right' but can be 'bottom-left', 'bottom-right', 'top-left', 'top-right' (added in 1.7.1)
            //fade_in_speed: 'medium', // how fast notifications fade in (string or int)
            //fade_out_speed: 2000, // how fast the notices fade out
            time: 10000
        });
//        $locationProvider.html5Mode(true);


    }]).
    run(['$rootScope', '$location', function ($rootScope, $location) {

        Metronic.init();

        $rootScope.$on("$stateChangeStart", function () {

            switch ($location.path()){
                case LoginModule.route.login:
                    $('body').attr('class', 'login');
                    break;
                case App.route.error404:
                    $('body').attr('class', 'page-404-full-page');
                    break;
                case App.route.error500:
                    $('body').attr('class', 'page-500-full-page');
                    break;
                default :
                    $('body').attr('class', 'page-header-fixed');
            }
        });
    }]);