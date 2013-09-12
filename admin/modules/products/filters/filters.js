'use strict';

ProductModule
    .filter('brandByProductType', function(){
        return function(value, brand_type){
            if(angular.isDefined(brand_type) && brand_type != null){

                var newValue = [];
                for(var i in value){
                    if(value[i].type == brand_type){
                        newValue.push(value[i]);
                    }
                }

                return newValue;
            }
            return value;
        };
    })
    .filter('seriesByBrandId', function(){
        return function(value, brand_id){

            var listname = [];
            var newValue = [];

            for(var i in value){
                if(angular.isDefined(brand_id) && brand_id != null){
                    if($.inArray(value[i].name, listname) < 0){
                        if(value[i].brand_id == brand_id){
                            listname.push(value[i].name);
                            newValue.push(value[i]);
                        }
                    }
                }else{
                    if($.inArray(value[i].name, listname) < 0){
                        newValue.push(value[i]);
                        listname.push(value[i].name);
                    }

                }
            }

            return newValue;
        };
    })
    .filter('seriesByBrandId', function(){
        return function(value, brand_id){
            if(angular.isDefined(brand_id) && brand_id != null){

                var newValue = [];
                for(var i in value){
                    if(value[i].brand_id == brand_id){
                        newValue.push(value[i]);
                    }
                }

                return newValue;
            }
            return value;
        };
    })
    .filter('showImg', function(){
        return function(value, img){
            if(angular.isDefined(value) && value != null && value != ''){
                $(img).attr('src', value);
            }else{
                $(img).attr('data-src', 'holder.js/200x150/text:No Image');
                Holder.run();
            }
        };
    })
;