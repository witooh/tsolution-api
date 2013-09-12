
UserModule
    .factory('$fileService', ['$http', '$q', '$validator', function ($http, $q, $validator) {

        var service = function(){
            var self = this;

            self.getUserId = function(id){

            };

            self.add = function(user){

            };

            self.edit = function(user){

            };

            self.destroy = function(idList){

            };
        };

        return new service;
    }]);
