<?php

namespace App\Http\Controllers;

use App\Services\WordpressService;

class PostController extends Controller
{
    protected $wordpressService;

    // Inyectamos el servicio de WordPress en el controlador
    public function __construct(WordpressService $wordpressService) {
        $this->wordpressService = $wordpressService;
    }

    // Método para obtener y devolver todas las publicaciones
    public function index() {
        $posts = $this->wordpressService->getPosts(); // Llama al servicio para obtener las publicaciones
        return response()->json($posts); // Retorna las publicaciones en formato JSON
    }

    // Método para obtener una publicación específica por su ID
    public function show($id) {
        $post = $this->wordpressService->getPost($id); // Llama al servicio para obtener una publicación
        return response()->json($post); // Retorna la publicación en formato JSON
    }
}
