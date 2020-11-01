const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/scss/theme/accent.scss',  'public/css/theme')
    .sass('resources/sass/scss/theme/danger.scss',  'public/css/theme')
    .sass('resources/sass/scss/theme/info.scss',    'public/css/theme')
    .sass('resources/sass/scss/theme/primary.scss', 'public/css/theme')
    .sass('resources/sass/scss/theme/success.scss', 'public/css/theme')
    .sass('resources/sass/scss/theme/warn.scss',    'public/css/theme')
    .sass('resources/sass/scss/theme/warning.scss', 'public/css/theme');

if( !mix.inProduction() ) {
    mix.webpackConfig({
        devtool:"inline-source-map",
    });
    mix.sourceMaps();
}
