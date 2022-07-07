import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { viewOrders } from "../../store/orders"
import ItemInfo from "./ItemInfo"

const OrderHistory = () => {
    const dispatch = useDispatch()

    const orders = useSelector((state) => {
        return Object.values(state.orders)
    })
    // console.log('ORDERS ->', orders)
    // const products = useSelector((state) => {
    //     return Object.values(state.products)
    // });
    // console.log('PRODUCTS', products)
    // orders.map((order) => {
    //     const item = products.filter(product => product.id == order.product_id )
    //     console.log('ITEM ->', item)
    // })

    useEffect(() => {
        dispatch(viewOrders())
    }, [dispatch])

    // useEffect(() => {
    //     dispatch(viewProducts())
    // }, [dispatch])

    return (
        <div>
            {orders?.map((order) => (
                <div key={order.id}>
                    {/* <div>{item.name}</div>
                    <div>{item.price}</div>
                    <div>{item.img_one}</div> */}
                    <ItemInfo order={order}/>
                    <div>Quantity: {order.num_of_product}</div>
                    <div>Instructions: {order.instructions}</div>
                    <br />
                </div>
            ))}
        </div>
    )
}

export default OrderHistory
