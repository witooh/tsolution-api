'use strict';

var AboutUsModule = angular.module('AboutUs', []);

AboutUsModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('AboutUs', {
                abstract: true,
                views: {
                    '@': { templateUrl: AboutUsModule.layout.main.main },
                    'left@AboutUs': { templateUrl: AboutUsModule.layout.main.left, controller: 'LeftMenuCtrl' }
                }
            })
            .state('AboutUs.edit', {
                url: AboutUsModule.route.edit,
                resolve: {
                    content: function($contentService){
                        return $contentService.getData(AboutUsModule.id);
                    }
                },
                views: {
                    'main': {
                        templateUrl: AboutUsModule.views.edit,
                        controller: 'AboutUsEditCtrl'
                    },
                    'form@AboutUs.edit': {
                        templateUrl: AboutUsModule.views.form
                    }
                }
            })
        ;
    }]);