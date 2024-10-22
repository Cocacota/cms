<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\posts;

class PostController extends Controller
{
    protected $wordpressService;

    // Inyectamos el servicio de WordPress en el controlador
    

    // Método para obtener y devolver todas las publicaciones
    public function index() {
        $posts = posts::all();
        return Inertia::render('Post/index', [
            'posts' => $posts
        ]);
    }

    // Método para obtener una publicación específica por su ID
    public function show($id) {
        $post = $this->wordpressService->getPost($id); // Llama al servicio para obtener una publicación
        return response()->json($post); // Retorna la publicación en formato JSON
    }
}
