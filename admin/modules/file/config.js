'use strict';

FileModule.route = {
    list: '/file'
};

FileModule.api = {

};

FileModule.views = {
    list: 'modules/file/views/list.html'
};

FileModule.layout = {
    main: {
        main: App.layout.main.main,
        left: App.layout.main.left
    }
};

