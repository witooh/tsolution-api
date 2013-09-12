'use strict';

AboutUsModule
    .controller('AboutUsEditCtrl', ['$scope', '$location', '$contentService', 'content', function ($scope, $location, $contentService, content) {
        $scope.content = content;

        $scope.save = function(){
            $contentService.update(AboutUsModule.id, $scope.content).success(function(){
                $.gritter.add({
                    title: 'Edit About us Successful',
                    text: 'About us is edited'
                });
                $location.path(AboutUsModule.route.edit);
            });
        };
    }])
;