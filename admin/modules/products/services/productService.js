
ProductModule
    .factory('$productService', ['$rootScope', '$http', '$q', '$validator', function ($rootScope, $http, $q, $validator) {
        var service = function(){

            var self = this;

            self.gridConfig = {
                destroyApi: api(ProductModule.api.Product.destroy),
                url: api(ProductModule.api.Product.grid),
                colNames: ['Name', 'Series', 'Brand', 'Product Type','Created Date-Time', 'Updated Date-Time'],
                colModel: [
                    {
                        name: 'name', index: 'name', formatter: function (value, options, rowObject) {
                        return '<a href="' + '#/products/product/' + rowObject.id + '">' + value + '</a>';
                    }
                    },
                    { name: 'series_name', index: 'series_name', align: 'left' },
                    { name: 'brand_name', index: 'brand_name', align: 'left' },
                    { name: 'type', index: 'type', align: 'left' },
                    { name: 'created_at', index: 'created_at', align: 'center' },
                    { name: 'updated_at', index: 'updated_at', align: 'center' }
                ],
                pager: '#pager'
            };

            self.getData = function(id){
                var deferProduct = $q.defer();
                var deferBrand = $q.defer();
                var deferSeries = $q.defer();

                $http.get(api(ProductModule.api.Product.data, [id]))
                    .success(function(res){
                        deferProduct.resolve(res.data);
                    });

                $http.get(api(ProductModule.api.Brand.all))
                    .success(function(res){
                        deferBrand.resolve(res.data);
                    });

                $http.get(api(ProductModule.api.Series.all))
                    .success(function(res){
                        deferSeries.resolve(res.data);
                    });

                return $q.all([deferBrand.promise, deferSeries.promise, deferProduct.promise]);
            };

            self.initialProductData = function(brand, series, product){
                for(var i in series){
                    if(series[i].id == product.series_id){
                        product.brand_id = series[i].brand_id;
                    }
                }

                return product;
            };

            self.save = function(data){
                return $http.post(api(ProductModule.api.Product.add), data);
            };

            self.update = function(id, data){
                data.intro = CKEDITOR.instances.intro.getData();
                data.detail = CKEDITOR.instances.detail.getData();
                data.feature = CKEDITOR.instances.feature.getData();
                data.spec = CKEDITOR.instances.spec.getData();
                data.require = CKEDITOR.instances.require.getData();
                data.download = CKEDITOR.instances.download.getData();
                return $http.post(api(ProductModule.api.Product.edit, id), data);
            };

            self.validator = function(callback){
                $validator.make('#form', {
                    rules: {
                        name: {required: true},
                        series_id: {required: true},
                        brand_id: {required: true},
                        intro: {required: true},
                        detail: {required: true},
                        img: {required: true},
                        thumb: {required: true}
                    },
                    submitHandler: function (form) {
                        callback(form);
                    }
                });
            };

        };

        return new service();
    }]);
