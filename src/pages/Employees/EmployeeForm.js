import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useForm, Form } from '../../components/useForm'

const initialFValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
}
export default function EmployeeForm() {
  //   const [values, setValues] = useState(initialFValues)
  const { values, setValues, handleChange } = useForm(initialFValues)
  //   const classes = useStyles()

  //   const handleChange = (e) => {
  //     e.preventDefault()
  //     setValues({ ...values, [e.target.name]: e.target.value })
  //   }
  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            id='outlined-basic'
            label='Full Name'
            variant='outlined'
            value={values.fullName}
            name='fullName'
            onChange={handleChange}
            // onChange={(e) => setValues(...values, (fullName: e.target.value))}
          />
          <TextField
            id='outlined-basic'
            label='Email'
            variant='outlined'
            value={values.email}
            name='email'
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              name='gender'
              value={values.gender}
              onChange={handleChange}
            >
              <FormControlLabel value='male' control={<Radio />} label='Male' />
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Female'
              />

              <FormControlLabel
                value='other'
                control={<Radio />}
                label='Other'
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  )
}
