import React, { useState } from "react"
import styles from "./ListFilterItem.module.css"
import Modal from "./Modal"

const ListFilterItem = ({ onClick, children, onChangeFilter }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={() => setShowModal(true)}>
        {children} ▾
      </span>
      <div className={styles.modalContainer}>
        <Modal
          opened={showModal}
          onClose={() => setShowModal(false)}
          placeholder="Filter labels"
          searchDataList={["bug", "Labels", "Apple"]}
          onClickCell={() => onChangeFilter()}
        />
      </div>
    </div>
  )
}

export default ListFilterItem
