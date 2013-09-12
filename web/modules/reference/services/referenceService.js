
ReferenceModule
    .factory('$referenceService', ['$http', '$q', function ($http, $q) {

        var service = function(){
            var self = this;

            self.getData = function(id){
                var defer = $q.defer();

                $http.get(api(ReferenceModule.api.data, [id]), { cache: true })
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };
        };

        return new service;
    }]);
