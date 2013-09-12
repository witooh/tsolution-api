
ProductModule
    .factory('$brandService', ['$rootScope', '$http', '$q', '$validator', function ($rootScope, $http, $q, $validator) {
        var service = function(){

            var self = this;

            self.gridConfig = {
                destroyApi: api(ProductModule.api.Brand.destroy),
                url: api(ProductModule.api.Brand.grid),
                colNames: ['Name', 'Product Type', 'Created Date-Time', 'Updated Date-Time'],
                colModel: [
                    {
                        name: 'name', index: 'name', formatter: function (value, options, rowObject) {
                        return '<a href="' + '#/products/brand/' + rowObject.id + '">' + value + '</a>';
                    }
                    },
                    { name: 'type', index: 'type', align: 'left' },
                    { name: 'created_at', index: 'created_at', align: 'center' },
                    { name: 'updated_at', index: 'updated_at', align: 'center' }
                ],
                pager: '#pager'
            };

            self.getData = function(id){
                var defer = $q.defer();

                $http.get(api(ProductModule.api.Brand.data, [id]))
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.getAll = function(){
                var defer = $q.defer();

                $http.get(api(ProductModule.api.Brand.all))
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.validator = function(callback){
                $validator.make('#form', {
                    rules: {
                        name: {required: true},
                        type: {required: true}
                    },
                    submitHandler: function (form) {
                        callback(form);
                    }
                });
            };

            self.save = function(data){
                return $http.post(api(ProductModule.api.Brand.add), data);
            };

            self.update = function(id, data){
                return $http.post(api(ProductModule.api.Brand.edit, id), data);
            };
        };

        return new service();
    }]);
