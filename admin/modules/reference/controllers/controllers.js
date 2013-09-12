'use strict';

ReferenceModule
    .controller('ReferenceEditCtrl', ['$scope', '$location', '$contentService', 'content', function ($scope, $location, $contentService, content) {
        $scope.content = content;

        $scope.save = function(){
            $contentService.update(ReferenceModule.id, $scope.content).success(function(){
                $.gritter.add({
                    title: 'Edit Reference Successful',
                    text: 'Reference is edited'
                });
                $location.path(ReferenceModule.route.edit);
            });
        };
    }])
;