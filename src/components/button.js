import React from 'react';

export default function Button({ content, clickHandler }) {
    return (
        <button onClick={clickHandler}>
            {content}
        </button>
    );
}
