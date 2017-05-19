define([
    //Your app files

    'app.js',

    //Core libraries
    'jquery',

    //Lui files used by this example.
    'core/Box.js',
    'components/Button.js',
    'core/layout/flex.css!css',    //CSS3 Flexbox helper. Useful for layout
    'core/layout/custom.css!css',

    //custom js files
    'app/Header.js',
    'app/MainComponent.js',
    'app/Sidebar.js',
    'app/View.js'
], function(app, $, Li) {
    $(document).ready(function () {
        var df = document.createDocumentFragment();
        df.appendChild(document.body.firstElementChild);

        var template = new Li.Template(df);
        document.body.appendChild(template.toDocumentFragment({}));
    });
});