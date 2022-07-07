const VIEW_ORDERS = 'orders/VIEW_ORDERS'

const view = (orders) => ({
    type: VIEW_ORDERS,
    orders,
})

export const viewOrders = () => async (dispatch) => {
    const response = await fetch('/api/orders')

    if (response.ok) {
        const orders = await response.json()
        dispatch(view(orders))
    }
}

const ordersReducer = (state = {}, action) => {
    switch (action.type) {
        case VIEW_ORDERS:
            const normalizedOrders = {}
            action.orders.orders.forEach((order) => {
                normalizedOrders[order.id] = order
            })
            return {...normalizedOrders}
        default:
            return state
    }
}

export default ordersReducer
