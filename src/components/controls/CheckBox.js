import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
} from '@material-ui/core'
import React from 'react'

export default function CheckBox(props) {
  const { name, label, value, onChange } = props

  const convertToDefaultEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  })
  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color='primary'
            checked={value}
            onChange={(e) => {
              console.log(e.target.checked)
              onChange(convertToDefaultEventPara(name, e.target.checked))
            }}
          >
            {console.log('name is :  ' + name + 'value is : ' + value)}
          </MuiCheckbox>
        }
        label={label}
      ></FormControlLabel>
    </FormControl>
  )
}
