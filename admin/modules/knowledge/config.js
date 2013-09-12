'use strict';

KnowledgeModule.id = 1;

KnowledgeModule.route = {
    edit: '/static/knowledge'
};

KnowledgeModule.views = {
    edit: 'modules/knowledge/views/edit.html',
    form: 'modules/knowledge/views/form.html'
};

KnowledgeModule.layout = {
    main: {
        main: App.layout.main.main,
        left: App.layout.main.left
    }
};

