<?php

namespace App\Http\Controllers;


use Inertia\Inertia;
use Inertia\Response;
use App\Models\posts;
use App\Models\Comentarios;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;


class PostController extends Controller
{
    
    

    // Método para obtener y devolver todas las publicaciones
    public function index() {
        $posts = posts::withCount('likes')->get(); 
            return Inertia::render('posts/index', [
            'posts' => $posts
        ]);
    }

    // Método para obtener una publicación específica por su ID
    public function show($post_id) {
        $post=posts::findOrFail($post_id);
        $comentario=Comentarios::where('post_id',$post_id)->get();
        

        
    
        return Inertia::render('posts/show',[
            'post'=>$post,
            'comentarios'=>$comentario,
        ]);
    }

    public function like($post_id){
        $post=posts::findOrFail($post_id);
        $post->update([
            'likes'=>$post["likes"]+ 1
        ]);
        return redirect()->route('posts.index');

    }

    public function create()
    {
        return Inertia::render('posts/create');
    }
    public function store(Request $request)
    {
        // Validación de los datos
        $request->validate([
            'titulo' => 'required|max:255',
            'contenido' => 'required',
        ]);

        // Crear el post
        posts::create([
            'titulo' => $request->titulo,
            'contenido' => $request->contenido,
            'user_id'=>auth::id(),
        ]);

        // Redirigir al listado de posts
        return redirect()->route('posts.index');
    }

}
