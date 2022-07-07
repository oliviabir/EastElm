import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const { cart } = useSelector(state => state.cart)

    return cart.map((cartItem) => (
        <div key={cartItem.id}>
            <div>{cartItem.name}</div>
            <div>${cartItem.price}</div>
            <img src={cartItem.img_one} />
        </div>
    ))
}

export default Cart
