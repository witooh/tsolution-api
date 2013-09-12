App
    .directive('calendar', function () {
        return {
            restrict: 'A',
            link: function(scope, element, attr){
                 $('#calendar').datepicker();
            }
        }
    });