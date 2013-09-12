'use strict';

FAQModule
    .controller('FAQListCtrl', ['$scope', '$location', '$faqService', function ($scope, $location, $faqService) {
        $scope.contentList = [];
        $scope.busy = false;
        $scope.isAll = false;

        $scope.list = FAQModule.listConfig;
        $scope.list.page = 1;

        $scope.nextPage = function() {
            if ($scope.busy || $scope.isAll) return;
            $scope.busy = true;
            $faqService.getList($scope.list).then(function(data){
                for(var i in data.rows){
                    data.rows[i].cell.created_at = Date.parse(data.rows[i].cell.created_at.replace(' ', 'T'));
                    $scope.contentList.push(data.rows[i].cell);
                }
                if(data.page == data.total){
                    $scope.isAll = true;
                }
                $scope.busy = false;
                $scope.list.page++;

            });
        };
    }])

    .controller('FAQPageCtrl', ['$scope', '$location', '$faqService', 'content', function ($scope, $location, $faqService, content) {
        $scope.content = content;
        $scope.content.created_at = Date.parse($scope.content.created_at.replace(' ', 'T'));
    }])
;