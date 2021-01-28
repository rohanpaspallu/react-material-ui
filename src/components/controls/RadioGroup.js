import React from 'react'

import {
  FormControl,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core'
export default function RadioGroup(props) {
  const { name, label, value, onChange, items } = props

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>

      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item, index) => {
          return (
            <FormControlLabel
              value={item.id}
              control={<Radio />}
              label={item.title}
            />
          )
        })}
        {/* <FormControlLabel value='male' control={<Radio />} label='Male' />
        <FormControlLabel value='female' control={<Radio />} label='Female' />

        <FormControlLabel value='other' control={<Radio />} label='Other' /> */}
      </MuiRadioGroup>
    </FormControl>
  )
}
