
DealerModule
    .factory('$fileService', ['$http', '$q', '$validator', function ($http, $q, $validator) {

        var service = function(){
            var self = this;

            self.gridConfig = {
                destroyApi: api(DealerModule.api.File.destroy),
                url: api(DealerModule.api.File.grid),
                colNames: ['Title', 'Created Date-Time', 'Updated Date-Time'],
                colModel: [
                    {
                        name: 'title', index: 'title', formatter: function (value, options, rowObject) {
                            return '<a href="' + '#/dealer/file/' + rowObject.id + '">' + value + '</a>';
                        }
                    },
                    { name: 'created_at', index: 'created_at', align: 'center' },
                    { name: 'updated_at', index: 'updated_at', align: 'center' }
                ],
                pager: '#pager'
            };

            self.getData = function(id){
                var defer = $q.defer();

                $http.get(api(DealerModule.api.File.data, [id]))
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.validator = function(callback){
                $validator.make('#form', {
                    rules: {
                        title: {required: true},
                        file: {required: true}
                    },
                    submitHandler: function (form) {
                        callback(form);
                    }
                });
            };

            self.save = function(data){
                data.category_id = 7;
                return $http.post(api(DealerModule.api.File.add), data);
            };

            self.update = function(id, data){
                return $http.post(api(DealerModule.api.File.edit, [id]), data);
            };
        };

        return new service;
    }]);
