// resources/js/Pages/Post/Show.js
import React from 'react';
import LikeButton from '../../Components/LikeButton';

const ShowPost = ({ post, liked }) => {
    return (
        <div>
            <h1>{post.titulo}</h1>
            <p>{post.contenido}</p>
            <LikeButton post={post} initialLiked={liked} />
        </div>
    );
};

export default ShowPost;
