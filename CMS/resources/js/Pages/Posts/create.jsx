import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const PostCreate = () => {
    const [titulo, setTitle] = useState('');
    const [contenido, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/posts', { titulo, contenido });
    };

    return (
        <div>
            <h1>Crear Nuevo Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título</label>
                    <input 
                        type="text" 
                        value={titulo} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Contenido</label>
                    <textarea 
                        value={contenido} 
                        onChange={(e) => setContent(e.target.value)} 
                    ></textarea>
                </div>
                <button type="submit">Crear Post</button>
            </form>
        </div>
    );
};

export default PostCreate;