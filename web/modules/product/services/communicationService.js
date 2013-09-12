
ProductModule
    .factory('$communicationService', ['$http', '$q', function ($http, $q) {

        var service = function(){
            var self = this;

            self.getData = function(id){
                var defer = $q.defer();

                $http.get(api(ProductModule.api.Communication.data, [id]), { cache: true })
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.getAllBrand = function(type){
                var defer = $q.defer();

                $http.get(api(ProductModule.api.Communication.brand, [type]), { cache: true })
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.getSeriesAndProduct = function(brand_id){
                var deferSeries = $q.defer();
                var deferProduct = $q.defer();


                $http.get(api(ProductModule.api.Communication.series, [brand_id]), { cache: true })
                    .success(function(res){
                        deferSeries.resolve(res.data);
                    });

                $http.get(api(ProductModule.api.Communication.product, [brand_id]), { cache: true })
                    .success(function(res){
                        deferProduct.resolve(res.data);
                    });

                return $q.all([deferSeries.promise, deferProduct.promise]);
            };
        };

        return new service;
    }]);
