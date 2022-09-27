import { PRODUCT_ACTIONS } from "./ProductActions"

const ProductReducer = (state, { type, payload }) => {
  switch (type) {
    case PRODUCT_ACTIONS.GET_ALL_PRODUCTS_START: {
      return {
        products: [],
        isLoading: true,
        isError: false,
        message: "",
      }
    }
    case PRODUCT_ACTIONS.GET_ALL_PRODUCTS_SUCCESS: {
      return {
        products: payload,
        isLoading: false,
        isError: false,
        message: "",
      }
    }
    case PRODUCT_ACTIONS.GET_ALL_PRODUCTS_FAIL: {
      return {
        products: [],
        isLoading: false,
        isError: true,
        message: payload,
      }
    }
    default: {
      return { ...state }
    }
  }
}

export default ProductReducer
