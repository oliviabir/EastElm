import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutCart, removeFromCart } from "../../store/cart";
import './Cart.css'

const Cart = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const cart = JSON.parse(localStorage.getItem('cart'))

    const [numOfProduct, setNumOfProduct] = useState(1)
    const [instructions, setInstructions] = useState('')
    const [checkoutComplete, setCheckoutComplete] = useState(false)
    const [itemRemoved, setItemRemoved] = useState(false)

    let orderArr = []

    const pushOrders = (orderInfo) => {
        orderArr.push(orderInfo)
    }

    const cartRemoval = (cartItem) => {
        const newCart = cart.filter(product => product.id !== cartItem.id)
        localStorage.setItem('cart', JSON.stringify(newCart))
        dispatch(removeFromCart(cartItem))
        setItemRemoved(true)
    }

    const handleCheckout = async () => {
        const product_id = orderArr.pop()

        const user_id = sessionUser.id

        const payload = {
            user_id,
            product_id,
            num_of_product: numOfProduct,
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
            <h2 className='cart-header'>Shopping Cart</h2>
            {checkoutComplete ? <div>Cart Empty</div> :
            cart?.map((cartItem) => (
                <div key={cartItem.id} className='cart-card-container'>
                    {pushOrders(cartItem.id)}
                    <img src={cartItem.img_one} className='item-img'/>
                    <div className='cart-info-container'>
                        <div className='item-name'>{cartItem.name}</div>
                        <div className='item-price'>${cartItem.price}</div>
                        <form className='cart-form'>
                            <input
                                name='num_of_product'
                                type='number'
                                value={numOfProduct}
                                onChange={(e) => setNumOfProduct(e.target.value)}
                                placeholder={'Quantity'}
                            />
                            <input
                                name='instructions'
                                type='text'
                                value={instructions}
                                onChange={(e) => setInstructions(e.target.value)}
                                placeholder={'Instructions'}
                            />
                        </form>
                        <button onClick={() => cartRemoval(cartItem)} className='remove-item-btn'>Remove Item</button>
                    </div>
                </div>
            ))}
            <button onClick={handleCheckout} className='checkout-cart-btn'>Checkout</button>
        </div>
    )
}

export default Cart
