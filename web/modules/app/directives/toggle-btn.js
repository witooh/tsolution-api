App
    .directive('toggleBtn', function () {
        return {
            restrict: 'A',
            scope: {
                toggleBtn: '=toggleBtn',
                name: '@toggleBtnName',
                enableLabel: '@toggleBtnEnableLabel',
                disableLabel: '@toggleBtnDisableLabel'
            },
            replace: true,
            template: '<div id="{{name}}-toggle-button"><input name="{{name}}" type="checkbox"></div>',
            compile: function(){
                return {
                    pre: function(scope, element, attr){

                        element.toggleButtons({
                            label: {
                                enabled: attr.toggleBtnEnableLabel || 'On',
                                disabled: attr.toggleBtnDisableLabel || 'Off'
                            },
                            onChange: function($el, status){
                                scope.toggleBtn = status;
                            }
                        });

                        scope.$watch('toggleBtn', function(data){
                            data = data || false;

                            element.toggleButtons('setState', data);
                        });
                    }
                }
            },
            link: function(scope, element, attr){


            }
        }
    });