define(['../core/Box.js','../app.js','./Header.ko!tpl'], function (Li, app) {

    app.Header = Li.extend('app.Header', Li.Box, {

        headerMenu : Li.Observable(['Home','News','Contact','About'])
    });
    return app;
});