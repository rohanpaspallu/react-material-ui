import React, { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../components/PageHeader'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import Controls from '../../components/controls/Controls'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import CloseIcon from '@material-ui/icons/Close'
import Notification from '../../components/controls/Notification'
import ConfirmDialog from '../../components/controls/ConfirmDialog'
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
import { EditOutlined, FlashOnRounded } from '@material-ui/icons'

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
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [records, setRecords] = useState(employeeService.getAllEmployees)
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items
    },
  })
  const [openPopup, setOpenPopup] = useState(false)
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  })
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
    if (employee.id == 0) {
      employeeService.insertEmployee(employee)
    } else {
      employeeService.updateEmployee(employee)
    }
    resetForm()
    setRecordForEdit(null)
    setOpenPopup(false)
    setRecords(employeeService.getAllEmployees())
    setNotify({
      isOpen: true,
      message: 'submitted successfully',
      type: 'success',
    })
  }

  const openInPopup = (item) => {
    setRecordForEdit(item)
    setOpenPopup(true)
  }

  const onDelete = (id) => {
    setConfirmDialog({ ...confirmDialog, isOpen: false })
    employeeService.deleteEmployee(id)
    setRecords(employeeService.getAllEmployees())
    setNotify({
      isOpen: true,
      message: 'deleted successfully',
      type: 'error',
    })
  }
  return (
    <>
      <PageHeader
        title='Rohan Paspallu'
        subTitle='live life to the fullest'
        icon={<PeopleOutlineIcon fontSize='large' />}
      ></PageHeader>

      <Paper elevation={3} className={classes.pageContent}>
        {/* <EmployeeForm></EmployeeForm> */}
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
            onClick={() => {
              setOpenPopup(true)
              setRecordForEdit(null)
            }}
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
                    <Controls.ActionButton
                      color='primary'
                      onClick={() => {
                        openInPopup(record)
                      }}
                    >
                      <EditOutlinedIcon fontSize='small' />
                    </Controls.ActionButton>
                    <Controls.ActionButton
                      color='secondary'
                      onClick={() => {
                        setConfirmDialog({
                          isOpen: true,
                          title: ' Are you sure to delete the item ?',
                          subTitle: 'You cannot undo this operation',
                          onConfirm: () => {
                            onDelete(record.id)
                          },
                        })
                        // onDelete(record.id)
                      }}
                    >
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
        <EmployeeForm
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
        ></EmployeeForm>
      </Controls.Popup>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  )
}
