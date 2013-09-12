'use strict';

var ReferenceModule = angular.module('Reference', []);

ReferenceModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('Reference', {
                abstract: true,
                views: {
                    '@': { templateUrl: ReferenceModule.layout.main.main },
                    'left@Reference': { templateUrl: ReferenceModule.layout.main.left, controller: 'LeftMenuCtrl' }
                }
            })
            .state('Reference.edit', {
                url: ReferenceModule.route.edit,
                resolve: {
                    content: function($contentService){
                        return $contentService.getData(ReferenceModule.id);
                    }
                },
                views: {
                    'main': {
                        templateUrl: ReferenceModule.views.edit,
                        controller: 'ReferenceEditCtrl'
                    },
                    'form@Reference.edit': {
                        templateUrl: ReferenceModule.views.form
                    }
                }
            })
        ;
    }]);