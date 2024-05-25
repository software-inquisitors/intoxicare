<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PatientController;
use App\Http\Controllers\Api\IntoxicationController;
use App\Http\Controllers\Api\TypeIntoxicationController;

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

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('Patient', PatientController::class)->middleware('auth:sanctum');
    Route::apiResource('Intoxication', IntoxicationController::class)->middleware('auth:sanctum');
    Route::apiResource('TypeIntoxication', TypeIntoxicationController::class)->middleware('auth:sanctum');
});
