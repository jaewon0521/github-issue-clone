import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import styles from "./ListContainer.module.css"
import axios from "axios"
import { GITHUB_API } from "./api"

import Button from "./components/Button"
import ListItem from "./components/ListItem"
import OpenCloseFilters from "./components/OpenCloseFilters"
import ListFilter from "./components/ListFilter"
import Pagination from "./components/Pagination"

const ListContainer = () => {
  const [inputValue, setInputValue] = useState("is:pr is:open")
  const [checked, setChecked] = useState(false)
  const [list, setList] = useState([])

  const [searchParams, setSearchParams] = useSearchParams()
  const page = parseInt(searchParams.get("page") ?? 1, 10)
  const state = searchParams.get("state")
  debugger

  async function getData(params) {
    const data = await axios.get(`${GITHUB_API}/repos/facebook/react/issues`, {
      params,
    })
    setList(data.data)
  }

  useEffect(() => {
    getData(searchParams)
  }, [searchParams, state])

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
        <OpenCloseFilters
          isOpenMode={state !== "closed"}
          onClickMode={(mode) => setSearchParams({ mode })}
        />
        <ListFilter onChangeFilter={(params) => setSearchParams(params)} />
        <div className={styles.container}>
          {list.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              checked={checked}
              onClickCheckBox={() => setChecked((checked) => !checked)}
            />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={10}
          currentPage={page}
          onClickPageButton={(pageNumber) =>
            setSearchParams({ page: pageNumber })
          }
        />
      </div>
    </>
  )
}

export default ListContainer
