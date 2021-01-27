import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
} from '@material-ui/core'
import React from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
  },

  searchInput: {
    opacity: '0.6',
    padding: '0px 8px',
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: '#f2f2f2',
    },

    '& .MuiSvgIcon-root': {
      marginRight: '8px',
    },
  },

  btnRoot: {
    backgroundColor: 'green',
  },
  btnLabel: {
    backgroundColor: 'red',
  },
})

export default function Header() {
  const classes = useStyles()
  return (
    <div>
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <Grid container alignItems='center'>
            <Grid item>
              <InputBase
                className={classes.searchInput}
                placeholder='search topic'
                startAdornment={<SearchIcon fontSize='small' />}
              />
            </Grid>

            <Grid item sm></Grid>
            <Grid item>
              <IconButton
                classes={{ root: classes.btnRoot, label: classes.btnLabel }}
              >
                <Badge badgeContent={4} color='secondary'>
                  <NotificationsNoneIcon fontSize='small'></NotificationsNoneIcon>
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={3} color='primary'>
                  <ChatBubbleOutlineIcon fontSize='small'></ChatBubbleOutlineIcon>
                </Badge>
              </IconButton>

              <IconButton>
                <PowerSettingsNewIcon fontSize='small'></PowerSettingsNewIcon>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
