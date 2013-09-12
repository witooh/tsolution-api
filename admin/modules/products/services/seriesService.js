
ProductModule
    .factory('$seriesService', ['$rootScope', '$http', '$q', '$validator', function ($rootScope, $http, $q, $validator) {
        var service = function(){

            var self = this;

            self.gridConfig = {
                destroyApi: api(ProductModule.api.Series.destroy),
                url: api(ProductModule.api.Series.grid),
                colNames: ['Name', 'Brand', 'Product Type', 'Created Date-Time', 'Updated Date-Time'],
                colModel: [
                    {
                        name: 'name', index: 'name', formatter: function (value, options, rowObject) {
                        return '<a href="' + '#/products/series/' + rowObject.id + '">' + value + '</a>';
                    }
                    },
                    { name: 'brand_name', index: 'brand_name', align: 'left' },
                    { name: 'type', index: 'type', align: 'left' },
                    { name: 'created_at', index: 'created_at', align: 'center' },
                    { name: 'updated_at', index: 'updated_at', align: 'center' }
                ],
                sortname: 'series.updated_at',
                pager: '#pager'
            };

            self.getData = function(id){
                var defer = $q.defer();

                $http.get(api(ProductModule.api.Series.data, [id]))
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.getAllName = function(){
                var defer = $q.defer();

                $http.get(api(ProductModule.api.Series.name))
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.getAll = function(){
                var defer = $q.defer();

                $http.get(api(ProductModule.api.Series.all))
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.validator = function(callback){
                $validator.make('#form', {
                    rules: {
                        name: {required: true},
                        brand_id: {required: true}
                    },
                    submitHandler: function (form) {
                        callback(form);
                    }
                });
            };

            self.save = function(data){
                return $http.post(api(ProductModule.api.Series.add), data);
            };

            self.update = function(id, data){
                return $http.post(api(ProductModule.api.Series.edit, id), data);
            };
        };

        return new service();
    }]);
