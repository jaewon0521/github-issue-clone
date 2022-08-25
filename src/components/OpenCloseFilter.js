import React from "react"
import styles from "./OpenCloseFilter.module.css"
import cx from "clsx"

const OpenCloseFilter = ({ size, state, onClick, selected }) => {
  return (
    <>
      <span
        role="button"
        className={cx(styles.textFilter, { [styles.selected]: selected })}
        onClick={onClick}
      >
        {size} {state}
      </span>
    </>
  )
}

export default OpenCloseFilter
