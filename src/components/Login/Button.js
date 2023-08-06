import React from 'react';
import { useNavigate } from "react-router-dom";

function LoginButton() {
    const navigate = useNavigate();

    return (
        <button className='button is-primary' onClick={() => navigate('/login')}>Login</button>
    )
}

export default LoginButton
