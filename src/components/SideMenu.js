// import { makeStyles } from '@material-ui/core'
import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core'

// const useStyles = makeStyles({
//   sideMenu: {
//     display: 'flex',
//     flexDirection: 'row',
//     position: 'absolute',
//     left: '0px',
//     width: '320px',
//     height: '100%',
//     backgroundColor: '#253053',
//   },
// })

const useStyles = makeStyles({
  sideMenu: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '100%',
    backgroundColor: '#253053',
  },
})

export default function SideMenu() {
  const classes = useStyles()
  return <div className={classes.sideMenu}></div>
}

// export default SideMenu
