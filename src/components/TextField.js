import React, { forwardRef } from "react"
import styles from "./TextField.module.css"
import cx from "clsx"

const TextField = (
  { type = "input", name, placeholder, onChange, value, error },
  ref,
) => {
  return type === "input" ? (
    <input
      type="text"
      className={cx(styles.input, styles.border, {
        [styles.error]: Boolean(error),
      })}
      onChange={onChange}
      value={value}
      ref={ref}
      name={name}
      placeholder={placeholder}
    />
  ) : (
    <textarea
      className={cx(styles.input, styles.textarea, styles.border, {
        [styles.error]: Boolean(error),
      })}
      onChange={onChange}
      value={value}
      ref={ref}
      name={name}
      placeholder={placeholder}
    ></textarea>
  )
}

export default forwardRef(TextField)
