import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutCart, removeFromCart } from "../../store/cart";

const Cart = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const { cart } = useSelector(state => state.cart)

    const [numOfProduct, setNumOfProduct] = useState(1)
    const [instructions, setInstructions] = useState('')
    const [checkoutComplete, setCheckoutComplete] = useState(false)

    let orderArr = []

    const pushOrders = (orderInfo) => {
        orderArr.push(orderInfo)
    }

    const handleCheckout = async () => {
        const product_id = orderArr.pop()

        const user_id = sessionUser.id

        const payload = {
            user_id,
            product_id,
            numOfProduct,
            instructions
        }

        let createdOrder = await dispatch(checkoutCart(payload))
        if (orderArr.length > 0) {
            handleCheckout()
        } else {
            setCheckoutComplete(true)
        }
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cart.map((cartItem) => (
                <div key={cartItem.id}>
                    {pushOrders(cartItem.id)}
                    <div>{cartItem.name}</div>
                    <div>${cartItem.price}</div>
                    <img src={cartItem.img_one} />
                    <button onClick={() => dispatch(removeFromCart(cartItem))}>Remove Item</button>
                    <form>
                        <input
                            name='num_of_product'
                            type='number'
                            value={numOfProduct}
                            onChange={(e) => setNumOfProduct(e.target.value)}
                            placeholder={'Number of products'}
                        />
                        <input
                            name='instructions'
                            type='text'
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            placeholder={'Instructions'}
                        />
                    </form>
                </div>
            ))}
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    )
}

export default Cart
