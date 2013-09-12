'use strict';

var UserModule = angular.module('User', []);

UserModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('user', {
                abstract: true,
                views: {
                    '@': {templateUrl: UserModule.layout.main.main},
                    'left@user': {templateUrl: UserModule.layout.main.left, controller: 'LeftMenuCtrl'}
                }
            })
            .state('user.list', {
                url: UserModule.route.list,
                views: {
                    'main': {
                        templateUrl: UserModule.views.list,
                        controller: 'UserListCtrl'
                    }
                }
            })
            .state('user.add', {
                url: UserModule.route.add,
                views: {
                    'main': {
                        templateUrl: UserModule.views.add,
                        controller: 'UserAddCtrl'
                    }
                }
            })
            .state('user.edit', {
                url: UserModule.route.edit,
                resolve: {
                    user: ['$userService', '$stateParams', function ($userService, $stateParams){
                        return $userService.getUserId($stateParams.id);
                    }]
                },
                views: {
                    'main': {
                        templateUrl: UserModule.views.edit,
                        controller: 'UserEditCtrl'
                    }
                }
            })
            .state('user.changepwd', {
                url: UserModule.route.changepwd,
                views: {
                    'main': {
                        templateUrl: UserModule.views.changepwd,
                        controller: 'UserChangePwdCtrl'
                    }
                }
            })
        ;
    }]);