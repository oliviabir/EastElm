import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { viewProducts } from "../../store/products";
import { addToCart } from "../../store/cart";

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
        <div>
            <img src={product.img_one} />
            <div>{product.name}</div>
            <div>${product.price}</div>
            {/* add amount range clicker */}
            <button onClick={handleAddItemToCart}>Add to Cart</button>
        </div>
    )
}

export default SingleProduct
