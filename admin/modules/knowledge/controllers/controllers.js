'use strict';

KnowledgeModule
    .controller('KnowledgeEditCtrl', ['$scope', '$location', '$contentService', 'content', function ($scope, $location, $contentService, content) {
        $scope.content = content;

        $scope.save = function(){
            $contentService.update(KnowledgeModule.id, $scope.content).success(function(){
                $.gritter.add({
                    title: 'Edit Knowledge Successful',
                    text: 'Knowledge is edited'
                });
                $location.path(KnowledgeModule.route.edit);
            });
        };
    }])
;