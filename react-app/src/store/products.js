const VIEW_PRODUCTS = 'products/VIEW_PRODUCTS'

const view = (products) => ({
    type: VIEW_PRODUCTS,
    products,
});

export const viewProducts = () => async (dispatch) => {
    const response = await fetch("/api/products")

    if (response.ok) {
      const products = await response.json()
      dispatch(view(products))
    }
}

const productsReducer = (state = {}, action) => {
    switch (action.type) {
      case VIEW_PRODUCTS:
        const normalizedProducts = {}
        action.products.products.forEach((product) => {
          normalizedProducts[product.id] = product
        });
        return { ...normalizedProducts }
      default:
        return state
    }
};

export default productsReducer;
