import "./message.scss"
import {
  MdOutlineErrorOutline,
  MdOutlineCheckCircleOutline,
} from "react-icons/md"
import { useEffect } from "react"
import { useRef } from "react"
import useMesssge from "../../context/MessageContext/MessageContext"

const Message = () => {
  const { message, type } = useMesssge()

  const messageRef = useRef(null)
  const messageContentRef = useRef(null)

  const theme = {
    backgroundColor: type ? "var(--clr-accent)" : "var(--clr-error)",
  }

  useEffect(() => {
    if (messageRef.current) messageRef.current.style.zIndex = 500
    setTimeout(() => {
      messageContentRef.current?.classList.add("open")
    }, 500)
    setTimeout(() => {
      messageContentRef.current?.classList.remove("open")
      if (messageRef.current) messageRef.current.style.zIndex = -1
    }, 5000)
  })

  return message ? (
    <>
      <section className="message" ref={messageRef}>
        <div className="container message__container">
          <div
            className="message__content"
            style={theme}
            ref={messageContentRef}
          >
            <span className="message__content-icon">
              {type ? (
                <MdOutlineCheckCircleOutline />
              ) : (
                <MdOutlineErrorOutline />
              )}
            </span>
            <p className="message__content-message">{message}</p>
          </div>
        </div>
      </section>
    </>
  ) : null
}

export default Message
