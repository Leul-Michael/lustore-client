import "./App.css"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import { Routes, Route } from "react-router-dom"
import Show from "./pages/Show/Show"
import Single from "./pages/Single/Single"
import CartDetails from "./components/Cart/CartDetails"
import Message from "./components/Message/Message"

function App() {
  return (
    <>
      <Header />
      <Message />
      <CartDetails />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/show/all" element={<Show />} />
        <Route path="/show/all/:itemType" element={<Show />} />
        <Route path="/view" element={<Single />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
