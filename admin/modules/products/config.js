'use strict';

ProductModule.route = {
    Brand: {
        add: '/products/brand/add',
        edit: '/products/brand/:id',
        list: '/products/brand'
    },
    Series: {
        add: '/products/series/add',
        edit: '/products/series/:id',
        list: '/products/series'
    },
    Product: {
        add: '/products/product/add',
        edit: '/products/product/:id',
        list: '/products/product'
    }
};

ProductModule.api = {
    Brand: {
        grid: '/brand/dataprovider',
        destroy: '/brand/destroy',
        edit: '/brand/update',
        data: '/brand/data',
        add: '/brand/create',
        all: '/brand/all'
    },
    Series: {
        grid: '/series/dataprovider',
        destroy: '/series/destroy',
        edit: '/series/update',
        data: '/series/data',
        add: '/series/create',
        all: '/series/all',
        name: '/series/name'
    },
    Product: {
        grid: '/product/dataprovider',
        destroy: '/product/destroy',
        edit: '/product/update',
        data: '/product/data',
        add: '/product/create'
    }
};

ProductModule.views = {
    Brand:{
        add: 'modules/products/views/brand/add.html',
        edit: 'modules/products/views/brand/edit.html',
        list: 'modules/products/views/brand/list.html',
        form: 'modules/products/views/brand/form.html'
    },
    Series:{
        add: 'modules/products/views/series/add.html',
        edit: 'modules/products/views/series/edit.html',
        list: 'modules/products/views/series/list.html',
        form: 'modules/products/views/series/form.html'
    },
    Product:{
        add: 'modules/products/views/product/add.html',
        edit: 'modules/products/views/product/edit.html',
        list: 'modules/products/views/product/list.html',
        form: 'modules/products/views/product/form.html'
    }

};

ProductModule.layout = {
    main: {
        main: App.layout.main.main,
        left: App.layout.main.left
    }
};

