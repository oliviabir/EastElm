import React from 'react';
import { Link } from 'react-router-dom';
import './LowerNavBar.css'

const LowerNavBar = () => {
    return (
        <div className='lower-nav-container'>
            <Link to='/products' exact={true}>
                All Products
            </Link>
            <Link to='/sofas' exact={true}>
                Sofas
            </Link>
            <Link to='/tables' exact={true}>
                Tables
            </Link>
            <Link to='/chairs' exact={true}>
                Chairs
            </Link>
        </div>
    )
}

export default LowerNavBar
