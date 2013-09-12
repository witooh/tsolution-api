'use strict';

EventModule.route = {
    list: '/event',
    page: '/event/:id'
};

EventModule.listConfig = {
    rows: 15,
    page: 1,
    sidx: 'updated_at',
    sord: 'desc',
    category_id: 2
};

EventModule.api = {
    data: '/content/event',
    list: '/content/dataprovider'
};

EventModule.views = {
    page: 'web/modules/event/views/page.html',
    list: 'web/modules/event/views/list.html'
};

EventModule.layout = {
    main: {
        main: App.layout.main.main
    }
};

