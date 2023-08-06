import React from 'react';

export default function Logout({ clear }) {
    return (
        <button onClick={() => clear()}>Logout</button>
    )
}
