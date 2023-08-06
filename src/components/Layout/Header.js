import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useToken from '../App/useToken'

import LoginButton from '../Login/Button';
import Logout from '../Logout/Logout';

export default function Header() {
    const { token, clear } = useToken()

    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-start">
                    <Link className='navbar-item' to='/'>Home</Link>
                    <Link className='navbar-item' to='/dashboard'>Dashboard</Link>
                    <Link className='navbar-item' to='/preferences'>Preferences</Link>
                </div>

                <div className='navbar-end'>
                    {(!token && <LoginButton />)}
                    {(token && <Logout clear={clear} />)}
                </div>
            </nav>
        </div>
    )
}