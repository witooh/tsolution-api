'use strict';

ProductModule.route = {
    Security: {
        list: '/product/security',
        page: '/product/security/{brand}/{series}/{name}/{id}'
    },
    Communication: {
        list: '/product/communication',
        page: '/product/communication/{brand}/{series}/{name}/{id}'
    }
};

ProductModule.api = {
    Security: {
        data: '/product/databyname',
        product: '/product/allbybrandid',
        brand: '/brand/allbytype',
        series: '/series/allbybrandid'
    },
    Communication: {
        data: '/product/databyname',
        product: '/product/allbybrandid',
        brand: '/brand/allbytype',
        series: '/series/allbybrandid'
    }
};

ProductModule.views = {
    Security:{
        page: 'web/modules/product/views/security/page.html',
        list: 'web/modules/product/views/security/list.html'
    },
    Communication: {
        page: 'web/modules/product/views/communication/page.html',
        list: 'web/modules/product/views/communication/list.html'
    }
};

ProductModule.layout = {
    main: {
        main: App.layout.main.main
    }
};

