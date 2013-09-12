
LoginModule
    .factory('$basicAuth', ['$rootScope', '$location', '$http', function ($rootScope, $location, $http) {

        var authService = function(){
            var self = this;

            self.isLogin = undefined;

            self.check = function(options){

                options = angular.extend({
                    success: function(data){},
                    error: function(data){}
                }, options);

                if($location.path() != LoginModule.route.login && angular.isUndefined(self.isLogin)){
                    jQuery.ajax({
                        url: api(LoginModule.api.check),
                        success: function(data){
                            options.success(data);
                            self.isLogin = true;
                        },
                        error: function(){
                            self.isLogin = false;
                            options.error();

                            $location.path(LoginModule.route.login);
                            $rootScope.$apply();
                        }
                    });
                }else if(self.isLogin == false){
                    $location.path(LoginModule.route.login);
                }
            };

            self.login = function(options){
                options = angular.extend({
                    http: {},
                    credentials: {},
                    data: {},
                    success: function(data){},
                    error: function(){}
                }, options);

                var data = options.data;
                data.credentials = options.credentials;
                data.type = LoginModule.setting.loginType;
                data.by = LoginModule.setting.loginBy;

                jQuery.ajax({
                    beforeSend: function (xhr){
                        if(LoginModule.setting.loginType == 'http'){
                            xhr.setRequestHeader("Authorization", "Basic " + btoa(options.http.username + ':' + options.http.password));
                        }
                    },
                    type: 'POST',
                    url: api(LoginModule.api.login),
                    data: data,
                    success: function(data){
                        self.isLogin = true;
                        options.success(data);
                    },
                    error: function(){
                        options.error();
                    }
                });
            };

            self.logout = function(success){
                self.isLogin = false;
                success = success || null;
                $http.get(api(LoginModule.api.logout)).success(function(){
                    if(success != null){
                        success();
                    }
                });
            }
        }

        return new authService();
    }]);
