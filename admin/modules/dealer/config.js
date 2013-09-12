'use strict';

DealerModule.route = {
    Announce: {
        add: '/dealer/announce/add',
        edit: '/dealer/announce/:id',
        list: '/dealer/announce'
    },
    File: {
        add: '/dealer/file/add',
        edit: '/dealer/file/:id',
        list: '/dealer/file'
    },
    Request: {
        view: '/dealer/request/:id',
        list: '/dealer/request'
    }
};

DealerModule.api = {
    Announce: {
        grid: '/content/announcedataprovider',
        destroy: '/content/destroy',
        edit: '/content/update',
        data: '/content/data',
        add: '/content/create'
    },
    File: {
        grid: '/file/dataprovider',
        destroy: '/file/destroy',
        edit: '/file/update',
        data: '/file/data',
        add: '/file/create'
    },
    Request: {
        grid: '/request/dataprovider',
        data: '/request/data'
    }
};

DealerModule.views = {
    Announce: {
        add: 'modules/dealer/views/announce/add.html',
        edit: 'modules/dealer/views/announce/edit.html',
        list: 'modules/dealer/views/announce/list.html',
        form: 'modules/dealer/views/announce/form.html'
    },
    File: {
        add: 'modules/dealer/views/file/add.html',
        edit: 'modules/dealer/views/file/edit.html',
        list: 'modules/dealer/views/file/list.html',
        form: 'modules/dealer/views/file/form.html'
    },
    Request: {
        list: 'modules/dealer/views/request/list.html',
        view: 'modules/dealer/views/request/view.html'
    }
};

DealerModule.layout = {
    main: {
        main: App.layout.main.main,
        left: App.layout.main.left
    }
};

