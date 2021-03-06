import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from '@material-ui/core'
import React from 'react'

let id = 1

export default function Select(props) {
  const { name, label, value, error = null, onChange, options } = props
  return (
    <FormControl variant='outlined' {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value=''>None</MenuItem>

        {console.log(options)}

        {options.map((opt) => {
          return (
            <MenuItem key={opt.id} value={opt.id}>
              {opt.title}
            </MenuItem>
          )
        })}

        {/* {options.map((item, index) => {
          return (
            <MenuItem key={item.id} value={item.id}>
              {item.title}
            </MenuItem>
          )
        })} */}

        {/* {options.map((item) => (
          <MenuItem value={item.id}>{item.title}</MenuItem>
        ))} */}
      </MuiSelect>

      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}
