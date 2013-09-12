'use strict';

ReferenceModule
    .controller('ReferencePageCtrl', ['$scope', '$location', '$referenceService', 'content', function ($scope, $location, $referenceService, content) {
        $scope.content = content;
    }])
;