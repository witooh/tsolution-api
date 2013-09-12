'use strict';

App
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