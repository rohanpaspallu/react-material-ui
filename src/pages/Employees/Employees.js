import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../components/PageHeader'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import {
  makeStyles,
  Paper,
  Tab,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core'
import useTable from '../../components/controls/useTable'
import * as employeeService from '../../services/employeeService'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}))

const headCells = [
  {
    id: 'fullname',
    label: 'Employee Name',
  },
  {
    id: 'email',
    label: 'Email Address',
  },
  {
    id: 'mobile',
    label: 'Mobile Number',
  },
  {
    id: 'department',
    label: 'Department',
  },
]

export default function Employees() {
  const classes = useStyles()
  const [records, setRecords] = useState(employeeService.getAllEmployees)
  console.log(records)
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells)
  return (
    <>
      <PageHeader
        title='Rohan Paspallu'
        subTitle='live life to the fullest'
        icon={<PeopleOutlineIcon fontSize='large' />}
      ></PageHeader>

      <Paper elevation={3} className={classes.pageContent}>
        <TblContainer>
          <TblHead></TblHead>
          <TableBody>
            {recordsAfterPagingAndSorting().map((record) => {
              return (
                <TableRow key={record.id}>
                  <TableCell>{record.fullName}</TableCell>
                  <TableCell>{record.email}</TableCell>
                  <TableCell>{record.mobile}</TableCell>
                  <TableCell>{record.department}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </TblContainer>
        <TblPagination></TblPagination>
        {/* <EmployeeForm></EmployeeForm> */}
      </Paper>
    </>
  )
}
