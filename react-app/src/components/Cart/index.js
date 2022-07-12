import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutCart, removeFromCart } from "../../store/cart";
import { updateItemQuantitiy, updateItemInstructions } from "../../store/cart";
import './Cart.css'

const Cart = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    const cart = JSON.parse(localStorage.getItem('cart'))

    const [instructions, setInstructions] = useState('')
    const [checkoutComplete, setCheckoutComplete] = useState(false)
    const [itemRemoved, setItemRemoved] = useState(false)

    let priceArr = [0]

    const pushPrice = (price) => {
        priceArr.push(price)
    }

    const updateQuantity = (e, cartItem) => {
        let cart = []

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        } else {
            cart = []
        }

        cart.forEach(product => {
            if (product.id === cartItem.id) {
                product.num_of_product = e.target.value
                dispatch(updateItemQuantitiy(product, e.target.value))
            }
        })

        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const updateInstructions = (e, cartItem) => {
        let cart = []

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        } else {
            cart = []
        }

        cart.forEach(product => {
            if (product.id === cartItem.id) {
                product.instructions = e.target.value
                dispatch(updateItemInstructions(product, e.target.value))
            }
        })

        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const cartRemoval = (cartItem) => {
        const newCart = cart.filter(product => product.id !== cartItem.id)

        localStorage.setItem('cart', JSON.stringify(newCart))

        dispatch(removeFromCart(cartItem))
        setItemRemoved(current => !current)

        console.log('PRODUCT --->', cart.pop())
    }

    const totalPrice = () => {
        const priceSum = priceArr.reduce(
            (prev, curr) => prev + curr
        );
        return priceSum
    }

    const handleCheckout = async () => {
        const product = cart.pop()

        const user_id = sessionUser.id

        const payload = {
            user_id,
            product_id: product.id,
            num_of_product: product.num_of_product,
            instructions: product.instructions
        }

        await dispatch(checkoutCart(payload))
        await dispatch(removeFromCart(product))

        if (cart.length > 0) {
            handleCheckout()
        } else {
            setCheckoutComplete(true)
        }
    }

    return (
        <div className='cart-page'>
            <h2 className='cart-header'>Shopping Cart</h2>
            {checkoutComplete ? <div>Cart Empty</div> :
                cart?.map((cartItem) => (
                    <div key={cartItem.id} className='cart-card-container'>
                        <img src={cartItem.img_one} className='item-img' />
                        <div className='cart-info-container'>
                            <div className='item-name'>{cartItem.name}</div>
                            <div className='item-price'>${cartItem.price}</div>
                            {pushPrice(cartItem.price)}
                            <form className='cart-form'>
                                <input
                                    name='num_of_product'
                                    type='number'
                                    defaultValue={cartItem.num_of_product}
                                    className='quantity-input'
                                    onChange={(e) => updateQuantity(e, cartItem)}
                                    placeholder={cartItem.num_of_product}
                                />
                                <input
                                    name='instructions'
                                    type='text'
                                    defaultValue={cartItem.instructions}
                                    className='instructions-input'
                                    onChange={(e) => updateInstructions(e, cartItem)}
                                    placeholder={'Delivery Instructions'}
                                />
                            </form>
                            <button onClick={() => cartRemoval(cartItem)} className='remove-item-btn'>Remove Item</button>
                        </div>
                    </div>
                ))}
            {priceArr.length > 1 ? <p className='total-price-display'>Total:${totalPrice()}</p> : null}
            <button onClick={handleCheckout} className='checkout-cart-btn'>Checkout</button>
        </div>
    )
}

export default Cart
