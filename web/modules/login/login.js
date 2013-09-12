'use strict';

var LoginModule = angular.module('Login', []);

LoginModule
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: LoginModule.route.login,
                templateUrl: LoginModule.views.login,
                controller: 'LoginCtrl'
            })
            .state('logout', {
                url: LoginModule.route.logout,
                controller: ['$basicAuth', '$location', function($basicAuth, $location){
                    $basicAuth.logout(function(){
                        $location.path('/login');
                    });
                }]
            });
    }])
    .run(['$rootScope', '$basicAuth', '$location', function ($rootScope, $basicAuth, $location) {

        $rootScope.user = {};
        $rootScope.$on('checkauth', function(event){
            $basicAuth.check({
                success: function(res){
                    $rootScope.user = res.data;
                    $rootScope.$apply();
                }
            });
        });

//        $rootScope.$on("$stateChangeStart", function () {
//            $basicAuth.check({
//                success: function(res){
//                    $rootScope.user = res.data;
//                    if($location.path() == ''){
//                        $location.path(App.route.home);
//                    }
//                    $rootScope.$apply();
//                }
//            });
//        });
    }]);