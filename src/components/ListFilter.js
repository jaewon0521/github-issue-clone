import React from "react"
import styles from "./ListFilter.module.css"
import ListFilterItem from "./ListFilterItem"
import ListItemLayout from "./ListItemLayout"

const ListFilter = ({ onChangeFilter }) => {
  return (
    <ListItemLayout className={styles.listFilter}>
      <div className={styles.filterLists}>
        <ListFilterItem>Author</ListFilterItem>
        <ListFilterItem>Label</ListFilterItem>
        <ListFilterItem>Projects</ListFilterItem>
        <ListFilterItem>Milestones</ListFilterItem>
        <ListFilterItem>Assignee</ListFilterItem>
        <ListFilterItem>Sort</ListFilterItem>
      </div>
    </ListItemLayout>
  )
}

export default ListFilter
