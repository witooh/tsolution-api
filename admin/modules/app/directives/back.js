App
    .directive('backBtn', function () {
        return {
            restrict: 'A',
            link: function(scope, element, attr){
                element.addClass('btn');
                element.on('click', function(){
                    window.history.back();
                });
            }
        }
    });