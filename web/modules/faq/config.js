'use strict';

FAQModule.route = {
    list: '/faq',
    page: '/faq/:id'
};

FAQModule.listConfig = {
    rows: 100,
    page: 1,
    sidx: 'updated_at',
    sord: 'desc',
    category_id: 4
};

FAQModule.api = {
    data: '/content/data',
    list: '/content/dataprovider'
};

FAQModule.views = {
    page: 'web/modules/faq/views/page.html',
    list: 'web/modules/faq/views/list.html'
};

FAQModule.layout = {
    main: {
        main: App.layout.main.main
    }
};

