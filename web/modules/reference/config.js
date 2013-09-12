'use strict';

ReferenceModule.id = 3;

ReferenceModule.route = {
    page: '/reference'
};

ReferenceModule.api = {
    data: '/content/data'
}

ReferenceModule.views = {
    page: 'web/modules/reference/views/page.html'
};

ReferenceModule.layout = {
    main: {
        main: App.layout.main.main
    }
};

