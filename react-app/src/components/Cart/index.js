import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutCart } from "../../store/cart";
import CartCard from "./CartCard";

const Cart = () => {
    // const dispatch = useDispatch()
    // const sessionUser = useSelector((state) => state.session.user);
    // const { cart } = useSelector(state => state.cart)

    // const [numOfProduct, setNumOfProduct] = useState(1)
    // const [instructions, setInstructions] = useState('')

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     let user_id
    //     let product_id
    //     let payload

    //     cart.map((cartItem) => {
    //         // e.preventDefault()
    //         console.log('HANDLE SUBMIT HIT')

    //         user_id = sessionUser.id
    //         product_id = cartItem.id

    //         payload = (
    //             user_id,
    //             product_id,
    //             numOfProduct,
    //             instructions
    //         )
    //     })
    //     console.log('PAYLOAD', product_id)
    //     let createdOrder = await dispatch(checkoutCart(payload))
    //     if (createdOrder) {
    //         console.log('ORDER WAS CREATED')
    //     }
    // }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <CartCard />
            {/* <form onSubmit={handleSubmit}>
                <input
                    name='num_of_product'
                    type='integer'
                    value={numOfProduct}
                    onChange={(e) => setNumOfProduct(e.target.value)}
                    placeholder={'Number of products'}
                    // style={{ display: 'none' }}
                />
                <input
                    name='instructions'
                    type='text'
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder={'Instructions'}
                    // style={{ display: 'none' }}
                />
                <button type='submit'>Checkout</button>
            </form> */}
        </div>
    )
}

export default Cart
