import { createContext, useContext } from "react"
import { useLocalStorage } from "../../hooks/useLocalStorage"

const CartContext = createContext({})

export const useShoppingCart = () => {
  return useContext(CartContext)
}

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart-items", [])

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const getItemsQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0
  }

  const increaseCartQuantity = (id, size, color) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1, size, color }]
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1, size, color }
          } else {
            return item
          }
        })
      }
    })
  }

  const decreaseCartQuantity = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id)
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const removeFromCart = (id) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id)
    })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        getItemsQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
