<?php
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/posts', [PostController::class, 'index']); // Ruta para obtener todas las publicaciones
Route::get('/posts/{id}', [PostController::class, 'show']); // Ruta para obtener una publicación específica
