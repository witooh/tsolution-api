'use strict';
App.
    factory('$jqGrid', ['$http', function ($http) {
        var service = function(){
            var self = this;

            self.make = function(selector, options){

                self.selector = $(selector);

                self.options = {
                    destroyApi: '',
                    datatype: 'json',
                    mtype: 'GET',
                    width: '100%',
                    multiselect: true,
                    height: 350,
                    rowNum: 50,
                    rowList:[10,20,30],
                    sortname: 'updated_at',
                    sortorder: 'desc',
                    viewrecords: true,
                    gridview: true,
                    scroll: 1,
                    autowidth: true,
                    cmTemplate: { title: false },
                    multiselectWidth: 32
                };

                self.options = $.extend(self.options, options);

                self.jqGrid = self.selector.jqGrid(self.options);

            };

            self.reload = function(){
                self.jqGrid.trigger('reloadGrid');
            };

            self.addPostData = function(json){
                self.jqGrid.setGridParam({postData: json});
            };

            self.getSelectedID = function(){
                self.jqGrid.selectedID = self.jqGrid.getGridParam('selarrrow');
                return self.jqGrid.selectedID;
            };

            self.countSelectedID = function(){
                self.jqGrid.totalSelected = self.getSelectedID().length;
                return self.jqGrid.totalSelected;
            };

            self.confirmSelector = undefined;

            self.confirmRemove = function(selector){

                self.confirmSelector = $(selector);

                if(self.countSelectedID() > 0){
                    self.confirmSelector.modal('show');
                }
            };

            self.removeSelected = function(success){
                var selected = self.getSelectedID();

                $http.post(self.options.destroyApi, {id: selected}).success(function(data, status){
                    success(data, status);
                    self.confirmSelector.modal('hide');
                    self.reload();
                }).error(function(data, status){
                    error(data, status);
                });
            };

            self.search = function(data){
                self.addPostData(data);
                self.reload();
            };
        };

        return new service();
    }]);
