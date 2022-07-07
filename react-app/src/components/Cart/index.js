import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutCart } from "../../store/cart";
import CartCard from "./CartCard";

const Cart = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const { cart } = useSelector(state => state.cart)
    console.log('CART - INDEX.JS', cart)
    console.log('SESSION USER', sessionUser)

    const handleSubmit = async (e) => {
        e.preventDefault()

        let user_id
        let product_id
        let num_of_products
        let instructions

        cart.map((cartItem) => {
            const payload = (
                user_id = sessionUser.id,
                product_id = cartItem.id,
                num_of_products = 1,
                instructions = ''
            )
            dispatch(checkoutCart(payload))
        })
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <CartCard />
            <button onClick={handleSubmit}>Checkout</button>
        </div>
    )
}

export default Cart
