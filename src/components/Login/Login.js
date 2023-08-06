import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import useToken from '../App/useToken'

import './Login.css';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const { setToken } = useToken()
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
        navigate('/dashboard')
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button className='button' type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
