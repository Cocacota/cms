<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class WordpressService {
    protected $baseUrl;

    // El constructor obtiene la URL base de la API desde el archivo .env
    public function __construct() {
        // En la variable WORDPRESS_API_URL del .env puedes definir la URL de tu sitio WordPress
        $this->baseUrl = env('WORDPRESS_API_URL', 'http://localhost/wordpress/wp-json/wp/v2');
    }

    // Método para obtener todas las publicaciones de WordPress
    public function getPosts() {
        $response = Http::get("{$this->baseUrl}/posts");
        return $response->json(); // Retorna la respuesta en formato JSON
    }

    // Método para obtener una publicación específica por ID
    public function getPost($id) {
        $response = Http::get("{$this->baseUrl}/posts/{$id}");
        return $response->json(); // Retorna la respuesta en formato JSON
    }
}
