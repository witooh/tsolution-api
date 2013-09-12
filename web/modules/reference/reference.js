'use strict';

var ReferenceModule = angular.module('Reference', []);

ReferenceModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('Reference', {
                abstract: true,
                views: {
                    '@': { templateUrl: ReferenceModule.layout.main.main }
                }
            })
            .state('Reference.page', {
                url: ReferenceModule.route.page,
                resolve: {
                    content: function($referenceService){
                        return $referenceService.getData(ReferenceModule.id);
                    }
                },
                views: {
                    'main': {
                        templateUrl: ReferenceModule.views.page,
                        controller: 'ReferencePageCtrl'
                    }
                }
            })
        ;
    }]);