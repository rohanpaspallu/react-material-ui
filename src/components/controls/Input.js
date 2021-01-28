import { TextField } from '@material-ui/core'
import React from 'react'

export default function Input(props) {
  const { name, label, value, onChange } = props
  return (
    <TextField
      //   id='outlined-basic'
      label={label}
      variant='outlined'
      value={value}
      name={name}
      onChange={onChange}
      // onChange={(e) => setValues(...values, (fullName: e.target.value))}
    />
  )
}
