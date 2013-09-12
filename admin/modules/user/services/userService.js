
UserModule
    .factory('$userService', ['$http', '$q', '$validator', function ($http, $q, $validator) {

        var service = function(){
            var self = this;

            self.getUserId = function(id){
                var defer = $q.defer();

                $http.get(api(UserModule.api.data, [id]))
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.add = function(user){

            };

            self.edit = function(user){

            };

            self.destroy = function(idList){

            };
        };

        return new service;
    }]);
