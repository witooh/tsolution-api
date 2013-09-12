'use strict';

var EventModule = angular.module('Event', []);

EventModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('Event', {
                abstract: true,
                views: {
                    '@': { templateUrl: EventModule.layout.main.main }
                }
            })
            .state('Event.list', {
                url: EventModule.route.list,
                views: {
                    'main': {
                        templateUrl: EventModule.views.list,
                        controller: 'EventListCtrl'
                    }
                }
            })
            .state('Event.page', {
                url: EventModule.route.page,
                resolve: {
                    content: function($eventService, $stateParams){
                        return $eventService.getData($stateParams.id);
                    }
                },
                views: {
                    'main': {
                        templateUrl: EventModule.views.page,
                        controller: 'EventPageCtrl'
                    }
                }
            })
        ;
    }]);