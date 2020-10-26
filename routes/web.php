<?php

use Illuminate\Support\Facades\Route;

//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/{dd}', function () {
    return view('welcome');
});

Route::group(['middleware' => 'connection'], function () {
    Route::group(['prefix' => 'app'], function () {
        Route::get('/{vue_capture?}', function () {
            return view('welcome');
        })->where('vue_capture', '[\/\w\.-]*');
    });
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');



Route::get('{path}', function() {
    return view('welcome');
})->where('path', '.*');
