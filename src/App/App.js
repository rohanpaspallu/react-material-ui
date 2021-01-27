// import logo from './logo.svg'
import React from 'react'
import logo from '../logo.svg'
import './App.css'
import SideMenu from '../components/SideMenu'
import PageHeader from '../components/PageHeader'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core'
import { Widgets } from '@material-ui/icons'
import Header from '../components/Header'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126',
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526',
    },

    background: {
      default: '#f4f5fd',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)',
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
})

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
      <ThemeProvider theme={theme}>
        <SideMenu></SideMenu>

        <div className={classes.appMain}>
          <Header></Header>
          <PageHeader
            title='Rohan Paspallu'
            subTitle='live life to the fullest'
            icon={<PeopleOutlineIcon fontSize='large' />}
          ></PageHeader>
        </div>
        <CssBaseline />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
