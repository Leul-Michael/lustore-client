import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="sign-up">
          <p>Get first access on everything</p>
          <h2>SIGN UP FOR OFFERS AND LIMITED GEAR</h2>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" />
            <button className="btn btn-sign">Sign me up</button>
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <p>Shop</p>
            <li>Tops</li>
            <li>Shoes</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
          <ul>
            <p>Support</p>
            <li>About us</li>
            <li>Shipping</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
