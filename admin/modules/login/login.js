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
                controller: function($basicAuth, $location, $rootScope){
                    $basicAuth.logout(function(){
                        $location.path(LoginModule.route.login);
                        $rootScope.$apply();
                    });
                }
            });
    }])
    .run(['$rootScope', '$basicAuth', '$location', function ($rootScope, $basicAuth, $location) {

        $rootScope.$on("$stateChangeStart", function () {
            $basicAuth.check({
                success: function(res){
                    $rootScope.user = res.data;
                    if($location.path() == ''){
                        $location.path(App.route.home);
                    }
                    $rootScope.$apply();
                }
            });
        });
    }]);