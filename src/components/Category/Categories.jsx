import "./category.scss"
import Category from "./Category"
import { useRef } from "react"
import { useProduct } from "../../context/ProductContext/ProductContext"

const PRODUCT = {
  SHOE: "Shoe",
  TOPS: "Top",
  MEN: "Men",
  WOMEN: "Women",
  KIDS: "Kids",
}

const Categories = () => {
  const categoryRef = useRef(null)
  const { products } = useProduct()

  const shoes = products?.filter((item) => {
    return item?.category.includes(PRODUCT.SHOE)
  })

  const mens = products?.filter((item) => {
    return item?.category.includes(PRODUCT.MEN)
  })

  const womens = products?.filter((item) => {
    return item?.category.includes(PRODUCT.WOMEN)
  })

  const tops = products?.filter((item) => {
    return item?.category.includes(PRODUCT.TOPS)
  })

  const kids = products?.filter((item) => {
    return item?.category.includes(PRODUCT.KIDS)
  })

  const handleActive = (e) => {
    ;[...categoryRef.current.children].forEach((elem) => {
      if (e.target.closest(".category") === elem) {
        return
      } else {
        elem.classList.remove("active")
      }
    })

    setTimeout(() => {
      e.target.closest(".category").classList.toggle("active")
    }, 250)
    setTimeout(() => {
      e.target.closest(".category").scrollIntoView()
    }, 600)
  }

  return (
    <section className="categories">
      <div className="container">
        <h2 className="page-title">Categories</h2>
        <div className="categories-grid" ref={categoryRef}>
          <Category
            title={"shoe"}
            count="01"
            onClick={handleActive}
            cateoryImages={shoes}
          />
          <Category
            title={"top"}
            count="02"
            onClick={handleActive}
            cateoryImages={tops}
          />
          <Category
            title={"men"}
            count="03"
            onClick={handleActive}
            cateoryImages={mens}
          />
          <Category
            title={"women"}
            count="04"
            onClick={handleActive}
            cateoryImages={womens}
          />
          <Category
            title={"kids"}
            count="05"
            onClick={handleActive}
            cateoryImages={kids}
          />
        </div>
      </div>
    </section>
  )
}

export default Categories
