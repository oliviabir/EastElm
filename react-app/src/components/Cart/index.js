import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkoutCart, removeFromCart } from "../../store/cart";
import { updateItemQuantitiy, updateItemInstructions } from "../../store/cart";
import './Cart.css'

const Cart = () => {
    const dispatch = useDispatch()

    const sessionUser = useSelector((state) => state.session.user);
    const cart = JSON.parse(localStorage.getItem('cart'))

    const [checkoutComplete, setCheckoutComplete] = useState(false)
    const [itemRemoved, setItemRemoved] = useState(false)
    const [quantityChanged, setQuantityChanged] = useState(false)
    const [quantityErrors, setQuantityErrors] = useState([]);
    const [instructionErrors, setInstructionErrors] = useState([])


    const updateQuantity = (e, cartItem) => {

        if(e.target.value > 0 && e.target.value < 6) {
            setQuantityErrors([])
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

            setQuantityChanged(current => !current)
            localStorage.setItem('cart', JSON.stringify(cart))
        } else if (e.target.value < 1) {
            setQuantityErrors('Must have at least one of this item in cart')
            return
        } else if (e.target.value > 5) {
            setQuantityErrors('All items limited to a quantity of 5')
            return
        }


    }

    const updateInstructions = (e, cartItem) => {

        if (e.target.value.length < 50) {
            setInstructionErrors([])
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

        } else if (e.target.value.length > 50) {
            setInstructionErrors('Instructions limited to 50 characters')
            return
        }
    }

    const getProductPrice = (price, quantity) => {
        const productPrice = price * quantity
        return productPrice
    }

    const cartRemoval = (cartItem) => {
        const newCart = cart.filter(product => product.id !== cartItem.id)

        localStorage.setItem('cart', JSON.stringify(newCart))

        dispatch(removeFromCart(cartItem))
        setItemRemoved(current => !current)
    }

    const totalPrice = () => {
        let priceArr = []

        cart.forEach(product => {
            if (product.num_of_product) {
                const productTotal = product.price * product.num_of_product
                priceArr.push(productTotal)
            } else {
                priceArr.push(product.price)
            }
        })

        let priceSum = 0

        if (priceArr.length > 0) {
            priceSum = priceArr.reduce(
                (prev, curr) => prev + curr
            );
        }

        return priceSum
    }

    const handleCheckout = async () => {
        if (quantityErrors.length > 0) {
            return
        }

        if (instructionErrors.length > 0) {
            return
        }

        let cart = []

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        } else {
            cart = []
        }

        const user_id = sessionUser?.id

        for (let i = 0; i < cart.length; i++) {
            const product = cart[i]

            const payload = {
                user_id,
                product_id: product?.id,
                num_of_product: product?.num_of_product,
                instructions: product?.instructions
            }

            await dispatch(checkoutCart(payload))
            await dispatch(removeFromCart(product))

        }

        setCheckoutComplete(true)

    }

    return (
        <div className='cart-page'>
            <h2 className='cart-header'>Shopping Cart</h2>
            {checkoutComplete ? <div className='empty-cart-tag'>Cart Empty</div> :
                cart?.map((cartItem) => (
                    <div key={cartItem.id} className='cart-card-container'>
                        <img src={cartItem.img_one} className='item-img' />
                        <div className='cart-info-container'>
                            <div className='item-name'>{cartItem.name}</div>
                            {cartItem.num_of_product > 1 ?
                                <div className='item-price'>
                                    ${getProductPrice(cartItem.price, cartItem.num_of_product)}
                                </div>
                                : <div className='item-price'>${cartItem.price}</div>}
                            <div>{quantityErrors}</div>
                            <div>{instructionErrors}</div>
                            <form className='cart-form'>
                                <input
                                    name='num_of_product'
                                    type='number'
                                    min='1'
                                    max='5'
                                    defaultValue={cartItem.num_of_product ? cartItem.num_of_product : 1}
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
            {totalPrice() > 0 ? <p className='total-price-display'>Total:${totalPrice()}</p> : null}
            <button onClick={handleCheckout} className='checkout-cart-btn'>Checkout</button>
        </div>
    )
}

export default Cart
