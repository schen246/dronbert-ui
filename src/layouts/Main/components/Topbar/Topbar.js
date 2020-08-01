import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { fade, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
// import AddIcon from '@material-ui/icons/Add';
// import Fab from '@material-ui/core/Fab';
// import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
    color: '#F0FFFF',
    size: 'large',
    variant: 'contained'
  },
  logo : {
    width: '10%',
    height: 'auto',
  },
  logoText : {
    color: '#F0FFFF',
    fontFamily: 'Aclonica',
  },
  inputIcon: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    size: 'large',
    disabled: true,
  },
  sideBarController: {
    color: '#F0FFFF',
    fontSize: 'large'
  }
}));

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiIconButton: {
      label: {
        fontFamily: 'Aclonica'
      }
    },
    MuiSvgIcon: {
      root: {
        fontSize: "20px",
        width: "55px",
        height: '41px'
      }
    }
  },
});

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/robot-dribbble.jpg"
            className={classes.logo}
          />
          <span className={classes.logoText}> Dronbot </span>
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <RouterLink to='/sign-in'>
            <ThemeProvider theme={theme}>
              <IconButton
              className={classes.signOutButton}
              >
              <InputIcon />Log out
              </IconButton>
            </ThemeProvider>
          </RouterLink>
        </Hidden>
        <Hidden lgUp>
          <ThemeProvider theme={theme}>
            <IconButton
              className={classes.sideBarController}
              onClick={onSidebarOpen}
            >
              <MenuIcon />
            </IconButton>
          </ThemeProvider>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
