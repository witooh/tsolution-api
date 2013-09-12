
DealerModule
    .factory('$dealerService', ['$http', '$q', '$validator', function ($http, $q, $validator) {

        var service = function(){
            var self = this;

            self.validator = function(callback){
                $validator.make('#form', {
                    errorElement: 'div',
                    rules: {
                        title: { required: true },
                        message: { required: true }
                    },
                    errorPlacement: function (label, element) {
                        jQuery(element).after(label);
                    },
                    submitHandler: function (form) {
                        callback(form);
                    }
                });
            };

            self.getData = function(id){
                var defer = $q.defer();

                $http.get(api(DealerModule.api.announceView, [id]), { cache: true })
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.getList = function(data){
                var defer = $q.defer();

                $http.get(api(DealerModule.api.annouceList), {params: data, cache: true})
                    .success(function(res){
                        defer.resolve(res);
                    });

                return defer.promise;
            };

            self.getFileList = function(data){
                var defer = $q.defer();

                $http.get(api(DealerModule.api.download), {params: data, cache: true})
                    .success(function(res){
                        defer.resolve(res);
                    });

                return defer.promise;
            };

            self.sendRequest = function(data, callback){
                $http.post(api(DealerModule.api.request), data).success(function(){
                    callback();
                });
            }
        };

        return new service;
    }]);
