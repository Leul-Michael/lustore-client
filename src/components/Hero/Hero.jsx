import "./hero.scss"

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-text">
        <h1>Individual style</h1>
        <h1>United spirit</h1>
        <p>
          Enduro Stretch Tees have versatility & feel you've never experienced
          before.
        </p>
        <button className="btn btn-hero">Shop now</button>
      </div>
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          src={require("../../assets/hero-vid.mp4")}
        ></video>
      </div>
    </main>
  )
}

export default Hero
