<?php

use App\Http\Controllers\ActivityLogController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [PageController::class, 'index'])->name('index');

Route::as('auth.')->group(function () {
    Route::view('login', 'auth.login')->name('login-page');
    Route::post('login', [AuthController::class, 'login'])->name('login');
});

// Route::group(['middleware' => 'auth'], function () {
    Route::resource('blogs', BlogController::class);
    Route::resource('activity-logs', ActivityLogController::class)->except(['create','store','edit','update','destroy']);
    Route::post('logout', [AuthController::class, 'logout'])->name('logout');
// });
