'use strict';

EventModule
    .controller('EventListCtrl', ['$scope', '$location', '$eventService', function ($scope, $location, $eventService) {
        $scope.contentList = [];
        $scope.busy = false;
        $scope.isAll = false;

        $scope.list = EventModule.listConfig;
        $scope.list.page = 1;

        $scope.nextPage = function() {
            if ($scope.busy || $scope.isAll) return;
            $scope.busy = true;
            $eventService.getList($scope.list).then(function(data){
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

    .controller('EventPageCtrl', ['$scope', '$location', '$eventService', 'content', function ($scope, $location, $eventService, content) {
        $scope.content = content;
        $scope.content.created_at = Date.parse($scope.content.created_at.replace(' ', 'T'));
    }])
;