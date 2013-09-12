'use strict';


ContactModule
    .controller('ContactPageCtrl', ['$scope', '$location', '$contactService', function ($scope, $location, $contactService) {

        $scope.contact = {name:'', email: '', message: ''};
        jQuery('#map').gMap({
            markers: [
                {
                    latitude: 13.836400,
                    longitude: 100.593677
                }
            ],
            zoom: 16
        });



        $scope.send = function(){
            console.log('click');
            $contactService.validator(function(){
                console.log('123');
                $contactService.sendMail($scope.contact);
                $scope.contact = {name:'', email: '', message: ''};
            });
        };

    }])
;