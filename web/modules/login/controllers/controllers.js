'use strict';

LoginModule
    .controller('LoginCtrl', ['$scope', '$location', '$basicAuth', '$validator', '$rootScope', function ($scope, $location, $basicAuth, $validator, $rootScope) {

        $scope.login = {username: '', password: ''};
        $scope.login.showError = 'hide';

        $scope.submit = function(){
            $scope.login.showError = 'hide';
            $validator.make('#login-form', {
                rules: {
                    username: { required: true },
                    password: { required: true }
                },
                submitHandler: function (form) {

                    $basicAuth.login({
                        //if use basic http must setup this option
                        http: {
                            username: $scope.login.username,
                            password: $scope.login.password
                        },
                        credentials: {
                            email: $scope.login.username,
                            password: $scope.login.password
                        },
                        data: {},
                        success: function(res){
                            $rootScope.user = res.data;
                            $location.path('/dealer/announce');
                            $rootScope.$apply();
                        },
                        error: function(){
                            $scope.login.showError = '';
                            $scope.login.error = 'Username or Password is incorrect';
                            $scope.$apply();
                        }
                    });
                }
            });
        }
    }])
;