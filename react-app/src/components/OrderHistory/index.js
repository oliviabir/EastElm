import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { viewOrders, removeOrder } from "../../store/orders"
import ItemInfo from "./ItemInfo"

const OrderHistory = () => {
    const dispatch = useDispatch()

    const [orderCanceled, setOrderCanceled] = useState(false)

    const orders = useSelector((state) => {
        return Object.values(state.orders)
    })

    useEffect(() => {
        dispatch(viewOrders())
    }, [dispatch, orderCanceled])

    let orderArr = []

    const pushOrders = (id) => {
        orderArr.push(id)
    }

    const handleCancel = () => {
        const itemRemoved = orderArr.pop()

        dispatch(removeOrder(itemRemoved))

        if (orderArr.length > 0) {
            handleCancel()
        } else {
            setOrderCanceled(true)
        }
    }

    return (
        <div>
            {orders?.map((order) => (
                <div key={order.id}>
                    <ItemInfo order={order}/>
                    <div>Quantity: {order.num_of_product}</div>
                    <button>Edit Quantity</button>
                    <div>Instructions: {order.instructions}</div>
                    <button>Edit Instructions</button>
                    {pushOrders(order.id)}
                    <br />
                </div>
            ))}
            <button onClick={handleCancel}>Cancel Order</button>
        </div>
    )
}

export default OrderHistory
