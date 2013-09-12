'use strict';

UserModule
    .controller('UserListCtrl', ['$scope', '$http', '$jqGrid', function ($scope, $http, $jqGrid) {
        var self = this;

        $scope.confirmDelete = function () {
            $jqGrid.confirmRemove('#confirmModal');
        };

        $scope.remove = function () {
            $jqGrid.removeSelected(function () {
                $.gritter.add({
                    title: 'Remove user successful',
                    text: $jqGrid.countSelectedID() + ' User(s) removed'
                });
            });
        };

        $scope.search = function() {
            $jqGrid.search($scope.find)
        };

        $jqGrid.make('#table', {
            destroyApi: api(UserModule.api.destroy),
            url: api(UserModule.api.grid),
            colNames: ['Name', 'E-Mail', 'Company Name', 'Admin User','Created Date-Time', 'Updated Date-Time'],
            colModel: [
                {
                    name: 'name', index: 'name', formatter: function (value, options, rowObject) {
                        return '<a href="' + '#/user/' + rowObject.id + '">' + value + '</a>';
                    }
                },
                { name: 'email', index: 'email', align: 'left' },
                { name: 'company_name', index: 'company_name', align: 'left' },
                { name: 'is_admin', index: 'is_admin', align: 'center', formatter: function(value, options, rawObject){
                    return value == '1' ? '<i class="icon-ok"></i>' : '<i class="icon-remove"></i>';
                } },
                { name: 'created_at', index: 'created_at', align: 'center' },
                { name: 'updated_at', index: 'updated_at', align: 'center' }
            ],
            pager: '#pager'
        });

    }])

    .controller('UserAddCtrl', ['$scope', '$http', '$location', '$validator', function ($scope, $http, $location, $validator) {
        $scope.save = function(){
            $validator.make('#form', {
                remote: {
                    rule: 'create_user',
                    field: ['email']
                },
                rules: {
                    name: {required: true},
                    email: {required: true},
                    is_admin: { required: true },
                    password: { required: true, minlength: 5 }
                },
                submitHandler: function (form) {
                    $http.post(api(UserModule.api.add), $scope.account).success(function(){
                        $.gritter.add({
                            title: 'Add new member',
                            text: $scope.account.name + ' is added'
                        });
                        $location.path(UserModule.route.list);
                    });
                }
            });
        };
    }])

    .controller('UserEditCtrl', ['$scope', '$http', '$location', '$validator', '$stateParams', '$userService', function ($scope, $http, $location, $validator, $stateParams, $userService) {

        $userService.getUserId($stateParams.id).then(function(data){
            $scope.account = data;
        }, function(){
            $scope.account = {};
        });

        $scope.confirmReset = function(){
            $('#confirmModal').modal('show');
        };

        $scope.resetpwd = function(){
            $http.post(api(UserModule.api.reset, [$stateParams.id])).success(function(){
                $('#confirmModal').modal('hide');
                $.gritter.add({
                    title: 'Reset User Password Successful',
                    text: 'Password ' + $scope.account.name + ' is reset'
                });
                $location.path(UserModule.route.list);
            });
        };

        $scope.save = function(){
            $validator.make('#form', {
                remote: {
                    rule: 'edit_user',
                    field: [{
                        field: 'email',
                        data: {
                            id: $stateParams.id
                        }
                    }]
                },
                rules: {
                    name: { required: true },
                    email: { required: true },
                    is_admin: { required: true }
                },
                submitHandler: function (form) {
                    $http.post(api(UserModule.api.edit, [$stateParams.id]), $scope.account).success(function(){
                        $.gritter.add({
                            title: 'Edit User Successful',
                            text: $scope.account.name + ' is edited'
                        });
                        $location.path(UserModule.route.list);
                    });
                }
            });
        };
    }])
    .controller('UserChangePwdCtrl', ['$scope', '$http', '$location', '$validator', '$rootScope', function ($scope, $http, $location, $validator, $rootScope) {

        $scope.account = {};

        $scope.changepwd = function(){

            $validator.make('#form', {
                remote: {
                    url: api(UserModule.api.inlinevalidate, [], {id:$rootScope.user.id}),
                    rule: 'changepwd',
                    field: ['old_password',
                        {
                            field: 'new_password',
                            data: {
                                new_password_confirmation: function(){ return $scope.account.confirm_password}
                            }
                        }]
                },
                rules: {
                    old_password: { required: true },
                    new_password: { required: true, minlength: 5 },
                    confirm_password: { required: true }
                },
                submitHandler: function (form) {
                    $http.post(api(UserModule.api.changepwd, [$rootScope.user.id]), $scope.account).success(function(){
                        $.gritter.add({
                            title: 'Change Password successful',
                            text:'After logout, you have to use a new password for login.'
                        });
                        $location.path(UserModule.route.list);
                    });
                }
            });

            return false;
        }
    }])
;