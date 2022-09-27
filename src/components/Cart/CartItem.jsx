import React from "react"
import { useEffect } from "react"
import { useShoppingCart } from "../../context/CartContext/CartContext"
import useMesssge from "../../context/MessageContext/MessageContext"
import { getAllProducts } from "../../context/ProductContext/apiCalls"
import { useProduct } from "../../context/ProductContext/ProductContext"

const CartItem = ({ id, quantity, size, color }) => {
  const { products, dispatch } = useProduct()
  const { setFlash } = useMesssge()
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart()

  useEffect(() => {
    getAllProducts(dispatch)
  }, [dispatch])

  const product = products.find((item) => item._id === id)
  if (product == null) return null

  return (
    <div key={product._id} className="order-item">
      <div className="img-container">
        <img src={product.img} alt="" />
      </div>
      <div className="center">
        <h5>{product.title}</h5>
        <p>
          Size:<span>{size.toUpperCase()}</span>
        </p>
        <p>
          Color:
          <span className="oreder-item__color" style={{ borderColor: color }}>
            {color}
          </span>
        </p>
        <div className="quantity">
          <p>Quantity:</p>
          <button
            onClick={() => {
              if (quantity === 1) {
                setFlash({ message: "Product removed!", type: true })
              }
              decreaseCartQuantity(product._id)
            }}
            className="btn btn-cart-quantity"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => increaseCartQuantity(product._id, size, color)}
            className="btn btn-cart-quantity"
          >
            +
          </button>
        </div>
      </div>
      <div className="right">
        <h5>${product.price * quantity}</h5>
        <button
          className="btn btn-cart-remove"
          onClick={() => {
            removeFromCart(product._id)
            setFlash({ message: "Product removed!", type: true })
          }}
        >
          remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
