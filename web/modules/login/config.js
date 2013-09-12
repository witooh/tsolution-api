'use strict';

LoginModule.setting = {
    // http or session
    loginType: 'http',

    //if login by http
    loginBy: 'email'
};

LoginModule.route = {
    login: '/login',
    logout: '/logout'
};

LoginModule.api = {
    login: '/auth',
    check: '/checkauth',
    logout: '/logout'
};

LoginModule.views = {
    login: 'web/modules/login/views/login.html'
};
