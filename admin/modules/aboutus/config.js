'use strict';

AboutUsModule.id = 4;

AboutUsModule.route = {
    edit: '/static/aboutus'
};

AboutUsModule.views = {
    edit: 'modules/aboutus/views/edit.html',
    form: 'modules/aboutus/views/form.html'
};

AboutUsModule.layout = {
    main: {
        main: App.layout.main.main,
        left: App.layout.main.left
    }
};

