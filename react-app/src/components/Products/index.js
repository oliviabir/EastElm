import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { viewProducts } from "../../store/products"

const Products = () => {
    const dispatch = useDispatch()

    const products = useSelector((state) => {
        return Object.values(state.products)
    });

    useEffect(() => {
        dispatch(viewProducts())
    }, [dispatch])

    return products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
            <img src={product.img_one} alt={`${product.name}-image`} />
            <div>{product.name}</div>
            <div>${product.price}</div>
        </Link>
    ))
}

export default Products
