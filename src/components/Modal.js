import React, { useEffect, useState } from "react"
import cx from "clsx"
import styles from "./Modal.module.css"

const Modal = ({
  opened,
  title,
  onClose,
  placeholder,
  searchDataList,
  onClickCell,
}) => {
  const [searchValue, setSearchValue] = useState("")
  const [filteredData, setFilteredData] = useState(searchDataList)

  useEffect(() => {
    setFilteredData(searchDataList.filter((item) => item === searchValue))
  }, [searchValue, searchDataList])

  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>{title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.input}>
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {filteredData.map((item) => (
        <div key={item} onClick={onClickCell} role="button">
          {item}
        </div>
      ))}
    </div>
  )
}

export default Modal
