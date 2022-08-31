import React, { useRef } from "react"
import cx from "clsx"
import styles from "./CreateIssue.module.css"

import Button from "./Button"
import TextField from "./TextField"
import { useForm, useUser } from "../hooks"
import { GITHUB_API } from "../api"
import axios from "axios"
import { useNavigate } from "react-router"

const CreateIssue = () => {
  const inputRef = useRef()
  const textareaRef = useRef()
  const navigate = useNavigate()
  const user = useUser()

  const { isSubmitting, inputValues, onChange, errors, handleSubmit } = useForm(
    {
      initialValues: { title: "", body: "" },
      onSubmit: async () =>
        await axios.post(
          `${GITHUB_API}/repos/younjaewon/github-issue-clone/issues`,
          inputValues,
          {
            headers: {
              Authorization: process.env.REACT_APP_GITHUB_TOKEN,
              "Content-Type": "applications/json",
            },
          },
        ),
      validate,
      refs: { title: inputRef, body: textareaRef },
      onErrors: () => console.log("error"),
      onSuccess: (result) => {
        console.log({ result })
        navigate("/", { replace: true })
      },
    },
  )
  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={cx(styles.inputWrapper, styles.border)}>
        <form onSubmit={handleSubmit}>
          <TextField
            ref={inputRef}
            value={inputValues.title}
            onChange={onChange}
            name="title"
            placeholder="Title"
            error={errors.title}
          />
          <TextField
            ref={textareaRef}
            type="textarea"
            value={inputValues.body}
            onChange={onChange}
            name="body"
            placeholder="Leave a comment"
            error={errors.body}
          />
          <div className={styles.buttonWrapper}>
            <Button
              type="submit"
              style={{
                fontSize: "14px",
                backgroundColor: "green",
                color: "white",
              }}
              disabled={isSubmitting}
            >
              Submit new issue
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateIssue

function validate(values) {
  let errors = {}
  if (values.title === "") {
    errors = { title: "타이틀은 필수값입니다." }
  }

  return errors
}
