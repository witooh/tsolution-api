'use strict';

ProductModule
    .controller('SecurityListCtrl', ['$scope', '$location', '$securityService', 'brandList', '$stateParams', function ($scope, $location, $securityService, brandList, $stateParams) {
        $scope.productList = [];
        $scope.seriesList = [];
        $scope.brandList = brandList;
        $scope.curBrandName = null;
        $scope.curBrandId = null;
        $scope.curBrandUrl = null;

        var $container = jQuery('.portfolio-container');

        $scope.changeBrand = function(id, name){
            $scope.curBrandName = name;
            $scope.curBrandId = id;
            $scope.curBrandUrl = name.replace(/[ ]/g, '-');

            $securityService.getSeriesAndProduct(id).then(function(res){
                $scope.seriesList = res[0];
                $scope.productList = res[1];
                for(var j in $scope.productList){
                    $scope.productList[j].series_url = $scope.productList[j].series_name.replace(/[ ]/g, '-');
                    $scope.productList[j].product_url = $scope.productList[j].name.replace(/[ ]/g, '-');
                }

                setTimeout(function(){
                    if($container.length){
                        $container.isotope({
                            filter: '*',
                            animationOptions: { duration: 750, easing: 'linear', queue: false  }
                        });

                        if(jQuery("div.sorting-container").length){
                            jQuery("div.sorting-container a").click(function(){
                                jQuery("div.sorting-container a").removeClass("active-sort");
                                var selector = jQuery(this).attr('data-filter');
                                jQuery(this).addClass("active-sort");
                                $container.isotope({ filter: selector, animationOptions: { duration: 750, easing: 'linear',  queue: false }});
                                return false;
                            });

                        }

                    }
                }, 500);
            });
        };

        for(var i in $scope.brandList){
            $scope.brandList[i].url = $scope.brandList[i].name.replace(/[ ]/g, '-');
            if($scope.brandList[i].url == $stateParams.brand){
                $scope.curBrandId = $scope.brandList[i].id;
                $scope.curBrandName = $scope.brandList[i].name;
            }
        }

        if($stateParams.brand != undefined){
            $scope.changeBrand($scope.curBrandId, $scope.curBrandName);
        }else{
            $location.path('/product/security/'+$scope.brandList[0].url);
        }
    }])

    .controller('SecurityPageCtrl', ['$scope', '$location', '$securityService', 'content', function ($scope, $location, $securityService, content) {
        $scope.content = content;
        $scope.content.url = $scope.content.brand_name.replace(/[ ]/g, '-');
    }])
;