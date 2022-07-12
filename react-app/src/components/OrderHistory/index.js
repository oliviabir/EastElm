import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Modal } from '../../context/Modal';
import { viewOrders, removeOrder } from "../../store/orders"
import ItemInfo from "./ItemInfo"
import EditOrder from "../EditOrder"
import './OrderHistory.css'

const OrderHistory = () => {
    const dispatch = useDispatch()

    const [showModal, setShowModal] = useState(false)
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
        <div className='order-history-container'>
            {orders?.map((order) => (
                <div key={order.id}>
                    <ItemInfo order={order}/>
                    {console.log('ORDER QTY***', order.num_of_product)}
                    {console.log('ORDER INSTRUCTIONS***', order.instructions)}
                    <div>Quantity: {order.num_of_product}</div>
                    <div>Instructions: {order.instructions}</div>
                    <button onClick={() => setShowModal(true)}>Edit Order Info</button>
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <EditOrder order={order} setShowModal={setShowModal} />
                        </Modal>
                    )}
                    {pushOrders(order.id)}
                    <br />
                </div>
            ))}
            <button onClick={handleCancel}>Cancel Order</button>
        </div>
    )
}

export default OrderHistory
