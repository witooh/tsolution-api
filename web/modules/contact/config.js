'use strict';

ContactModule.id = 2;

ContactModule.route = {
    page: '/contact'
};

ContactModule.api = {
    data: '/content/data',
    mail: '/email/contact'
}

ContactModule.views = {
    page: 'web/modules/contact/views/page.html'
};

ContactModule.layout = {
    main: {
        main: App.layout.main.main
    }
};

