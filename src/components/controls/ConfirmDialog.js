import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core'
import LocationOffIcon from '@material-ui/icons/LocationOff'
import React from 'react'
import Controls from '../controls/Controls'

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5),
  },
  dialogContent: { textAlign: 'center' },
  dialogTitle: { textAlign: 'center' },
  DialogActions: {
    justifyContent: 'center',
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.light,
      cursor: 'default',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '8rem',
    },
  },
}))
export default function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialog } = props
  const classes = useStyles()
  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogTitle}>
        <IconButton disableRipple className={classes.titleIcon}>
          <LocationOffIcon></LocationOffIcon>
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant='h6'>{confirmDialog.title}</Typography>
        <Typography variant='subtitle2'>{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions className={classes.DialogActions}>
        <Controls.Button
          text='No'
          color='default'
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        ></Controls.Button>
        <Controls.Button
          text='Yes'
          color='secondary'
          onClick={confirmDialog.onConfirm}
        ></Controls.Button>
      </DialogActions>
    </Dialog>
  )
}
