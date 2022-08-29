import React from "react"
import styles from "./Badge.module.css"
import cx from "clsx"

const Badge = ({ color, name }) => {
  return (
    <span className={styles.badge} style={{ background: `#${color}` }}>
      {name}
    </span>
  )
}

export default Badge
