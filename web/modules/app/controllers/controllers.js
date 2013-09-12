'use strict';

App
    .controller('HomeCtrl', ['$scope','newsList', 'eventList', 'knowledgeList', 'faqList',function ($scope, newsList, eventList, knowledgeList, faqList) {
        $scope.newsList = [];
        $scope.eventList = [];
        $scope.knowledgeList = [];
        $scope.faqList = [];

        angular.forEach(newsList.rows, function(news){
           $scope.newsList.push(news.cell);
        });

        angular.forEach(eventList.rows, function(event){
            $scope.eventList.push(event.cell);
        });

        angular.forEach(knowledgeList.rows, function(knowledge){
            $scope.knowledgeList.push(knowledge.cell);
        });

        angular.forEach(faqList.rows, function(faq){
            $scope.faqList.push(faq.cell);
        });
    }])
;