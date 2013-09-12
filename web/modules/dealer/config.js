'use strict';

DealerModule.route = {
    announce: '/dealer/announce',
    announceView: '/dealer/announce/:id',
    download: '/dealer/download',
    support:  '/dealer/support'
};

DealerModule.api = {
    annouceList: '/content/announcedataprovider',
    announceView: '/content/data',
    request: '/request/create',
    download: '/file/dataprovider'
};

DealerModule.views = {
    main: 'web/modules/dealer/views/main.html',
    view: 'web/modules/dealer/views/view.html',
    support: 'web/modules/dealer/views/support.html',
    download: 'web/modules/dealer/views/download.html'
};

DealerModule.layout = {
    main: {
        main: App.layout.main.main
    }
};

DealerModule.announceListConfig = {
    rows: 1000,
    page: 1,
    sidx: 'updated_at',
    sord: 'desc'
};

DealerModule.fileListConfig = {
    rows: 1000,
    page: 1,
    sidx: 'updated_at',
    sord: 'desc'
};
