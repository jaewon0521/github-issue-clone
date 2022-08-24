import React from "react"
import styles from "./Button.module.css"

const Button = ({ style, children }) => {
  return (
    <div>
      <button className={styles.button} style={style}>
        {children}
      </button>
    </div>
  )
}

export default Button
