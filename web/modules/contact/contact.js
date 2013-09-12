'use strict';

var ContactModule = angular.module('Contact', []);

ContactModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('Contact', {
                abstract: true,
                views: {
                    '@': { templateUrl: ContactModule.layout.main.main }
                }
            })
            .state('Contact.page', {
                url: ContactModule.route.page,
                views: {
                    'main': {
                        templateUrl: ContactModule.views.page,
                        controller: 'ContactPageCtrl'
                    }
                }
            })
        ;
    }]);