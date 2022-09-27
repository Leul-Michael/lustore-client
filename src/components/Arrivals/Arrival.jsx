import "./arrival.scss"
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { useRef, useEffect } from "react"
import { useProduct } from "../../context/ProductContext/ProductContext"
import { getAllProducts } from "../../context/ProductContext/apiCalls"
import { Link } from "react-router-dom"
import { useOptions } from "../../context/OptionsContext/OptionsContext"

const Arrival = () => {
  const sliderRef = useRef(null)
  const { products, dispatch } = useProduct()
  const { handleAddToCart } = useOptions()

  useEffect(() => {
    getAllProducts(dispatch)
  }, [dispatch])

  const handleSlide = (e) => {
    e.preventDefault()
    let slideIndex = parseInt(
      window
        .getComputedStyle(sliderRef.current)
        .getPropertyValue("--slide-index")
    )
    let slidesInView = parseInt(
      window
        .getComputedStyle(sliderRef.current)
        .getPropertyValue("--slides-in-view")
    )
    if (e.target.classList.contains("btn-left") && slideIndex > 0) {
      slideIndex--
    }
    if (
      e.target.classList.contains("btn-right") &&
      slideIndex <
        Math.round(sliderRef.current?.children.length / slidesInView) - 1
    ) {
      slideIndex++
    }
    sliderRef.current.style.setProperty("--slide-index", slideIndex)
  }

  return (
    <section className="arrival">
      <div className="arrival-container container">
        <h2 className="page-title">Newarrivals</h2>
        <div className="arrival-carousel">
          <div className="carousel-btns">
            <button onClick={handleSlide} className="btn btn-carousel btn-left">
              <HiArrowNarrowLeft className="icon" />
            </button>
            <button
              onClick={handleSlide}
              className="btn btn-carousel btn-right"
            >
              <HiArrowNarrowRight className="icon" />
            </button>
          </div>
          <div className="carousel-grid" ref={sliderRef}>
            {products?.slice(0, 6).map((product) => (
              <div key={product._id} className="grid-item">
                <img src={product.img} alt="" />
                <div className="icons">
                  <span className="icon love">
                    <AiOutlineHeart />
                  </span>
                  <span
                    className="icon cart"
                    onClick={() => handleAddToCart(product)}
                  >
                    <AiOutlineShoppingCart />
                  </span>
                  <Link
                    to="/view"
                    state={{ product: product }}
                    className="view"
                  >
                    view item
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Arrival
