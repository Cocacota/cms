// src/components/PostsList.js
import React, { useEffect, useState } from 'react';
import { getPosts } from '../service/api'; // Importa la función que obtiene los posts

const PostsList = () => {
  const [posts, setPosts] = useState([]); // Estado para almacenar los posts
  const [loading, setLoading] = useState(true); // Estado para el indicador de carga

  // useEffect para ejecutar cuando el componente se monta
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts(); // Llama a la API para obtener los posts
        setPosts(data); // Almacena los posts en el estado
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false); // Desactiva el indicador de carga
      }
    };
    fetchPosts(); // Ejecuta la función para obtener los posts
  }, []); // El arreglo vacío asegura que solo se ejecute una vez al montar el componente

  // Muestra un mensaje de carga mientras los posts se están obteniendo
  if (loading) {
    return <p>Cargando publicaciones...</p>;
  }

  return (
    <div>
      <h1>Publicaciones del Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
