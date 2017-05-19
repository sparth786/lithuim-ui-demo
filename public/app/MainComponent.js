define(['../core/Box.js', '../app.js', './MainComponent.ko!tpl'], function (Li, app) {

    app.Main = Li.extend('app.Main', Li.Box, {

        fname: Li.Observable(''), //An observable..like KnockoutJS
        lname: Li.Observable(''),
        showText : Li.Observable(),
        showErr: Li.Observable(),
        constructor: function () {
            var self = this;
            self.super(arguments);
            this.showText(false);
            this.showErr(false);
            this.on({
                "submitBtn": { //listen to events on button
                    click: function () {
                        //Update observable
                        this.fname($('.namefield', this.el)[0].value);
                        this.lname($('.namefield', this.el)[1].value);
                        if(this.fname().length>0 && this.lname().length){
                            this.showErr(false);
                            self.data = {
                                fname:self.fname(),
                                lname : self.lname()
                            };
                            $.post('/addData', self.data, function (data) {
                                alert('Status:'+data);
                                self.showText(true);
                            });
                        }
                        else {
                            this.showText(false);
                            this.showErr(true);
                        }
                    }
                }
            });
        }
    });
    return app;
});