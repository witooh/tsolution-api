'use strict';
App.
    factory('$validator', ['$rootScope', function ($rootScope) {
        var validateService = function(){
            var self = this;
            self.make = function (selector, config) {
                var defaultConfig = {
                    ignore: [],
                    onkeyup: false,
                    errorElement: 'span',
                    errorClass: 'help-inline',
                    highlight: function (element) {
                        $(element).closest('.control-group').addClass('error');
                    },
                    unhighlight: function (element) {
                        $(element).closest('.control-group').removeClass('error');
                    },
                    errorPlacement: function(label, element){
                        $(element).closest('.controls').append(label);
                    },
                    submitHandler: function (form) { }
                };

                config = self.addRomte(config);

                config = $.extend(defaultConfig, config);

                $(selector).validate(config);
            };

            self.addRomte = function(config){
                if(!angular.isUndefined(config['remote']) && !angular.isUndefined(config['remote']['rule']) &&
                    !angular.isUndefined(config['remote']['field'])){

                    config.remote.url = config.remote.url || api("/inlinevalidate");

                    for(var i in config.remote.field){
                        var field = config.remote.field[i];
                        var data = {};
                        data.rule = config.remote.rule;

                        if(angular.isObject(field)){
                            field = field.field;

                            data.field = field;
                            for(var j in config.remote.field[i].data){
                                data[j] = config.remote.field[i].data[j];
                            }
                        }else{
                            data.field = config.remote.field[i];
                        }

                        config.rules[field].remote = {
                            url: config.remote.url,
                            type: 'post',
                            data: data
                        };
                    }
                }

//                console.log(config);

                return config;
            };
        };

        return new validateService();
    }]);