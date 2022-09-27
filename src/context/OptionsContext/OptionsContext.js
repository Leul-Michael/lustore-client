import { createContext, useContext, useState } from "react"

const OptionsContext = createContext(null)

export const useOptions = () => {
  return useContext(OptionsContext)
}

const OptionsContextProvider = ({ children }) => {
  const [product, setProduct] = useState({})
  const [openOptions, setOpenOptions] = useState(false)

  const handleAddToCart = (product) => {
    setOpenOptions(true)
    setProduct(product)
  }

  const value = {
    product,
    openOptions,
    setOpenOptions,
    handleAddToCart,
  }
  return (
    <OptionsContext.Provider value={value}>{children}</OptionsContext.Provider>
  )
}

export default OptionsContextProvider
