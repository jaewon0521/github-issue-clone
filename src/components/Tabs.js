import React, { useState } from "react"
import styles from "./Tabs.module.css"
import cx from "clsx"

const tabList = ["code", "Issues", "Pull Request", "Actions"]

const Tabs = () => {
  const [seletedTabIdx, setSelectedTabIdx] = useState(0)

  return (
    <ul className={styles.tabList}>
      {tabList.map((item, idx) => (
        <Tab
          title={item}
          key={idx}
          selected={seletedTabIdx === idx}
          onClick={() => setSelectedTabIdx(idx)}
        />
      ))}
    </ul>
  )
}

export default Tabs

const Tab = ({ title, selected, onClick, number }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={cx(styles.tab, { [styles.selected]: selected })}
      >
        <span>{title}</span>
        {number && <div className={styles.circle}>{number}</div>}
      </button>
    </li>
  )
}
