import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/cart";

const CartCard = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cart)

    return cart.map((cartItem) => (
        <div key={cartItem.id}>
            <div>{cartItem.name}</div>
            <div>${cartItem.price}</div>
            <img src={cartItem.img_one} />
            <button onClick={() => dispatch(removeFromCart(cartItem))}>Remove Item</button>
        </div>
    ))
}

export default CartCard
