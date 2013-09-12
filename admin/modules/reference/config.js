'use strict';

ReferenceModule.id = 3;

ReferenceModule.route = {
    edit: '/static/reference'
};

ReferenceModule.views = {
    edit: 'modules/reference/views/edit.html',
    form: 'modules/reference/views/form.html'
};

ReferenceModule.layout = {
    main: {
        main: App.layout.main.main,
        left: App.layout.main.left
    }
};

