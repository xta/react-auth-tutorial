import React from 'react';
import { Link } from 'react-router-dom';

import useToken from '../App/useToken'

import LoginButton from '../Login/Button';
import Logout from '../Logout/Logout';

export default function Header({ loggedIn, setLoggedIn }) {
    // TODO: loggedIn & token are redundant. don't use both.
    // also loggedIn is the even more naive (not functional) user auth state
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
                    {(!loggedIn && <LoginButton />)}
                    {(loggedIn && <Logout clear={clear} setLoggedIn={setLoggedIn} />)}
                </div>
            </nav>
        </div>
    )
}