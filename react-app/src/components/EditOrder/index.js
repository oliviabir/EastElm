import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { editOrder } from "../../store/orders";

const EditOrder = ({ order, setShowModal }) => {
    const dispatch = useDispatch()

    const [numOfProducts, setNumOfProducts] = useState(order.num_of_products)
    const [instructions, setInstructions] = useState(order.instructions)
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const payload = {
            user_id: order.user_id,
            product_id: order.product_id,
            num_of_product: numOfProducts,
            instructions
        }

        let editedOrder = await dispatch(editOrder(payload, order.id))

        if (editedOrder) {
            setErrors([])
            setShowModal(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <input
                name='num_of_product'
                type='number'
                defaultValue={order.num_of_product}
                onChange={(e) => setNumOfProducts(e.target.value)}
                placeholder={'Number of products'}
            />
            <input
                name='instructions'
                type='text'
                defaultValue={order.instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder={'Instructions'}
            />
            <button type='submit'>Confirm</button>
        </form>
    )
}

export default EditOrder
