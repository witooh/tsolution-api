
NewsModule
    .factory('$newsService', ['$http', '$q', function ($http, $q) {

        var service = function(){
            var self = this;

            self.getData = function(id){
                var defer = $q.defer();

                $http.get(api(NewsModule.api.data, [id]), { cache: true })
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.getList = function(data){
                var defer = $q.defer();

                $http.get(api(NewsModule.api.list), {params: data, cache:true})
                    .success(function(res){
                        defer.resolve(res);
                    });

                return defer.promise;
            };
        };

        return new service;
    }]);
