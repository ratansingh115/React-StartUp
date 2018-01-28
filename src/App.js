import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import {Grid,
  AppBar,
  Button,
  IconButton,
  Toolbar,Drawer,Menu,MenuItem     } from 'material-ui';
  import MenuIcon from 'material-ui-icons/Menu';
  import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
  import ChevronRightIcon from 'material-ui-icons/ChevronRight';

  import AccountCircle from 'material-ui-icons/AccountCircle';

import {
    BrowserRouter as Router,
    Route,
    Link} from 'react-router-dom'
import Switch from 'react-router-dom/Switch';

import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Links from './Components/Links';
import Content from './Components/Content';
import Sports from './Components/Sports';
import City from './Components/City';
import Login from './Components/Login';
import LoggedIn from './Components/Login';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});

class  App extends Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,
      anchor: 'left',
      isLoggedIn:false,
      //anchorEl :null
    };
    
  }
  //handleToggle = () => this.setState({open: !this.state.open});
  //handleClose = () => this.setState({open: false});
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: 'left'//event.target.value,
    });
  };
  handleLoggedIn=()=>{
    this.setState({
      isLoggedIn:!this.state.isLoggedIn
    });
  
}
  render(){
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;
    
    const drawer = (
      <Drawer
        type="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={anchor}
        open={open}
      >
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Links handleClose={this.handleClose} /> 
        </div>
      </Drawer>
    );
    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }
    return(
      <div>        
        <Router>         
          <Grid container spacing={24}>
            <Grid item lg={12}>
            <div className={classes.appFrame}>
              <AppBar
                className={classNames(classes.appBar, {
                  [classes.appBarShift]: open,
                  [classes[`appBarShift-${anchor}`]]: open,
                })}
              >
                <Toolbar disableGutters={!open}>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.hide)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography type="title" color="inherit" noWrap>
                    Ready To use React Project
                  </Typography>
                  
                  {this.state.isLoggedIn && ' Welcome User'}
                   { !this.state.isLoggedIn && 
                    <Button color='inherit'>
                      <Link   to="/Login">Login</Link>
                      <i className="material-icons">account_circle</i>
                    </Button>
                  }
                    {/* <Button color='inherit' onClick={this.handleLoggedIn}>
                      Set LogIn
                      <i className="material-icons">account_circle</i>
                    </Button> */}
                </Toolbar>
              </AppBar>
              {before}
              <main
                className={classNames(classes.content, classes[`content-${anchor}`], {
                  [classes.contentShift]: open,
                  [classes[`contentShift-${anchor}`]]: open,
                })}
              >
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/content" component={Content} />
                  <Route path="/Login" component={Login} />
                </Switch>
              </main>
              {after}
            </div>
            </Grid>
            
            <Grid item lg={8}>
               
            </Grid>
          </Grid> 
        </Router>
      </div>      
    )
  }  
}

App.propTypes={
  classes:PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}
export default withStyles(styles, { withTheme: true })(App);