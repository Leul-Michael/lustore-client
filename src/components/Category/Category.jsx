import "./category.scss"
import { HiArrowNarrowDown } from "react-icons/hi"
import { Link } from "react-router-dom"

const Category = ({ title, count, onClick, cateoryImages }) => {
  return (
    <div className="category" onClick={onClick}>
      <div className="top">
        <p className="count">{count}</p>
        <h2 className="category-title">{title}</h2>
        <div className="icon">
          <span>
            <HiArrowNarrowDown />
          </span>
        </div>
      </div>
      <div className="center">
        <Link to={`/show/all/${title}`} className="btn btn-category">
          View all
        </Link>
        <div className="center-imgs">
          {cateoryImages.slice(0, 3).map((item) => (
            <div key={item._id} className="grid-item">
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category
