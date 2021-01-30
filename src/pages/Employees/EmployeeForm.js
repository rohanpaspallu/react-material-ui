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

import MaskedInput from 'react-text-mask'

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
  const validate = () => {
    let temp = {}
    temp.fullName = values.fullName ? '' : 'This field is required'
    temp.email = /$^|.+@.+..+/.test(values.email) ? '' : 'Email is not valid'
    temp.mobile =
      values.mobile.length > 9 && values.mobile.length < 11
        ? ''
        : 'Mobile number should have 10 characters'
    temp.departmentId =
      values.departmentId.length != 0 ? '' : 'This field is required'

    setErrors({
      ...temp,
    })

    return Object.values(temp).every((x) => x == '')
  }

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
    resetForm,
  } = useForm(initialFValues)

  console.log(employeeService.getDepartmentCollection)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      window.alert('hello rohan')
    } else {
      window.alert('some data missing')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name='fullName'
            label='Full Name'
            value={values.fullName}
            onChange={handleChange}
            // helperText='incorrect input'
            // error={errors.fullName}
            error={errors.fullName}
          ></Controls.Input>

          <Controls.Input
            name='email'
            label='Email'
            value={values.email}
            onChange={handleChange}
            // error='abc'
            error={errors.email}
          ></Controls.Input>

          <Controls.Input
            name='mobile'
            label='Mobile Number'
            value={values.mobile}
            onChange={handleChange}
            error={errors.mobile}
          ></Controls.Input>

          <Controls.Input
            name='city'
            label='City'
            value={values.city}
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
            error={errors.departmentId}
          ></Controls.Select>

          <Controls.DatePicker
            name='hireDate'
            label='Hire Date'
            value={values.hireDate}
            onChange={handleChange}
          ></Controls.DatePicker>
          <Controls.CheckBox
            name='isPermanent'
            label='Permanent Employee'
            value={values.isPermanent}
            onChange={handleChange}
          ></Controls.CheckBox>

          <div>
            <Controls.Button
              //   variant='contained'
              //   color='primary'
              //   size='large'
              text='Submit'
              type='submit'
            ></Controls.Button>
            <Controls.Button
              //   variant='contained'
              color='default'
              //   size='large'
              text='Reset'
              onClick={resetForm}
            ></Controls.Button>
          </div>
        </Grid>
      </Grid>
    </Form>
  )
}
