const ADD_TO_CART = 'cart/ADD_TO_CART'
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART'

const addItem = (cart) => ({
    type: ADD_TO_CART,
    cart,
})

const removeItem = (cart) => ({
    type: REMOVE_FROM_CART,
    cart
})

export const addToCart = (product) => async (dispatch) => {
    let cart = []

    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
    } else {
        cart = []
    }

    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
    dispatch(addItem(cart))
}

export const removeFromCart = (product) => async (dispatch) => {
    let cart = []

    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
    } else {
        cart = []
    }

    const newCart = cart.filter(cartItem => cartItem.id !== product.id)
    localStorage.setItem('cart', JSON.stringify(newCart))
    dispatch(removeItem(newCart))
}

const cartReducer = (state = { cart: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cart: [...action.cart]
            }
        case REMOVE_FROM_CART:
            return {
                cart: [...action.cart]
            }
        default:
            return state
    }
}

export default cartReducer
