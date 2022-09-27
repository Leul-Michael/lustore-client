import { useLocation } from "react-router-dom"
import { useOptions } from "../../context/OptionsContext/OptionsContext"
import "./single.scss"

const Single = () => {
  const location = useLocation()
  const product = location.state.product

  const { handleAddToCart } = useOptions()

  window.scrollTo(0, 0)

  return (
    <section className="single">
      <div className="container">
        <div className="item-grid">
          <div className="item-img">
            <img src={product.img} alt="" />
          </div>
          <div className="item-description">
            <h2 className="item-title">{product.title}</h2>
            <p className="price">${product.price}</p>
            <div className="color-container">
              <p>Color</p>
              <div className="colors">
                {product?.color.map((clr, idx) => (
                  <div
                    key={idx}
                    className="color"
                    style={{ backgroundColor: clr }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="color-container">
              <p>Size</p>
              <div className="sizes">
                {product?.size.map((sz, idx) => (
                  <p key={idx} className="size">
                    {sz}
                  </p>
                ))}
              </div>
            </div>
            <div className="description">
              <div className="top">
                <p>Description</p>
              </div>
              <p className="content">{product.desc}</p>
            </div>
            <div className="item-buttons">
              <button
                className="btn btn-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Single
