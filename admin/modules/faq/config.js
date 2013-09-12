'use strict';

FAQModule.id = 2;

FAQModule.route = {
    edit: '/static/faq'
};

FAQModule.views = {
    edit: 'modules/faq/views/edit.html',
    form: 'modules/faq/views/form.html'
};

FAQModule.layout = {
    main: {
        main: App.layout.main.main,
        left: App.layout.main.left
    }
};

