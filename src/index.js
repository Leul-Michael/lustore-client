import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import ProductProvider from "./context/ProductContext/ProductContext"
import OptionsContextProvider from "./context/OptionsContext/OptionsContext"
import { CartContextProvider } from "./context/CartContext/CartContext"
import { MessageContextProvider } from "./context/MessageContext/MessageContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router basename="/">
      <MessageContextProvider>
        <ProductProvider>
          <CartContextProvider>
            <OptionsContextProvider>
              <App />
            </OptionsContextProvider>
          </CartContextProvider>
        </ProductProvider>
      </MessageContextProvider>
    </Router>
  </React.StrictMode>
)
