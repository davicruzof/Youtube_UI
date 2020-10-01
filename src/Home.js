import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Button , List, Drawer, ListItemText, Divider, ListItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';

const drawerWidth = 240;

const useStyles = makeStyles( (theme) => ({
  root: {
    height: '100vh',
  },
  appappBar: {
      boxShadow: 'none',
      zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  grow: {
      flexGrow: 1,
  },
  icons: {
    padding: 20,
  },
  logo: {
      height: 25,
  }
}));

function Home() {

  const classes = useStyles();

  return (
      <div className={classes.root}>
            <AppBar color="inherit" className={classes.appappBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <img className={ classes.logo} src="/images/preto.png" alt="logo" />
                <div className={classes.grow} />
                <IconButton edge="start" className={classes.icons} >
                    <VideoCallIcon />
                </IconButton>
                <IconButton edge="start" className={classes.icons} >
                    <AppsIcon />
                </IconButton>
                <IconButton edge="start" className={classes.icons} >
                    <MoreVert />
                </IconButton>
                <Button variant="outlined" color="secondery" startIcon={<AccountCircleIcon />}> Fazer Login</Button>
            </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                </div>
            </Drawer>
      </div>
  )
  
}

export default Home;