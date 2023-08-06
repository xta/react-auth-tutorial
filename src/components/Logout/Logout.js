import React from 'react';

export default function Logout({ clear, setLoggedIn }) {

    const clearUser = () => {
        clear()
        setLoggedIn(false)
    }

    return (
        <button onClick={() => clearUser()}>Logout</button>
    )
}
