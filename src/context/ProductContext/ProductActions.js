export const PRODUCT_ACTIONS = {
  GET_ALL_PRODUCTS_START: "get_all_products_start",
  GET_ALL_PRODUCTS_SUCCESS: "get_all_products_success",
  GET_ALL_PRODUCTS_FAIL: "get_all_products_fail",
}

export const getProductsStart = () => ({
  type: PRODUCT_ACTIONS.GET_ALL_PRODUCTS_START,
})
export const getProductsSuccess = (products) => ({
  type: PRODUCT_ACTIONS.GET_ALL_PRODUCTS_SUCCESS,
  payload: products,
})
export const getProductsFail = (error) => ({
  type: PRODUCT_ACTIONS.GET_ALL_PRODUCTS_FAIL,
  payload: error,
})
