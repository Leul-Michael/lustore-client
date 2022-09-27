import Hero from "../../components/Hero/Hero"
import Seller from "../../components/Seller/Seller"
import Categories from "../../components/Category/Categories"
import Arrival from "../../components/Arrivals/Arrival"
import Socials from "../../components/Socials/Socials"

const Home = () => {
  return (
    <>
      <Hero />
      <div className="bg-reverse">
        <Seller />
        <Categories />
        <Arrival />
        <Socials />
      </div>
    </>
  )
}

export default Home
