import React from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../components/PageHeader'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import { makeStyles, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}))

export default function Employees() {
  const classes = useStyles()
  return (
    <>
      <PageHeader
        title='Rohan Paspallu'
        subTitle='live life to the fullest'
        icon={<PeopleOutlineIcon fontSize='large' />}
      ></PageHeader>

      <Paper elevation={3} className={classes.pageContent}>
        <EmployeeForm></EmployeeForm>
      </Paper>
    </>
  )
}
