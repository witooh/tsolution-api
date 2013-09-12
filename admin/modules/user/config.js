'use strict';

UserModule.route = {
    add: '/user/add',
    edit: '/user/:id',
    list: '/user',
    changepwd: '/changepwd'
};

UserModule.api = {
    grid: '/user/dataprovider',
    destroy: '/user/destroy',
    edit: '/user/update',
    data: '/user/data',
    add: '/user/create',
    inlinevalidate: '/inlinevalidate',
    changepwd: '/user/changepwd',
    reset: '/user/resetpwd'
};

UserModule.views = {
    add: 'modules/user/views/add.html',
    edit: 'modules/user/views/edit.html',
    list: 'modules/user/views/list.html',
    changepwd: 'modules/user/views/change_password.html'
};

UserModule.layout = {
    main: {
        main: App.layout.main.main,
        left: App.layout.main.left
    }
};

