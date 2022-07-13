
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import LowerNavBar from '../LowerNavBar';
import SearchBar from '../SearchBar';
import AccountButton from './AccountButton';
import './NavBar.css'

const NavBar = () => {

  const sessionUser = useSelector(state => state.session.user)

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
          {sessionUser ?
            <div>
                <NavLink to='/orders' exact={true} id='order-history-link'>
                  Order History
                </NavLink>
                <NavLink to='/cart' exact={true} id='cart-link'>
                  Cart
                </NavLink>
            </div>
            : null}
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
