import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../components/PageHeader'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import Controls from '../../components/controls/Controls'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import CloseIcon from '@material-ui/icons/Close'
import {
  InputAdornment,
  ListItemSecondaryAction,
  makeStyles,
  Paper,
  Tab,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from '@material-ui/core'
import useTable from '../../components/controls/useTable'
import * as employeeService from '../../services/employeeService'
import { EditOutlined } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: '75%',
  },
  newButton: {
    position: 'absolute',
    right: '10px',
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
  { id: 'actions', label: 'Actions', disableSorting: true },
]

export default function Employees() {
  const classes = useStyles()
  const [records, setRecords] = useState(employeeService.getAllEmployees)
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items
    },
  })
  const [openPopup, setOpenPopup] = useState(false)
  console.log(records)
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn)
  const handleSearch = (e) => {
    let target = e.target
    setFilterFn({
      fn: (items) => {
        if (target.value == '') return items
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          )
      },
    })
  }

  const addOrEdit = (employee, resetForm) => {
    employeeService.insertEmployee(employee)
    resetForm()
    setOpenPopup(false)
    setRecords(employeeService.getAllEmployees())
  }
  return (
    <>
      <PageHeader
        title='Rohan Paspallu'
        subTitle='live life to the fullest'
        icon={<PeopleOutlineIcon fontSize='large' />}
      ></PageHeader>

      <Paper elevation={3} className={classes.pageContent}>
        <EmployeeForm></EmployeeForm>
        <Toolbar>
          <Controls.Input
            label='Search Employee'
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          ></Controls.Input>

          <Controls.Button
            text='Add new'
            className={classes.newButton}
            variant='outlined'
            startIcon={<AddIcon />}
            onClick={() => setOpenPopup(true)}
          ></Controls.Button>
        </Toolbar>
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
                  <TableCell>
                    <Controls.ActionButton color='primary'>
                      <EditOutlinedIcon fontSize='small' />
                    </Controls.ActionButton>
                    <Controls.ActionButton color='secondary'>
                      <CloseIcon fontSize='small' />
                    </Controls.ActionButton>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </TblContainer>
        <TblPagination></TblPagination>
      </Paper>
      <Controls.Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title='Employee Form'
      >
        <EmployeeForm addOrEdit={addOrEdit}></EmployeeForm>
      </Controls.Popup>
    </>
  )
}
