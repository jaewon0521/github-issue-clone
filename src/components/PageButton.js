import React from "react"
import cx from "clsx"
import styles from "./PageButton.module.css"

const PageButton = ({ number, onClick, selected }) => {
  return (
    <button
      className={cx(styles.button, { [styles.selected]: selected })}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  )
}

export default PageButton
