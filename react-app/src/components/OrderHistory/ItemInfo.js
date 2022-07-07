import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { viewProducts } from "../../store/products"

const ItemInfo = ({ order }) => {
    const dispatch = useDispatch()

    const products = useSelector((state) => {
        return Object.values(state.products)
    });

    const itemArr = products.filter(product => product.id == order.product_id )
    const item = itemArr[0]
    console.log('ITEM ->', item.name)


    useEffect(() => {
        dispatch(viewProducts())
    }, [dispatch])

    return (
        <div>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <img src={item.img_one} alt={`${item.name}-image`} />
        </div>
    )
}

export default ItemInfo
