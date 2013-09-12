
ContentModule
    .factory('$contentService', ['$http', '$q', '$validator', function ($http, $q, $validator) {

        var service = function(){
            var self = this;

            self.gridConfig = {
                destroyApi: api(ContentModule.api.Content.destroy),
                url: api(ContentModule.api.Content.grid),
                colNames: ['Title', 'Category', 'Created Date-Time', 'Updated Date-Time'],
                colModel: [
                    {
                        name: 'title', index: 'title', formatter: function (value, options, rowObject) {
                            return '<a href="' + '#/content/' + rowObject.id + '">' + value + '</a>';
                        }
                    },
                    { name: 'category_name', index: 'category_name', align: 'left' },
                    { name: 'created_at', index: 'created_at', align: 'center' },
                    { name: 'updated_at', index: 'updated_at', align: 'center' }
                ],
                pager: '#pager'
            };

            self.getData = function(id){
                var defer = $q.defer();

                $http.get(api(ContentModule.api.Content.data, [id]))
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };

            self.validator = function(callback){
                $validator.make('#form', {
                    rules: {
                        title: {required: true},
//                        short: {required: true},
                        category_id: {required: true}
                    },
                    submitHandler: function (form) {
                        callback(form);
                    }
                });
            };

            self.save = function(data){
                return $http.post(api(ContentModule.api.Content.add), data);
            };

            self.update = function(id, data){
                data.content = CKEDITOR.instances.content.getData();
                return $http.post(api(ContentModule.api.Content.edit, [id]), data);
            };
        };

        return new service;
    }]);
