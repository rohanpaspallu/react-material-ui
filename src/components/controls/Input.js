import { TextField } from '@material-ui/core'
import React from 'react'

export default function Input(props) {
  const { name, label, value, error = null, onChange, ...other } = props
  return (
    <TextField
      //   id='outlined-basic'
      label={label}
      variant='outlined'
      value={value}
      name={name}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
      // onChange={(e) => setValues(...values, (fullName: e.target.value))}
    />
  )
}
