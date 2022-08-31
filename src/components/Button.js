import React from "react"
import styles from "./Button.module.css"

const Button = ({ style, children, type = "button", disabled }) => {
  return (
    <div>
      <button
        className={styles.button}
        style={style}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
