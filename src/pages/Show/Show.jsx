import "./show.scss"
import { HiOutlineFilter } from "react-icons/hi"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { Link, useParams } from "react-router-dom"
import { useProduct } from "../../context/ProductContext/ProductContext"
import { useEffect } from "react"
import { getAllProducts } from "../../context/ProductContext/apiCalls"
import { useOptions } from "../../context/OptionsContext/OptionsContext"

const Show = () => {
  const { products, dispatch, isLoading } = useProduct()
  const { handleAddToCart } = useOptions()
  const { itemType } = useParams()

  useEffect(() => {
    getAllProducts(dispatch)
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [dispatch])

  let allProducts = products
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  if (itemType) {
    allProducts = products.slice().filter((product) => {
      return product.category.includes(
        itemType?.charAt(0).toUpperCase() + itemType.slice(1)
      )
    })
  }

  return (
    <section className="show">
      <div className="container loading-container">
        {isLoading ? (
          <p className="loading">loading...</p>
        ) : (
          <>
            <div className="results">
              <p>{allProducts.length} items</p>
              <h2 className="page-title">
                {itemType ? itemType : "All Products"}
              </h2>
            </div>
            <div className="filters-grid">
              <div className="filter">
                <p>Filter</p>
                <span className="icon">
                  <HiOutlineFilter />
                </span>
              </div>
              <div className="sort">
                <p>Sort by:</p>
                <select>
                  <option value="newest">Newest</option>
                  <option value="popular">Popular</option>
                </select>
              </div>
            </div>
            <div className="items-grid">
              {allProducts.length ? (
                allProducts.map((product) => (
                  <div key={product._id} className="item">
                    <img src={product.img} alt="" />
                    <h5>{product.title}</h5>
                    <p className="price">${product.price}</p>
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
                ))
              ) : (
                <p className="no-item">
                  No <span>items</span> to show.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Show
