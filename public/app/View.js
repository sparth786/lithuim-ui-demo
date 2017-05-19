//app/View.js
define(['../core/Box.js', '../app.js', '../app/View.ko!tpl'], function (Li, app) {
    app.View = Li.extend('app.View', Li.Box, {
        constructor: function () {
            this.super(arguments);
            this.on({
            });
        }
    });
    return app;
});