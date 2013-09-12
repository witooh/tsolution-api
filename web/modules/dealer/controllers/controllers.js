'use strict';

DealerModule
    .controller('DealerMainCtrl', ['$scope', '$location', '$dealerService', '$rootScope', 'annouceList', function ($scope, $location, $dealerService, $rootScope, annouceList) {
        $rootScope.$broadcast('checkauth');

        $scope.annountList = [];

        angular.forEach(annouceList.rows, function(value){
            value.cell.created_at = Date.parse(value.cell.created_at.replace(' ', 'T'));
            $scope.annountList.push(value.cell);
        });
    }])

    .controller('DealerDownloadCtrl', ['$scope', '$location', '$dealerService', '$rootScope', 'fileList', function ($scope, $location, $dealerService, $rootScope, fileList) {
        $rootScope.$broadcast('checkauth');

        $scope.fileList = [];

        angular.forEach(fileList.rows, function(value){
            value.cell.created_at = Date.parse(value.cell.created_at.replace(' ', 'T'));
            $scope.fileList.push(value.cell);
        });
    }])

    .controller('DealerViewCtrl', ['$scope', '$location', '$dealerService', 'content', '$rootScope', function ($scope, $location, $dealerService, content, $rootScope) {
        $rootScope.$broadcast('checkauth');

        $scope.content = content;
        $scope.content.created_at = Date.parse($scope.content.created_at.replace(' ', 'T'));
    }])

    .controller('DealerSupportCtrl', ['$scope', '$location', '$dealerService', '$rootScope', function ($scope, $location, $dealerService, $rootScope) {
        $rootScope.$broadcast('checkauth');
        $scope.support = {title: '', content: ''};

        $scope.submit = function(){
            $dealerService.validator(function(){

                $scope.support.created_by = $rootScope.user.id;

                $dealerService.sendRequest($scope.support, function(){
                    alert('ข้อมูลได้ถูกส่งเรียบร้อยแล้ว');
                    $scope.support = {title: '', content: ''};
                });
            });
        }
    }])
;