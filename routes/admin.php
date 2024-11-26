<?php

use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admin')->middleware(['auth'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Admin/Index');
    })->name('admin.dashboard');

    # Demo
    Route::get('/index-template', function() {
        return Inertia::render('Admin/Template/Index');
    });
    Route::get('/create-edit-template', function() {
        return Inertia::render('Admin/Template/Create');
    });

    Route::resource('/users', UserController::class);
});