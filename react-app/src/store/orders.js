const VIEW_ORDERS = 'orders/VIEW_ORDERS'
const REMOVE_ORDER = 'orders/REMOVE_ORDER'

const view = (orders) => ({
    type: VIEW_ORDERS,
    orders,
})

const remove = (order) => ({
    type: REMOVE_ORDER,
    order,
})

export const viewOrders = () => async (dispatch) => {
    const response = await fetch('/api/orders')

    if (response.ok) {
        const orders = await response.json()
        dispatch(view(orders))
    }
}

export const removeOrder = (id) => async (dispatch) => {
    const response = await fetch(`/api/orders/${id}`, {
        method: "DELETE",
    })

    if (response.ok) {
    dispatch(remove(id));
    }

    return response;
}

const ordersReducer = (state = {}, action) => {
    switch (action.type) {
        case VIEW_ORDERS:
            const normalizedOrders = {}
            action.orders.orders.forEach((order) => {
                normalizedOrders[order.id] = order
            })
            return {...normalizedOrders}
        case REMOVE_ORDER:
            const deleteState = { ...state }
            return deleteState;
        default:
            return state
    }
}

export default ordersReducer
