import React, { useState } from 'react'

export default function useForm(initialFvValues) {
  const [values, setValues] = useState(initialFValues)
  const handleChange = (e) => {
    e.preventDefault()
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return {
    values,
    setValues,
    handleChange,
  }
}
