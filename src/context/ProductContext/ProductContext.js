import React, { createContext, useContext, useReducer } from "react"
import ProductReducer from "./ProductReducer"

const INITIAL_VALUES = {
  products: [],
  isLoading: false,
  isError: false,
  message: "",
}

const ProductContext = createContext(INITIAL_VALUES)

export function useProduct() {
  return useContext(ProductContext)
}

export default function ProductProvider({ children }) {
  const [{ products, isLoading, isError, message }, dispatch] = useReducer(
    ProductReducer,
    INITIAL_VALUES
  )

  const value = {
    products,
    isLoading,
    isError,
    message,
    dispatch,
  }

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}
