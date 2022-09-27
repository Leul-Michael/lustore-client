import React, { useEffect } from "react"
import { MdClose } from "react-icons/md"
import { useShoppingCart } from "../../context/CartContext/CartContext"
import { getAllProducts } from "../../context/ProductContext/apiCalls"
import { useProduct } from "../../context/ProductContext/ProductContext"
import "./cart.scss"
import CartItem from "./CartItem"

const Cart = ({ closeCart }) => {
  const { cartItems } = useShoppingCart()
  const { products, dispatch } = useProduct()

  useEffect(() => {
    getAllProducts(dispatch)
  }, [dispatch])

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = products.find((i) => i._id === cartItem.id)
    return total + (item?.price || 0) * cartItem.quantity
  }, 0)

  return (
    <>
      <div className="cart-header">
        <h1>My cart</h1>
        <button className="btn btn-close" onClick={closeCart}>
          <span>
            <MdClose />
          </span>
        </button>
      </div>
      <div className="cart-body">
        <p>Order summary</p>
        <div className="order-grid">
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartItem key={item.id} {...item} />)
          ) : (
            <p className="no-item">
              No <span>item</span> in your cart
            </p>
          )}
        </div>
      </div>
      <div className="cart-footer">
        <div className="total">
          <p>Total</p>
          <span>
            <b>${totalPrice}</b>
          </span>
        </div>
        <button className="btn btn-checkout">Proceed to checkout</button>
      </div>
    </>
  )
}

export default Cart
