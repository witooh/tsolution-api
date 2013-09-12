
ProductModule
    .factory('$securityService', ['$http', '$q', function ($http, $q) {

        var service = function(){
            var self = this;

            self.getData = function(id){
                var defer = $q.defer();

                $http.get(api(ProductModule.api.Security.data, [id]), { cache: true })
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.getAllBrand = function(type){
                var defer = $q.defer();

                $http.get(api(ProductModule.api.Security.brand, [type]), { cache: true })
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.getAllSeries = function(brand_id){
                var defer = $q.defer();

                $http.get(api(ProductModule.api.Security.series, [brand_id]), { cache: true })
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.getAllProduct = function(brand_id){
                var defer = $q.defer();

                $http.get(api(ProductModule.api.Security.product, [brand_id]), { cache: true })
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.getSeriesAndProduct = function(brand_id){
                var deferSeries = $q.defer();
                var deferProduct = $q.defer();


                $http.get(api(ProductModule.api.Security.series, [brand_id]), { cache: true })
                    .success(function(res){
                        deferSeries.resolve(res.data);
                    });

                $http.get(api(ProductModule.api.Security.product, [brand_id]), { cache: true })
                    .success(function(res){
                        deferProduct.resolve(res.data);
                    });

                return $q.all([deferSeries.promise, deferProduct.promise]);
            };
        };

        return new service;
    }]);
