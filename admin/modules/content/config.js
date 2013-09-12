'use strict';

ContentModule.route = {
    add: '/content/add',
    edit: '/content/:id',
    list: '/content'
};

ContentModule.api = {
    Content: {
        grid: '/content/dataprovider',
        destroy: '/content/destroy',
        edit: '/content/update',
        data: '/content/data',
        add: '/content/create',
        inlinevalidate: '/inlinevalidate'
    }
};

ContentModule.views = {
    add: 'modules/content/views/add.html',
    edit: 'modules/content/views/edit.html',
    list: 'modules/content/views/list.html',
    form: 'modules/content/views/form.html'
};

ContentModule.layout = {
    main: {
        main: App.layout.main.main,
        left: App.layout.main.left
    }
};

