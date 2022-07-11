import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { login } from '../../store/session';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const AccountButton = () => {
    const dispatch = useDispatch()

    const [showMenu, setShowMenu] = useState(false)

    const demoLogin = async (e) => {
        e.preventDefault();
        await dispatch(login('demo@aa.io', 'password'));
      };

    const openMenu = () => {
        if (showMenu) {
            return
        } else {
            setShowMenu(true)
        }
    }

    useEffect(() => {
        if (!showMenu) return

        const closeMenu = () => {
            setShowMenu(false)
        }

        document.addEventListener('click', closeMenu)

        return () => document.removeEventListener('click', closeMenu)
    }, [showMenu])

    return (
        <div>
            <button onClick={openMenu} id='account-links-button'>
                Account
            </button>
            {showMenu && (
                <ul>
                    <li>
                        <Link to='/login' exact={true} activeClassName='active'>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/sign-up' exact={true} activeClassName='active'>
                            Sign Up
                        </Link>
                    </li>
                    <li>
                        <button onClick={demoLogin}>Demo Login</button>
                    </li>
                    <li>
                        <LogoutButton />
                    </li>
                </ul>
            )}
        </div>
    )
}

export default AccountButton
