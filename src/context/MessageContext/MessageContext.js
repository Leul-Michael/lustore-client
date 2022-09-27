import React, { createContext, useContext } from "react"
import { useState } from "react"

const MessageContext = createContext({})

export default function useMesssge() {
  return useContext(MessageContext)
}

export const MessageContextProvider = ({ children }) => {
  const [flash, setFlash] = useState({
    message: "",
    type: false,
  })

  return (
    <MessageContext.Provider
      value={{ message: flash.message, type: flash.type, setFlash }}
    >
      {children}
    </MessageContext.Provider>
  )
}
