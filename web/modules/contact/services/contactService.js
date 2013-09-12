
ContactModule
    .factory('$contactService', ['$http', '$q', '$validator', function ($http, $q, $validator) {

        var service = function(){
            var self = this;

            self.validator = function(callback){
                $validator.make('#contact-form', {
                    errorElement: 'div',
                    rules: {
                        name: { required: true },
                        email: { required: true },
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

            self.sendMail = function(data){
                return $http.post(api(ContactModule.api.mail), data).success(function(){
                    alert('Your information has been send. Thank you.');
                });
            };
        };

        return new service;
    }]);
