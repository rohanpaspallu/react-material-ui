// import logo from './logo.svg'
import React from 'react'
import logo from '../logo.svg'
import './App.css'
import SideMenu from '../components/SideMenu'
import { CssBaseline, makeStyles } from '@material-ui/core'
import { Widgets } from '@material-ui/icons'
import Header from '../components/Header'

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
})
function App() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <SideMenu></SideMenu>

      <div className={classes.appMain}>
        <Header></Header>
      </div>
      <CssBaseline />
    </React.Fragment>
  )
}

export default App
