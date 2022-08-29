import React, { useEffect, useState } from "react"
import styles from "./ListFilterItem.module.css"
import Modal from "./Modal"

const ListFilterItem = ({
  children,
  placeholder,
  searchDataList,
  showModal,
  onChangeFilter,
  onClose,
  onClick,
}) => {
  const [list, setList] = useState(searchDataList)

  useEffect(() => {
    setList(searchDataList)
  }, [searchDataList])
  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={onClick}>
        {children} ▾
      </span>
      <div className={styles.modalContainer}>
        <Modal
          title={children}
          opened={showModal}
          onClose={onClose}
          placeholder={placeholder}
          searchDataList={list}
          onClickCell={(cellInfo) => onChangeFilter(cellInfo)}
        />
      </div>
    </div>
  )
}

export default ListFilterItem
