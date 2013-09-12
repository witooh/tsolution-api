'use strict';

var FileModule = angular.module('File', []);

FileModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('file', {
                abstract: true,
                views: {
                    '@': {templateUrl: FileModule.layout.main.main},
                    'left@file': {templateUrl: FileModule.layout.main.left, controller: 'LeftMenuCtrl'}
                }
            })
            .state('file.list', {
                url: FileModule.route.list,
                views: {
                    'main': {
                        templateUrl: FileModule.views.list,
                        controller: 'FileCtrl'
                    }
                }
            })
        ;
    }]);