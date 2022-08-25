import React from "react"
import cx from "clsx"
import PageButton from "./PageButton"
import styles from "./Pagination.module.css"

const Pagination = ({ currentPage, maxPage, onClickPageButton }) => {
  return (
    <div>
      <button
        className={cx(styles.button, styles.blueButton, {
          [styles.disabled]: currentPage === 1,
        })}
      >
        {"< Previous"}
      </button>
      {new Array(maxPage).fill(null).map((_, i) => (
        <PageButton
          number={i + 1}
          onClick={onClickPageButton}
          selected={i + 1 === currentPage}
        />
      ))}
      <button
        className={cx(styles.button, styles.blueButton, {
          [styles.disabled]: currentPage === maxPage,
        })}
      >
        {"Next >"}
      </button>
    </div>
  )
}

export default Pagination
