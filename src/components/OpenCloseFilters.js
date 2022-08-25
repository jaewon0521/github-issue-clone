import React, { useState } from "react"
import OpenCloseFilter from "./OpenCloseFilter"

const OpenCloseFilters = () => {
  const [isOpenMode, setIsOpenMode] = useState(true)

  // const data = getData();
  // const openData = data.filter((d) => d.state === "open")
  // const closeData = data.filter((d) => d.state === "close")

  const openModeDataSize = 1
  const closeModeDataSize = 2
  return (
    <>
      <OpenCloseFilter
        size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />
      <OpenCloseFilter
        size={closeModeDataSize}
        state="Close"
        selected={!isOpenMode}
        onClick={() => setIsOpenMode(false)}
      />
    </>
  )
}

export default OpenCloseFilters
