App
    .directive('ckeditor', function () {
        return {
            require: '?ngModel',
            link: function(scope, element, attr, ngModel){

                var ck = CKEDITOR.replace(element[0]);

                if(!ngModel) return;

                ck.on('pasteState', function() {
                    scope.$apply(function() {
                        ngModel.$setViewValue(ck.getData());
                    });
                });

                ngModel.$render = function(value) {
                    ck.setData(ngModel.$viewValue);
                };

            }

        }
    });