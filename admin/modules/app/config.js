'use strict';

App.route = {
    home: '/content',
    error404: '/404',
    error500: '/500'
};

App.api = {
    domain: '../api'
};

App.layout = {
    main: {
        main: 'modules/app/views/layout.html',
        left: 'modules/app/views/leftmenu.html'
    }
};

App.views = {
    home: 'modules/app/views/home.html',
    error404: 'modules/app/views/404.html',
    error500: 'modules/app/views/500.html'
};

var api = function(path, data, params){
    var result = App.api.domain + path;
    if(data != undefined){
        if(angular.isString(data)){
            result += '/' + data;
        }else if(angular.isArray(data)){
            for(var i in data){
                result += '/' + data[i];
            }
        }
    }

    if(params != undefined && angular.isObject(params)){
        params = $.param(params);
        result += '?' + params;
    }

    return result;
};

angular.getObject = function(obj, str) {
    str = str.split(".");
    for (var i = 0; i < str.length; i++)
        obj = obj[str[i]];
    return obj;
};

angular.setObject = function(obj, str, val) {
    str = str.split(".");
    while (str.length > 1)
        obj = obj[str.shift()];
    return obj[str.shift()] = val;
};

angular.applyScopeFromChildWindow = function (funcNum, file, objectStr) {
    var scope = angular.element(document.getElementById(funcNum)).scope();
    scope.$apply(function () {
        angular.setObject(scope, objectStr, file);
    });
};

angular.ucfirst = function (str) {
    str += '';
    var f = str.charAt(0).toUpperCase();
    return f + str.substr(1);
};
