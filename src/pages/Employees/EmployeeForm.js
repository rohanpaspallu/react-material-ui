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
import Controls from '../../components/controls/Controls'
import * as employeeService from '../../services/employeeService'
const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },

  { id: 'other', title: 'Other' },
]

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
  const { values, setValues, handleChange } = useForm(initialFValues)

  console.log(employeeService.getDepartmentCollection)

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name='fullName'
            label='Full Name'
            value={values.fullName}
            onChange={handleChange}
          ></Controls.Input>

          <Controls.Input
            name='email'
            label='Email'
            value={values.email}
            onChange={handleChange}
          ></Controls.Input>
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name='gender'
            label='Gender'
            value={values.gender}
            onChange={handleChange}
            items={genderItems}
          ></Controls.RadioGroup>

          <Controls.Select
            name='departmentId'
            label='Department'
            value={values.departmentId}
            onChange={handleChange}
            options={employeeService.getDepartmentCollection}
          ></Controls.Select>
        </Grid>
      </Grid>
    </Form>
  )
}
