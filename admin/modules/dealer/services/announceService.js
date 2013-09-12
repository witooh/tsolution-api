
DealerModule
    .factory('$announceService', ['$http', '$q', '$validator', function ($http, $q, $validator) {

        var service = function(){
            var self = this;

            self.gridConfig = {
                destroyApi: api(DealerModule.api.Announce.destroy),
                url: api(DealerModule.api.Announce.grid),
                colNames: ['Title', 'Created Date-Time', 'Updated Date-Time'],
                colModel: [
                    {
                        name: 'title', index: 'title', formatter: function (value, options, rowObject) {
                            return '<a href="' + '#/dealer/announce/' + rowObject.id + '">' + value + '</a>';
                        }
                    },
                    { name: 'created_at', index: 'created_at', align: 'center' },
                    { name: 'updated_at', index: 'updated_at', align: 'center' }
                ],
                pager: '#pager'
            };

            self.getData = function(id){
                var defer = $q.defer();

                $http.get(api(DealerModule.api.Announce.data, [id]))
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.validator = function(callback){
                $validator.make('#form', {
                    rules: {
                        title: {required: true}
                    },
                    submitHandler: function (form) {
                        callback(form);
                    }
                });
            };

            self.save = function(data){
                data.category_id = 7;
                return $http.post(api(DealerModule.api.Announce.add), data);
            };

            self.update = function(id, data){
                data.content = CKEDITOR.instances.content.getData();
                return $http.post(api(DealerModule.api.Announce.edit, [id]), data);
            };
        };

        return new service;
    }]);
