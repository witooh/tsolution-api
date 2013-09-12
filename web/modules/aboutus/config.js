'use strict';

AboutUsModule.id = 4;

AboutUsModule.route = {
    page: '/aboutus'
};

AboutUsModule.api = {
    data: '/content/data'
}

AboutUsModule.views = {
    page: 'web/modules/aboutus/views/page.html'
};

AboutUsModule.layout = {
    main: {
        main: App.layout.main.main
    }
};

