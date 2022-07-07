import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/cart";
import { checkoutCart } from "../../store/cart";

const CartCard = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cart)

    // const sessionUser = useSelector((state) => state.session.user);

    // const [productId, setProductId] = useState(1)
    // const [numOfProduct, setNumOfProduct] = useState(1)
    // const [instructions, setInstructions] = useState('')


    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const payload = {
    //       user_id: sessionUser.id,
    //       productId,
    //       numOfProduct,
    //       instructions
    //     };

    //     let createdOrder = await dispatch(checkoutCart(payload))
        // let createdOrder;

        // try {
        //   createdBill = await dispatch(addBill(payload));
        // } catch (error) {
        //   if (error instanceof ValidationError) setErrors(errors.error);
        //   else setErrors(error.toString().slice(7));
        // }

    //     if (createdOrder) {
    //       console.log('ORDER CREATED: ', createdOrder);
    //     }
    //   };

    return cart.map((cartItem) => (
        <div key={cartItem.id}>
            <div>{cartItem.name}</div>
            <div>${cartItem.price}</div>
            <img src={cartItem.img_one} />
            <button onClick={() => dispatch(removeFromCart(cartItem))}>Remove Item</button>
            {/* <form onSubmit={handleSubmit}>
                {setProductId(cartItem.id)}
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
    ))
}

export default CartCard
