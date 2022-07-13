import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import './SearchBar.css'

const SearchBar = () => {
    const products = useSelector((state) => {
        return Object.values(state.products)
    })

    const [query, setQuery] = useState('')

    return (
        <div className='searchbar-container'>
            <input
                className='searchbar-input'
                id='searchbar-input'
                placeholder='Search Products'
                onChange={(e) => setQuery(e.target.value)}
            />
            {query
            ? products.filter((product) => {
                if (product.name.toLowerCase().includes(query.toLowerCase())) {
                    return product
                } else if (product.category.toLowerCase().includes(query.toLowerCase())) {
                    return product
                }
            })
            .map((product) => (
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        <p className='search-product-name'>{product.name}</p>
                    </Link>
                </div>
            ))
            : null}
        </div>
    )
}

export default SearchBar
