App
    .directive('showShortBlog', function () {
        return {
            restrict: 'A',
            link: function(scope, element, attr){
                if(scope.content.short == '' || scope.content.short == null){
                    element.parent().remove();
                }
            }
        }
    });