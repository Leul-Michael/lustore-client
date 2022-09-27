import "./socials.scss"

const Socials = () => {
  return (
    <section className="socials">
      <div className="socials-container container">
        <h2 className="page-title">Socials</h2>
        <div className="socials-grid">
          <div className="grid-item">
            <img src={require("../../assets/blog-1.jpg")} alt="" />
            <p className="date">march 19, 2020</p>
            <h2 className="title">
              LUSTORE's new women's clothing collections
            </h2>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              quibusdam cum sint alias dolore, hic repellendus rerum ipsum
              corporis quaerat nulla a, sunt dignissimos repudiandae.
            </p>
          </div>
          <div className="grid-item">
            <img src={require("../../assets/blog-2.jpg")} alt="" />
            <p className="date">july 20, 2022</p>
            <h2 className="title">LUSTORE at 2022 fww awwards</h2>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              quibusdam cum sint alias dolore, hic repellendus rerum ipsum
              corporis quaerat nulla a, sunt dignissimos repudiandae.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Socials
