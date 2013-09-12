'use strict';

KnowledgeModule.route = {
    list: '/knowledge',
    page: '/knowledge/:id'
};

KnowledgeModule.listConfig = {
    rows: 100,
    page: 1,
    sidx: 'updated_at',
    sord: 'desc',
    category_id: 3
};

KnowledgeModule.api = {
    data: '/content/data',
    list: '/content/dataprovider'
};

KnowledgeModule.views = {
    page: 'web/modules/knowledge/views/page.html',
    list: 'web/modules/knowledge/views/list.html'
};

KnowledgeModule.layout = {
    main: {
        main: App.layout.main.main
    }
};

