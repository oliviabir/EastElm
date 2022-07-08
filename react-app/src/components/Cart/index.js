import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutCart, removeFromCart } from "../../store/cart";
import CartCard from "./CartCard";

const Cart = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const { cart } = useSelector(state => state.cart)

    const [numOfProduct, setNumOfProduct] = useState(1)
    const [instructions, setInstructions] = useState('')
    const [checkoutComplete, setCheckoutComplete] = useState(false)

    console.log('NUM OF PRODUCTS', numOfProduct)
    console.log('INSTRUCTIONS', instructions)

    let orderArr = []

    const pushOrders = (orderInfo) => {
        orderArr.push(orderInfo)
    }

    const handleCheckout = async () => {
        // e.preventDefault()

        // orderArr.push(numOfProduct)
        // orderArr.push(instructions)

        console.log('ORDER ARRAY IN CHECKOUT', orderArr)

        const product_id = orderArr.pop()

        const user_id = sessionUser.id
        // let product_id = 1

        console.log('PRODUCT ID', product_id)
        const payload = {
            user_id,
            product_id,
            numOfProduct,
            instructions
        }

        console.log('PAYLOAD', payload)
        let createdOrder = await dispatch(checkoutCart(payload))
        if (orderArr.length > 0) {
            handleCheckout()
        } else {
            setCheckoutComplete(true)
            console.log('ORDER WAS CREATED')
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
                    </form>
                </div>
            ))}
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    )
}

export default Cart
