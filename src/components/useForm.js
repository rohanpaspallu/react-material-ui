import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

export function useForm(initialFValues) {
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
  return <form className={classes.root}>{props.children}</form>
}
