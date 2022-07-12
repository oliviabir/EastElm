
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import LowerNavBar from '../LowerNavBar';
import SearchBar from '../SearchBar';
import AccountButton from './AccountButton';
import './NavBar.css'

const NavBar = () => {

  return (
    <nav>
      <ul>
        <li>
          <SearchBar />
        </li>
        <li>
          <NavLink to='/' exact={true} className='name-home-link'>
            east-elm
          </NavLink>
        </li>
        <div className='right-links'>
          <li>
            <NavLink to='/orders' exact={true} id='order-history-link'>
              Order History
            </NavLink>
          </li>
          <li>
            <NavLink to='/cart' exact={true} id='cart-link'>
              Cart
            </NavLink>
          </li>
          <li>
            <AccountButton />
          </li>
        </div>
      </ul>
      <LowerNavBar className='lower-nav' />
    </nav>
  );
}

export default NavBar;
