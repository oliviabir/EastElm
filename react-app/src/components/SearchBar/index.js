import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

const SearchBar = () => {
    const products = useSelector((state) => {
        return Object.values(state.products)
    })

    const [query, setQuery] = useState('')

    return (
        <div>
            <input
                placeholder='Search'
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
                        <p>{product.name}</p>
                    </Link>
                </div>
            ))
            : null}
        </div>
    )
}

export default SearchBar
