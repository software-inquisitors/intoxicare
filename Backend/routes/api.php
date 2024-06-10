<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\IntoxicationController;
use App\Http\Controllers\Api\TypeIntoxicationController;
use App\Http\Controllers\Api\GraphController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::apiResource('User', UserController::class);
Route::apiResource('Intoxication', IntoxicationController::class);
Route::apiResource('TypeIntoxication', TypeIntoxicationController::class);

Route::controller(GraphController::class)->group(function () {
    Route::get('/Graph/index', 'index');
    Route::get('/Graph/reportDate', 'reportDate');
});
