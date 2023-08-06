import { useState, useEffect } from 'react';

export default function useToken() {
    const [token, setToken] = useState();

    useEffect(() => {
        function checkToken() {
            const value = getToken()
            setToken(value)
        }

        checkToken()
    }, [token])

    function getToken() {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token)
    }

    const clearToken = () => {
        localStorage.clear()
        setToken(null)
    }

    return {
        setToken: saveToken,
        clear: clearToken,
        token
    }
}