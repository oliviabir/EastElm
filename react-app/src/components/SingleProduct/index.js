import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { viewProducts } from "../../store/products";

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

    return (
        <div>
            <img src={product.img_one} />
            <div>{product.name}</div>
            <div>${product.price}</div>
        </div>
    )
}

export default SingleProduct
