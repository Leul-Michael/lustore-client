import "./nav.scss"
import { MdClose } from "react-icons/md"
import { Link } from "react-router-dom"

const Nav = ({ closeNav }) => {
  return (
    <div className="nav-container container">
      <button className="btn btn-close-nav" onClick={closeNav}>
        <MdClose />
      </button>
      <li onClick={closeNav}>
        <Link to="/show/all/top">Tops</Link>
        <img src={require("../../assets/tops.jpg")} alt="tops clothing" />
      </li>
      <li onClick={closeNav}>
        <Link to="/show/all/shoe">Shoes</Link>
        <img src={require("../../assets/shoes.jpg")} alt="shoes" />
      </li>
      <li onClick={closeNav}>
        <Link to="/show/all/men">Men</Link>
        <img src={require("../../assets/men.jpg")} alt="Men clothing" />
      </li>
      <li onClick={closeNav}>
        <Link to="/show/all/women">Women</Link>
        <img src={require("../../assets/women.jpg")} alt="Women clothing" />
      </li>
      <li onClick={closeNav}>
        <Link to="/show/all/kids">Kids</Link>
        <img src={require("../../assets/kids.jpg")} alt="kids clothing" />
      </li>
      <li onClick={closeNav}>
        About
        <img src={require("../../assets/about.jpg")} alt="about us" />
      </li>
    </div>
  )
}

export default Nav
