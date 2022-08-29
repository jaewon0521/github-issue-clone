import axios from "axios"
import React, { useEffect, useState } from "react"
import { GITHUB_API } from "../api"
import styles from "./ListFilter.module.css"
import ListFilterItem from "./ListFilterItem"
import ListItemLayout from "./ListItemLayout"

const ListFilter = ({ onChangeFilter }) => {
  const [showModal, setShowModal] = useState("")
  const [list, setList] = useState([])
  const filterList = ["Label", "Milestone", "Assignee"]
  async function getData(apiPath) {
    const data = await axios.get(
      `${GITHUB_API}/repos/facebook/react/${apiPath}`,
    )

    let result = []
    switch (apiPath) {
      case "assignees":
        result = data.data.map((d) => ({
          name: d.login,
        }))
        break
      case "milestones":
        result = data.data.map((d) => ({
          name: d.title,
        }))
        break
      case "labels":
      default:
        result = data.data
    }

    setList(result)
  }

  useEffect(() => {
    if (showModal) {
      const apiPath = `${showModal.toLowerCase()}s`
      getData(apiPath)
    }
  }, [showModal])

  return (
    <ListItemLayout className={styles.listFilter}>
      <div className={styles.filterLists}>
        {filterList.map((filter) => (
          <ListFilterItem
            key={filter}
            searchDataList={list}
            onClick={() => setShowModal(filter)}
            onClose={() => setShowModal()}
            showModal={showModal === filter}
            onChangeFilter={(params) => onChangeFilter(params)}
          >
            {filter}
          </ListFilterItem>
        ))}
      </div>
    </ListItemLayout>
  )
}

export default ListFilter
