import React from "react"
import OpenCloseFilter from "./OpenCloseFilter"

const OpenCloseFilters = ({ isOpenMode, onClickMode }) => {
  return (
    <>
      <OpenCloseFilter
        state="Open"
        selected={isOpenMode}
        onClick={() => onClickMode("open")}
      />
      <OpenCloseFilter
        state="Close"
        selected={!isOpenMode}
        onClick={() => onClickMode("closed")}
      />
    </>
  )
}

export default OpenCloseFilters
