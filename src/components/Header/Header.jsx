import "./header.scss"
import { FaRegUser } from "react-icons/fa"
import { HiMenuAlt1, HiOutlineShoppingCart } from "react-icons/hi"
import { useEffect, useRef } from "react"
import Cart from "../Cart/Cart"
import Nav from "../Nav/Nav"
import { Link } from "react-router-dom"
import { useShoppingCart } from "../../context/CartContext/CartContext"

const Header = () => {
  const navRef = useRef(null)
  const cartRef = useRef(null)

  const { cartQuantity } = useShoppingCart()

  useEffect(() => {
    document.addEventListener("mousedown", closeCartOnWindowClick)

    return () => {
      document.removeEventListener("mousedown", closeCartOnWindowClick)
    }
  }, [cartRef])

  const openCartOrNav = (elem) => {
    elem.current?.classList.toggle("open")
    if (elem?.current.classList.contains("open")) {
      document.body.classList.add("overlay")
    } else {
      document.body.classList.remove("overlay")
    }
  }

  const closeCartOrNav = () => {
    cartRef.current?.classList.remove("open")
    navRef.current?.classList.remove("open")
    document.body.classList.remove("overlay")
  }

  const closeCartOnWindowClick = (e) => {
    if (!cartRef.current?.contains(e.target)) {
      cartRef.current?.classList.remove("open")
      document.body.classList.remove("overlay")
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__cart-container" ref={cartRef}>
          <Cart closeCart={closeCartOrNav} />
        </div>
        <ul ref={navRef} className="nav">
          <Nav closeNav={closeCartOrNav} />
        </ul>
        <div className="left-nav">
          <div className="burger-menu" onClick={() => openCartOrNav(navRef)}>
            <HiMenuAlt1 />
          </div>
        </div>
        <Link to="/" className="logo">
          <h1>Lustore</h1>
        </Link>
        <div className="right-nav">
          <button className="register-icon">
            <FaRegUser />
          </button>
          <button
            data-cart-quantity={cartQuantity}
            className="register-icon cart-icon"
            onClick={() => openCartOrNav(cartRef)}
          >
            <HiOutlineShoppingCart />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
