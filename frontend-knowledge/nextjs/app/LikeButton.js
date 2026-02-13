'use client'; // This tells react that this component should be rendered on the client side,
//  not the server side. This is necessary because we are using state and event handlers,
//  which are not supported in server components.

import { useState } from 'react';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes+1);
    }
    return <button onClick={handleClick}>I like more Likes ({likes})</button>
}