App
    .directive('showImgBlog', function () {
        return {
            restrict: 'A',
            scope: {
                showImgBlog: '=showImgBlog'
            },
            link: function(scope, element, attr){
                if(scope.showImgBlog == undefined || scope.showImgBlog == ''){
                    element.parent().parent().remove();
                }else{
                    element.attr('src', scope.showImgBlog);
                }
            }
        }
    });