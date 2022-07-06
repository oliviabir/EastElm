import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewProducts } from "../../store/products";

const Products = () => {
    const dispatch = useDispatch();

    const products = useSelector((state) => {
        return Object.values(state.products);
    });

    useEffect(() => {
        dispatch(viewProducts());
    }, [dispatch]);

    console.log('PRODUCTS*****', products)

    return products.map((product) => (
        <div>
            <img src={product.img_one} />
            <div>{product.name}</div>
            <div>${product.price}</div>
        </div>
    ))
}

export default Products
