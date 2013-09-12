'use strict';

FAQModule
    .controller('FAQEditCtrl', ['$scope', '$location', '$contentService', 'content', function ($scope, $location, $contentService, content) {
        $scope.content = content;

        $scope.save = function(){
            $contentService.update(FAQModule.id, $scope.content).success(function(){
                $.gritter.add({
                    title: 'Edit FAQ Successful',
                    text: 'FAQ is edited'
                });
                $location.path(FAQModule.route.edit);
            });
        };
    }])
;