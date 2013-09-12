'use strict';

NewsModule.route = {
    list: '/news',
    page: '/news/:id'
};

NewsModule.listConfig = {
    rows: 15,
    page: 1,
    sidx: 'updated_at',
    sord: 'desc',
    category_id: 1
};

NewsModule.api = {
    data: '/content/news',
    list: '/content/dataprovider'
};

NewsModule.views = {
    page: 'web/modules/news/views/page.html',
    list: 'web/modules/news/views/list.html'
};

NewsModule.layout = {
    main: {
        main: App.layout.main.main
    }
};

