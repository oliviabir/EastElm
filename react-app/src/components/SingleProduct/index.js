import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { viewProducts } from "../../store/products";
import { addToCart } from "../../store/cart";
import Reviews from "../Reviews";
import './SingleProduct.css'

const SingleProduct = () => {
    const productIdObj = useParams()
    const productId = productIdObj.id

    const dispatch = useDispatch();

    const products = useSelector((state) => {
        return Object.values(state.products);
    });

    const product = products.find(product => product.id == productId)

    useEffect(() => {
        dispatch(viewProducts());
    }, [dispatch]);

    const handleAddItemToCart = () => {
        dispatch(addToCart(product))
    }

    return (
        <div className='single-product-container'>
            <div className='single-product-info-container'>
                <img src={product?.img_one} className='single-product-image'/>
                <div className='single-product-right-panel'>
                    <div className='single-product-name'>{product?.name}</div>
                    <div className='single-product-price'>${product?.price}</div>
                    <button onClick={handleAddItemToCart} className='single-product-add-button'>Add to Cart</button>
                </div>
            </div>
            <div className='single-product-reviews-container'>
                <Reviews id={product?.id} product={product}/>
            </div>
        </div>
    )
}

export default SingleProduct
