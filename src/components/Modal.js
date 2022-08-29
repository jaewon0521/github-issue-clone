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
    setFilteredData(searchDataList)
  }, [searchDataList])

  useEffect(() => {
    if (searchValue === "") {
      setFilteredData(searchDataList)
    } else {
      const filteredSearchList = searchDataList.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()),
      )
      setFilteredData(filteredSearchList)
    }
  }, [searchValue, searchDataList])

  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>Filter by {title}</span>
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
      <div className={styles.list}>
        {filteredData.map((item) => (
          <div
            className={styles.item}
            key={item.name}
            onClick={() => {
              const isLabel = title.toLowerCase() === "label"
              const paramKey = isLabel ? "labels" : title.toLowerCase()
              onClickCell({ [paramKey]: item.name })
            }}
            role="button"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Modal
