
FAQModule
    .factory('$faqService', ['$http', '$q', function ($http, $q) {

        var service = function(){
            var self = this;

            self.getData = function(id){
                var defer = $q.defer();

                $http.get(api(FAQModule.api.data, [id]))
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.getList = function(data){
                var defer = $q.defer();

                $http.get(api(FAQModule.api.list), {params: data, cache: true})
                    .success(function(res){
                        defer.resolve(res);
                    });

                return defer.promise;
            };
        };

        return new service;
    }]);
