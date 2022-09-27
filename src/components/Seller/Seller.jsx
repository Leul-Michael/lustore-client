import { useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllProducts } from "../../context/ProductContext/apiCalls"
import { useProduct } from "../../context/ProductContext/ProductContext"
import "./seller.scss"

const Seller = () => {
  const { products, dispatch, isLoading } = useProduct()

  useEffect(() => {
    getAllProducts(dispatch)
  }, [dispatch])

  const bestSellers = products?.slice().sort((a, b) => {
    if (a.likes > b.likes) {
      return -1
    }
    if (a.likes < b.likes) {
      return 1
    }
    return 0
  })

  return (
    <section className="best-seller">
      <div className="seller-container container">
        <h2 className="page-title">Bestseller</h2>
        <p>
          Check out the latest best selling utility gear to thrive on the site.
        </p>
        <div className="seller-slider">
          <div className="seller-grid">
            {!isLoading &&
              bestSellers?.slice(0, 3).map((product) => (
                <div key={product._id} className="grid-item">
                  <img src={product.img} alt="" />
                </div>
              ))}
            <Link to="/show/all" className="btn btn-more">
              Show more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Seller
