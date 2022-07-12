import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { viewProducts } from "../../store/products"

const ItemInfo = ({ order }) => {
    const dispatch = useDispatch()

    const products = useSelector((state) => {
        return Object.values(state.products)
    });
    console.log('ORDER QTY', order.num_of_product)

    const itemArr = products.filter(product => product.id == order.product_id )
    const item = itemArr[0]

    const getProductPrice = (price) => {
        let productPrice
        if (order.num_of_product) {
            productPrice = price * order.num_of_product
        } else {
            productPrice = price
        }
        return productPrice
    }

    useEffect(() => {
        dispatch(viewProducts())
    }, [dispatch])

    return (
        <div>
            <div>{item?.name}</div>
            <div>${getProductPrice(item.price)}</div>
            <img src={item?.img_one} alt={`${item?.name}-image`} />
        </div>
    )
}

export default ItemInfo
