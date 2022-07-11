
import React from 'react';
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { login } from '../store/session';
import SearchBar from './SearchBar';

const NavBar = () => {
  const dispatch = useDispatch()

  const demoLogin = async (e) => {
    e.preventDefault();
    await dispatch(login('demo@aa.io', 'password'));
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <button onClick={demoLogin}>Demo Login</button>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to='/products' exact={true} activeClassName='active'>
            Products
          </NavLink>
        </li>
        <li>
          <SearchBar />
        </li>
        <li>
          <NavLink to='/cart' exact={true} activeClassName='active'>
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to='/orders' exact={true} activeClassName='active'>
            Order History
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
