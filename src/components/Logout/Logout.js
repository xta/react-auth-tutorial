import React from 'react';

function Logout({ clear }) {
    return (
        <button onClick={() => clear()}>Logout</button>
    )
}

export default Logout
