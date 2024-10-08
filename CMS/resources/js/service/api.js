// src/services/api.js
import axios from 'axios';

// Define la URL base de la API de Laravel
const API_URL = 'http://localhost:8000/api';

// Función para obtener todos los posts
export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
