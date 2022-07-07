import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewOrders } from "../../store/orders";

const OrderHistory = () => {
    const dispatch = useDispatch()

    const orders = useSelector((state) => {
        return Object.values(state.orders)
    })

    useEffect(() => {
        dispatch(viewOrders())
    }, [dispatch])

    return (
        <div>
            {orders?.map((order) => (
                <div>
                    <div>{order.user_id}</div>
                    <div>{order.product_id}</div>
                    <div>{order.num_of_product}</div>
                    <div>{order.instructions}</div>
                </div>
            ))}
        </div>
    )
}

export default OrderHistory
