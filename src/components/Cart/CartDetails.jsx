import React, { useRef, useCallback, useState, useEffect } from "react"
import { MdClose } from "react-icons/md"
import { useShoppingCart } from "../../context/CartContext/CartContext"
import useMesssge from "../../context/MessageContext/MessageContext"
import { useOptions } from "../../context/OptionsContext/OptionsContext"
import "./cart.scss"

const CartDetails = () => {
  const { openOptions, setOpenOptions, product } = useOptions()
  const { increaseCartQuantity } = useShoppingCart()
  const { setFlash } = useMesssge()

  const optionsRef = useRef(null)
  const sizeRef = useRef(null)
  const colorRef = useRef(null)

  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")

  const closeCartOnWindowClick = useCallback(
    (e) => {
      if (!optionsRef.current?.contains(e.target)) {
        setOpenOptions(false)
      }
    },
    [setOpenOptions]
  )

  useEffect(() => {
    if (Object.keys(product).length) {
      setSelectedSize(product?.size[0] || "null")
      setSelectedColor(product?.color[0] || "null")
    }

    document.addEventListener("mousedown", closeCartOnWindowClick)

    return () => {
      document.removeEventListener("mousedown", closeCartOnWindowClick)
    }
  }, [openOptions, closeCartOnWindowClick, product])

  const selectSize = (e, sz) => {
    e.preventDefault()
    setSelectedSize(sz)
    ;[...sizeRef?.current.children].map((btn) =>
      btn.classList.remove("selected")
    )
    e.target.classList.add("selected")
  }

  const selectColor = (e, clr) => {
    e.preventDefault()
    setSelectedColor(clr)
    ;[...colorRef?.current.children].map((btn) =>
      btn.classList.remove("selected")
    )
    e.target.classList.add("selected")
  }

  const handleAddToCart = (e, id) => {
    e.preventDefault()
    const size = selectedSize.toLocaleLowerCase()
    const color = selectedColor.toLocaleLowerCase()
    increaseCartQuantity(id, size, color)
    setFlash({
      message: "Product added!",
      type: true,
    })
  }

  return (
    <div
      key={product?._id}
      ref={optionsRef}
      className={`cart-detail-container ${openOptions ? "open" : ""}`}
    >
      <div className="cart-detail_header cart-header">
        <h1>options</h1>
        <button className="btn btn-close" onClick={() => setOpenOptions(false)}>
          <span>
            <MdClose />
          </span>
        </button>
      </div>
      <div className="cart-detail_content">
        {product ? (
          <>
            <div className="top">
              <div className="item-img">
                <img src={product.img} alt="" />
              </div>
              <div className="details">
                <p>{product.title}</p>
                <p className="price">${product.price}</p>
              </div>
            </div>
            <p>
              Size <span>{selectedSize}</span>
            </p>
            <div className="middle" ref={sizeRef}>
              {product.size?.map((sz, idx) => (
                <button
                  key={idx}
                  className="cart_input-readonly border"
                  onClick={(e) => selectSize(e, sz)}
                >
                  {sz}
                </button>
              ))}
            </div>
            <p>
              Color <span>{selectedColor}</span>
            </p>
            <div className="middle" ref={colorRef}>
              {product.color?.map((clr, idx) => (
                <button
                  key={idx}
                  className="cart_input-readonly border"
                  style={{ borderColor: clr }}
                  onClick={(e) => selectColor(e, clr)}
                >
                  {clr}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p>No Item selected to show.</p>
        )}
      </div>
      <div className="cart-footer">
        <button
          className="btn btn-checkout"
          onClick={(e) => handleAddToCart(e, product._id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default CartDetails
