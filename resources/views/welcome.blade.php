<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui" />

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <link id="theme_link" href="{{ asset('css/theme/accent.css') }}" rel="stylesheet">


        {{--    <link rel="stylesheet" href="../libs/font-awesome/css/font-awesome.min.css" type="text/css" />--}}
        {{--    <link rel="stylesheet" href="../libs/bootstrap/dist/css/bootstrap.min.css" type="text/css" />--}}
        {{--    <link rel="stylesheet" href="../assets/css/app.css" type="text/css" />--}}
        {{--    <link rel="stylesheet" href="../assets/css/style.css" type="text/css" />--}}

    </head>
    <body class="fixed-content">
        <noscript>
            <strong>К сожалению сервис не работает без Javascript. Подключите Javascript и возвращайтесь!</strong>
        </noscript>
        <div id="app"></div>
    </body>
</html>
