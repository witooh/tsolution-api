
DealerModule
    .factory('$requestService', ['$http', '$q', '$validator', function ($http, $q, $validator) {

        var service = function(){
            var self = this;

            self.gridConfig = {
                destroyApi: api(DealerModule.api.Request.destroy),
                url: api(DealerModule.api.Request.grid),
                colNames: ['Title', 'Requested By', 'Company', 'Created Date-Time', 'Updated Date-Time'],
                colModel: [
                    {
                        name: 'title', index: 'title', formatter: function (value, options, rowObject) {
                            return '<a href="' + '#/dealer/request/' + rowObject.id + '">' + value + '</a>';
                        }
                    },
                    { name: 'name', index: 'name', align: 'left'},
                    { name: 'company_name', index: 'company_name', align: 'left'},
                    { name: 'created_at', index: 'created_at', align: 'center' },
                    { name: 'updated_at', index: 'updated_at', align: 'center' }
                ],
                sortname: 'dealer_request.updated_at',
                pager: '#pager'
            };

            self.getData = function(id){
                var defer = $q.defer();

                $http.get(api(DealerModule.api.Request.data, [id]))
                    .success(function(res){
                        defer.resolve(res.data);
                    });

                return defer.promise;
            };
        };

        return new service;
    }]);
