'use strict';

var AboutUsModule = angular.module('AboutUs', []);

AboutUsModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('AboutUs', {
                abstract: true,
                views: {
                    '@': { templateUrl: AboutUsModule.layout.main.main }
                }
            })
            .state('AboutUs.page', {
                url: AboutUsModule.route.page,
                views: {
                    'main': {
                        templateUrl: AboutUsModule.views.page,
                        controller: 'AboutUsPageCtrl'
                    }
                }
            })
        ;
    }]);