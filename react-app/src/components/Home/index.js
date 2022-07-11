import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Home = () => {
    const products = useSelector((state) => {
        return Object.values(state.products)
    })

    const tables = products.filter(product => product.category === 'tables')
    const sofas = products.filter(product => product.category === 'sofas')
    const chairs = products.filter(product => product.category === 'chairs')

    // const tableArr = [tables[0], tables[1], tables[2]]

    return (
        <div>
            <p>Categories</p>
            <div>
                <Link to={`/tables`} className='category-link-container'>
                    <img src={tables[6].img_one} alt={`${tables[6].name}-image`} className='category-link-image' />
                    <div className='category-link-name'>{tables[6].name}</div>
                    <div className='category-link-price'>${tables[6].price}</div>
                    <br />
                </Link>
                <Link to={`/sofas`} className='category-link-container'>
                    <img src={sofas[2].img_one} alt={`${sofas[2].name}-image`} className='category-link-image' />
                    <div className='category-link-name'>{sofas[2].name}</div>
                    <div className='category-link-price'>${sofas[2].price}</div>
                    <br />
                </Link>
                <Link to={`/chairs`} className='category-link-container'>
                    <img src={chairs[9].img_one} alt={`${chairs[9].name}-image`} className='category-link-image' />
                    <div className='category-link-name'>{chairs[9].name}</div>
                    <div className='category-link-price'>${chairs[9].price}</div>
                    <br />
                </Link>
            </div>
            <p>Featured Products</p>
            <div>
                <Link to={`/products/${products[2].id}`} className='featured-link-container'>
                    <img src={products[2].img_one} alt={`${products[2].name}-image`} className='featured-link-image' />
                    <div className='featured-link-name'>{products[2].name}</div>
                    <div className='featured-link-price'>${products[2].price}</div>
                    <br />
                </Link>
                <Link to={`/products/${products[5].id}`} className='featured-link-container'>
                    <img src={products[5].img_one} alt={`${products[5].name}-image`} className='featured-link-image' />
                    <div className='featured-link-name'>{products[5].name}</div>
                    <div className='featured-link-price'>${products[5].price}</div>
                    <br />
                </Link>
                <Link to={`/products/${products[7].id}`} className='featured-link-container'>
                    <img src={products[7].img_one} alt={`${products[7].name}-image`} className='featured-link-image' />
                    <div className='featured-link-name'>{products[7].name}</div>
                    <div className='featured-link-price'>${products[7].price}</div>
                    <br />
                </Link>
                <Link to={`/products/${products[24].id}`} className='featured-link-container'>
                    <img src={products[24].img_one} alt={`${products[24].name}-image`} className='featured-link-image' />
                    <div className='featured-link-name'>{products[24].name}</div>
                    <div className='featured-link-price'>${products[24].price}</div>
                    <br />
                </Link>
            </div>
        </div>
    )
}

export default Home
