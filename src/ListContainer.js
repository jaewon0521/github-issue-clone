import React, { useState } from "react"

import cx from "clsx"
import styles from "./ListContainer.module.css"

import Button from "./components/Button"
import ListItem from "./components/ListItem"
import OpenCloseFilters from "./components/OpenCloseFilters"
import ListFilter from "./components/ListFilter"
import Pagination from "./components/Pagination"

const ListContainer = () => {
  const [inputValue, setInputValue] = useState("is:pr is:open")
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            type="text"
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "green",
              color: "white",
            }}
          >
            New Issue
          </Button>
        </div>
        <OpenCloseFilters />
        <ListFilter onChangeFilter={(filteredData) => {}} />
        <div className={styles.container}>
          {list.map((listItem, index) => (
            <ListItem
              key={index}
              badges={[
                {
                  color: "red",
                  title: "Bug",
                },
              ]}
            />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={10}
          currentPage={page}
          onClickPageButton={(number) => setPage(number)}
        />
      </div>
    </>
  )
}

export default ListContainer
