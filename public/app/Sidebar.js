define(['../core/Box.js', '../app.js', './Sidebar.ko!tpl'], function (Li, app) {

    app.Sidebar = Li.extend('app.Sidebar', Li.Box, {
        menu:Li.Observable(['List', 'Post Data']),
        constructor: function () {
            this.super(arguments);
        }
    });
    return app;
});