import { useEffect, useState } from "react"
import { GITHUB_API } from "./api"
import axios from "axios"
import { useQuery } from "react-query"

export const useForm = ({
  validate,
  initialValues,
  refs,
  onSuccess, // 성공
  onErrors, // 에러
  onSubmit, // 서버 값 전달
}) => {
  const [inputValues, setInputValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setInputValues({ ...inputValues, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsSubmitting(true)
    const validateResult = validate(inputValues)
    setErrors(validateResult)

    const errorKeys = Object.keys(validateResult)

    if (errorKeys.length !== 0) {
      const key = errorKeys[0]
      alert(validateResult[key])
      refs[key].current.focus()

      setIsSubmitting(false)
      return
    }

    if (errorKeys.length === 0) {
      try {
        const result = await onSubmit()
        onSuccess(result)
      } catch (e) {
        onErrors()
      }
      return
    }
  }
  return {
    inputValues,
    onChange,
    isSubmitting,
    errors,
    handleSubmit,
  }
}
const getUserInfo = async () => {
  const data = await axios.get(`${GITHUB_API}/user`, {
    headers: {
      Authorization: process.env.REACT_APP_GITHUB_TOKEN,
      "Content-Type": "application/json",
    },
  })

  return data.data
}
export const useUser = () => {
  return useQuery(["userInfo"], () => getUserInfo(), { staleTime: "Infinity" })
}
