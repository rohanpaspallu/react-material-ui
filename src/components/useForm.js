import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

export function useForm(initialFValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialFValues)
  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target
    // e.preventDefault()
    setValues({ ...values, [name]: value })
    if (validateOnChange) {
      validate({ [name]: value })
    }
  }

  const resetForm = () => {
    setValues(initialFValues)
    setErrors({})
  }
  return {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
    resetForm,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}))

export function Form(props) {
  const classes = useStyles()
  const { children, ...other } = props
  return (
    <form className={classes.root} autoComplete='off' {...other}>
      {children}
    </form>
  )
}
